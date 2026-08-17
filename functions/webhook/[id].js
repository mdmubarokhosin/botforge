/**
 * BotForge Webhook Handler — Cloudflare Pages Function
 * 
 * ⚠️ Cloudflare Workers "new Function()" / "eval()" ব্লক করে।
 * তাই সব হ্যান্ডলার এখানে pre-built আছে।
 * bot-config.json এ "type" ও "config" দিয়ে বট কনফিগার করতে হবে।
 */

let cachedConfig = null;
let cacheTime = 0;
const CACHE_TTL = 15000;

async function loadConfig(request) {
  const now = Date.now();
  if (cachedConfig && (now - cacheTime) < CACHE_TTL) return cachedConfig;
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host');
  try {
    const res = await fetch(proto + '://' + host + '/bot-config.json');
    if (!res.ok) return null;
    cachedConfig = await res.json();
    cacheTime = now;
    return cachedConfig;
  } catch (e) {
    console.error('[BotForge] Config error:', e.message);
    return null;
  }
}

/* ─── Telegram API Helper ─── */
function createApi(token) {
  async function tg(method, data) {
    try {
      const r = await fetch('https://api.telegram.org/bot' + token + '/' + method, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await r.json();
    } catch (e) {
      return { ok: false, description: e.message };
    }
  }
  return {
    sendMessage(id, text, opts) { return tg('sendMessage', { chat_id: String(id), text, ...opts }); },
    sendPhoto(id, photo, opts) { return tg('sendPhoto', { chat_id: String(id), photo, ...opts }); },
    sendDocument(id, doc, opts) { return tg('sendDocument', { chat_id: String(id), document: doc, ...opts }); },
  };
}

/* ═══════════════════════════════════════════════════════════════
   BUILT-IN HANDLERS — নতুন হ্যান্ডলার এখানে যোগ করুন
   ═══════════════════════════════════════════════════════════════ */

/* ─── 1. ECHO বট ─── */
async function handleEcho(update, api, config) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  if (!text) return;
  if (text === '/start') {
    await api.sendMessage(chatId, (config.welcomeMessage || 'স্বাগতম! আমি ইকো বট। আপনার মেসেজ ফেরত পাঠাবো।'),
      { parse_mode: 'HTML' });
    return;
  }
  const prefix = config.prefix || '';
  await api.sendMessage(chatId, prefix + text);
}

/* ─── 2. AI চ্যাট বট ─── */
async function handleAIChat(update, api, config) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const name = update.message?.from?.first_name || 'বন্ধু';
  if (!text) return;

  if (text === '/start') {
    await api.sendMessage(chatId, config.welcomeMessage ||
      'স্বাগতম, ' + name + '! আমি AI চ্যাটবট। যেকোনো প্রশ্ন করুন।',
      { parse_mode: 'HTML' });
    return;
  }
  if (text === '/help') {
    await api.sendMessage(chatId, config.helpMessage || '/start, /help, অথবা যেকোনো প্রশ্ন করুন।',
      { parse_mode: 'HTML' });
    return;
  }

  await api.sendMessage(chatId, '🤔 ভাবছি...');
  try {
    const apiUrl = config.apiUrl || 'https://inference.poolside.ai/v1/chat/completions';
    const model = config.model || 'poolside/laguna-s-2.1';
    const sysPrompt = config.systemPrompt || 'তুমি একজন সাহায্যকারী AI। বাংলা ও ইংরেজিতে উত্তর দাও।';
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + config.apiKey },
      body: JSON.stringify({
        model, max_tokens: 2048, temperature: 0.7,
        messages: [
          { role: 'system', content: sysPrompt },
          { role: 'user', content: text },
        ],
      }),
    });
    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content || 'দুঃখিত, উত্তর পাওয়া যায়নি।';
    await api.sendMessage(chatId, answer);
  } catch (err) {
    await api.sendMessage(chatId, '❌ এরর: ' + err.message);
  }
}

/* ─── 3. AI ছবি বট ─── */
async function handleAIImage(update, api, config) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  if (!text) return;

  if (text === '/start') {
    await api.sendMessage(chatId, config.welcomeMessage ||
      'স্বাগতম! ছবি তৈরি করতে লিখুন:\n/img একটি সূর্যোদয়',
      { parse_mode: 'HTML' });
    return;
  }

  const prompt = text.replace(/^\/(img|image)\s*/i, '').trim();
  if (!prompt) {
    await api.sendMessage(chatId, 'অনুগ্রহ করে একটি বর্ণনা দিন। উদাহরণ: /img একটি পাহাড়');
    return;
  }

  await api.sendMessage(chatId, '🖼 ছবি তৈরি হচ্ছে...');
  const imgUrl = (config.imageUrl || 'https://image.pollinations.ai/prompt/') +
    encodeURIComponent(prompt + ', high quality, detailed, 4k') + '?width=1024&height=1024&nologo=true';
  await api.sendPhoto(chatId, imgUrl, { caption: prompt });
}

/* ─── 4. AI সহকারী (চ্যাট + ছবি + ভিডিও স্ক্রিপ্ট) ─── */
async function handleAIAssistant(update, api, config) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const name = update.message?.from?.first_name || 'বন্ধু';
  if (!text) return;

  if (text === '/start') {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + name + '! AI সহকারী বটে স্বাগতম! 🤖✨\n\n' +
      'আমি তিনটি কাজ করতে পারি:\n' +
      '💬 প্রশ্নের উত্তর — যেকোনো প্রশ্ন করুন\n' +
      '🖼 ছবি তৈরি — "/img একটি সূর্যোদয়" লিখুন\n' +
      '🎬 ভিডিও স্ক্রিপ্ট — "/vid একটি বৃষ্টির দৃশ্য" লিখুন\n\n' +
      'সরাসরি মেসেজ করুন, আমি বুঝে নেবো! 🧠',
      { parse_mode: 'HTML' });
    return;
  }
  if (text === '/help') {
    await api.sendMessage(chatId,
      'কমান্ড:\n/start, /help, /ask [প্রশ্ন], /img [বর্ণনা], /vid [বর্ণনা]',
      { parse_mode: 'HTML' });
    return;
  }

  // Intent detection
  const l = text.toLowerCase();
  let intent = 'question';
  const imgKW = (config.imageKeywords || 'ছবি তৈরি,ইমেজ তৈরি,ছবি,ইমেজ,photo,image,draw,paint,picture,/img,/image').split(',');
  const vidKW = (config.videoKeywords || 'ভিডিও তৈরি,ভিডিও,/vid,/video,video,animation').split(',');

  if (/^\/(img|image)\s/i.test(l)) intent = 'image';
  else if (/^\/(vid|video)\s/i.test(l)) intent = 'video';
  else {
    for (const k of imgKW) { if (l.includes(k.trim())) { intent = 'image'; break; } }
    if (intent === 'question') {
      for (const k of vidKW) { if (l.includes(k.trim())) { intent = 'video'; break; } }
    }
  }

  let prompt = text.replace(/^\/(img|image|vid|video|ask|q)\s*/i, '').trim();
  if (!prompt) {
    await api.sendMessage(chatId, 'অনুগ্রহ করে একটি প্রশ্ন বা বর্ণনা দিন।');
    return;
  }

  try {
    if (intent === 'image') {
      await api.sendMessage(chatId, '🖼 ছবি তৈরি হচ্ছে...');
      const imgUrl = (config.imageUrl || 'https://image.pollinations.ai/prompt/') +
        encodeURIComponent(prompt + ', high quality, detailed, 4k') + '?width=1024&height=1024&nologo=true';
      await api.sendPhoto(chatId, imgUrl, { caption: prompt });
    } else if (intent === 'video') {
      await api.sendMessage(chatId, '🎬 ভিডিও স্ক্রিপ্ট তৈরি হচ্ছে...');
      const answer = await callAI(config, 'এই ভিডিওর জন্য একটি স্ক্রিপ্ট লিখো: ' + prompt);
      await api.sendMessage(chatId, answer);
    } else {
      await api.sendMessage(chatId, '🤔 ভাবছি...');
      const answer = await callAI(config, prompt);
      await api.sendMessage(chatId, '🤖 ' + answer);
    }
  } catch (err) {
    await api.sendMessage(chatId, '❌ ' + (err.message || 'Error'));
  }
}

/* ─── AI API Call Helper ─── */
async function callAI(config, prompt) {
  const apiUrl = config.apiUrl || 'https://inference.poolside.ai/v1/chat/completions';
  const model = config.model || 'poolside/laguna-s-2.1';
  const sysPrompt = config.systemPrompt || 'তুমি একজন সাহায্যকারী AI সহকারী। বাংলা ও ইংরেজি উভয় ভাষায় উত্তর দাও। সংক্ষিপ্ত ও সুন্দর উত্তর দাও।';
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + config.apiKey },
    body: JSON.stringify({
      model, max_tokens: 2048, temperature: 0.7,
      messages: [
        { role: 'system', content: sysPrompt },
        { role: 'user', content: prompt },
      ],
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'দুঃখিত, উত্তর পাওয়া যায়নি।';
}

/* ─── 5. কাস্টম কমান্ড রাউটার ─── */
async function handleCommandRouter(update, api, config) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  if (!text) return;

  const commands = config.commands || {};

  // /start ও /help সবসময় কাজ করে
  if (text === '/start') {
    await api.sendMessage(chatId, config.welcomeMessage || 'স্বাগতম!', { parse_mode: 'HTML' });
    return;
  }
  if (text === '/help') {
    const helpText = Object.entries(commands).map(([cmd, cfg]) => '/' + cmd + ' — ' + (cfg.description || '')).join('\n');
    await api.sendMessage(chatId, config.helpMessage || 'কমান্ড:\n' + helpText, { parse_mode: 'HTML' });
    return;
  }

  // কমান্ড ম্যাচিং
  const cmd = text.split(' ')[0].replace('/', '');
  if (commands[cmd]) {
    const c = commands[cmd];
    if (c.type === 'ai') {
      await api.sendMessage(chatId, '🤔 ভাবছি...');
      const answer = await callAI(config, text.replace('/' + cmd, '').trim());
      await api.sendMessage(chatId, answer);
    } else {
      await api.sendMessage(chatId, c.response || 'কোনো রেসপন্স সেট করা নেই।', { parse_mode: 'HTML' });
    }
    return;
  }

  // ডিফল্ট রেসপন্স
  if (config.defaultResponse) {
    await api.sendMessage(chatId, config.defaultResponse, { parse_mode: 'HTML' });
  }
}

/* ─── Handler Registry ─── */
const HANDLERS = {
  'echo': handleEcho,
  'ai-chat': handleAIChat,
  'ai-image': handleAIImage,
  'ai-assistant': handleAIAssistant,
  'command-router': handleCommandRouter,
};

/* ═══════════════════════════════════════════════════════════════
   MAIN REQUEST HANDLERS
   ═══════════════════════════════════════════════════════════════ */

export async function onRequestPost(ctx) {
  const { request, params } = ctx;
  const botId = params.id;
  console.log('[BotForge] POST /webhook/' + botId);

  const config = await loadConfig(request);
  if (!config?.bots?.[botId]) {
    return new Response(JSON.stringify({ error: 'Bot not found', botId }),
      { status: 404, headers: { 'Content-Type': 'application/json' } });
  }

  const bot = config.bots[botId];
  if (bot.status === 'inactive') return new Response('Inactive');

  let update;
  try { update = await request.json(); } catch { return new Response('Bad JSON', { status: 400 }); }

  console.log('[BotForge] Bot:', bot.name, '| Type:', bot.type, '| Text:', update.message?.text || '(none)');

  const api = createApi(bot.token);
  const handlerType = bot.type || 'echo';
  const handler = HANDLERS[handlerType];

  if (!handler) {
    console.error('[BotForge] Unknown handler type:', handlerType, '| Available:', Object.keys(HANDLERS));
    return new Response(JSON.stringify({
      error: 'Unknown handler type', type: handlerType,
      available: Object.keys(HANDLERS),
    }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    await handler(update, api, bot.config || {});
    console.log('[BotForge] Handler executed OK');
  } catch (err) {
    console.error('[BotForge] Handler error:', err.message, err.stack);
  }

  return new Response('OK');
}

export async function onRequestGet(ctx) {
  const { request, params } = ctx;
  const botId = params.id;
  const config = await loadConfig(request);

  if (!config?.bots?.[botId]) {
    return new Response(JSON.stringify({ error: 'Bot not found', botId }),
      { status: 404, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  const bot = config.bots[botId];
  const host = request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const whUrl = proto + '://' + host + '/webhook/' + botId;

  return new Response(JSON.stringify({
    status: 'active', botId, name: bot.name, type: bot.type,
    setWebhookUrl: 'https://api.telegram.org/bot' + bot.token + '/setWebhook?url=' + encodeURIComponent(whUrl),
    webhookUrl: whUrl,
  }), { status: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: {
    'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }});
}