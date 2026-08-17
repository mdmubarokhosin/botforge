'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

/* ─── Types ─── */
interface Bot {
  id: string;
  name: string;
  token: string;
  username: string;
  status: 'active' | 'inactive' | 'error';
  code: string;
  templateId: string;
  type: string;
  config: Record<string, string>;
  createdAt: string;
  webhookUrl: string;
  lastPing: string;
  messagesReceived: number;
  messagesSent: number;
}

/* ─── Bot Templates ─── */
interface BotTemplate {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  code: string;
  type: string;
  defaultConfig: Record<string, string>;
}

const BOT_TEMPLATES: BotTemplate[] = [
  {
    id: 'blank',
    type: 'echo',
    defaultConfig: {},
    name: 'খালি বট',
    icon: 'bi-file-earmark-code',
    description: 'সম্পূর্ণ খালি টেমপ্লেট। নিজের মতো সবকিছ লিখুন।',
    category: 'বেসিক',
    code: `module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;

  if (text === '/start') {
    await api.sendMessage(chatId, 'বট চালু হয়েছে! ✅');
  }
};`,
  },
  {
    id: 'welcome',
    type: 'echo',
    defaultConfig: { welcomeMessage: 'স্বাগতম! 👋' },
    name: 'ওয়েলকাম বট',
    icon: 'bi-emoji-smile',
    description: '/start, /help কমান্ড এবং ইউজার গ্রিটিং সহ সম্পূর্ণ ওয়েলকাম বট।',
    category: 'বেসিক',
    code: `module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const firstName = update.message?.from?.first_name || 'বন্ধু';

  if (text === '/start') {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + firstName + '! 👋\\n\\n' +
      'আমি আপনার সহকারী বট। নিচের কমান্ডগুলো ব্যবহার করুন:\\n\\n' +
      '/help - সাহায্য দেখুন\\n' +
      '/about - আমার সম্পর্কে জানুন\\n' +
      '/ping - সংযোগ পরীক্ষা করুন'
    );
  } else if (text === '/help') {
    await api.sendMessage(chatId,
      '📖 *সাহায্য তালিকা*\\n\\n' +
      '/start - বট শুরু করুন\\n' +
      '/help - এই মেসেজ দেখুন\\n' +
      '/about - বট সম্পর্কে\\n' +
      '/ping - সংযোগ যাচাই',
      { parse_mode: 'Markdown' }
    );
  } else if (text === '/about') {
    await api.sendMessage(chatId,
      '🤖 *আমার সম্পর্কে*\\n\\n' +
      'আমি BotForge প্ল্যাটফর্মে তৈরি একটি Telegram বট।\\n' +
      'সম্পূর্ণ ফ্রি, কোনো সীমাবদ্ধতা নেই।',
      { parse_mode: 'Markdown' }
    );
  } else if (text === '/ping') {
    const start = Date.now();
    await api.sendMessage(chatId, 'pong! 🏓');
    const ms = Date.now() - start;
    await api.sendMessage(chatId, 'রেসপন্স টাইম: ' + ms + 'ms');
  }
};`,
  },
  {
    id: 'echo',
    type: 'echo',
    defaultConfig: { prefix: '🔁 ' },
    name: 'ইকো বট',
    icon: 'bi-arrow-repeat',
    description: 'প্রাপ্ত মেসেজ, ছবি, ফাইল সব ফিরিয়ে পাঠায়। টেস্টিং এর জন্য পারফেক্ট।',
    category: 'বেসিক',
    code: `module.exports = async function(update, api) {
  const message = update.message;
  if (!message) return;

  const chatId = message.chat.id;
  const text = message.text || '';

  if (text === '/start') {
    await api.sendMessage(chatId, 'ইকো বট চালু! যেকোনো মেসেজ পাঠান, আমি ফিরিয়ে পাঠাবো 🔁');
    return;
  }

  // টেক্সট মেসেজ ইকো
  if (text) {
    await api.sendMessage(chatId, '🔁 ' + text);
    return;
  }

  // ফটো ইকো
  if (message.photo) {
    const photo = message.photo[message.photo.length - 1];
    await api.sendPhoto(chatId, photo.file_id, {
      caption: '📷 আপনার ছবি ফিরিয়ে পাঠালাম!'
    });
    return;
  }

  // ডকুমেন্ট ইকো
  if (message.document) {
    await api.sendDocument(chatId, message.document.file_id, {
      caption: '📎 আপনার ফাইল ফিরিয়ে পাঠালাম!'
    });
  }
};`,
  },
  {
    id: 'faq',
    type: 'command-router',
    defaultConfig: { defaultResponse: 'আমি FAQ বট। /help দেখুন।' },
    name: 'FAQ বট',
    icon: 'bi-question-circle',
    description: 'প্রি-ডিফাইন্ড প্রশ্ন-উত্তর বট। নতুন কর্মী, কাস্টমার সাপোর্ট এর জন্য আদর্শ।',
    category: 'ব্যবসা',
    code: `const faqs = [
  { q: 'আপনাদের কাজের সময় কত?', a: 'শনি-বৃহস্পতি, সকাল ৯টা - সন্ধ্যা ৬টা।' },
  { q: 'ডেলিভারি কত দিনে হয়?', a: 'ঢাকায় ১-২ দিন, ঢাকার বাইরে ৩-৫ দিন।' },
  { q: 'পেমেন্ট কীভাবে করবো?', a: 'বিকাশ, নগদ, রকেট এবং ক্যাশ অন ডেলিভারি।' },
  { q: 'রিটার্ন পলিসি কী?', a: 'পণ্য হাতে পাওয়ার ৭ দিনের মধ্যে রিটার্ন করতে পারবেন।' },
  { q: ' wholesale রেট পাবো?', a: 'হ্যাঁ! প্রচুর অর্ডারে স্পেশাল দাম দেওয়া হয়।' },
];

module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start' || text === '/help') {
    let msg = '🤖 *FAQ বট*\\n\\nপ্রশ্ন লিখুন অথবা নম্বর দিন:\\n\\n';
    faqs.forEach((f, i) => {
      msg += (i + 1) + '. ' + f.q + '\\n';
    });
    msg += '\\nঅথবা সরাসরি আপনার প্রশ্ন লিখুন!';
    await api.sendMessage(chatId, msg, { parse_mode: 'Markdown' });
    return;
  }

  // নম্বর দিয়ে প্রশ্ন খুঁজুন
  const num = parseInt(text);
  if (num >= 1 && num <= faqs.length) {
    const faq = faqs[num - 1];
    await api.sendMessage(chatId, '*Q: ' + faq.q + '*\\n\\nA: ' + faq.a, { parse_mode: 'Markdown' });
    return;
  }

  // কীওয়ার্ড ম্যাচিং
  const found = faqs.find(f => text.includes(f.q) || f.q.includes(text));
  if (found) {
    await api.sendMessage(chatId, '*Q: ' + found.q + '*\\n\\nA: ' + found.a, { parse_mode: 'Markdown' });
    return;
  }

  // ম্যাচ না পাওয়া গেলে
  await api.sendMessage(chatId, 'দুঃখিত, আমি এই প্রশ্নের উত্তর জানি না। /help দেখুন।');
};`,
  },
  {
    id: 'poll',
    type: 'echo',
    defaultConfig: {},
    name: 'পোল বট',
    icon: 'bi-bar-chart',
    description: 'ইনলাইন পোল তৈরি করুন এবং ভোট সংগ্রহ করুন। গ্রুপ এবং চ্যানেলের জন্য।',
    category: 'ব্যবসা',
    code: `const polls = {};

module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start' || text === '/help') {
    await api.sendMessage(chatId,
      '📊 *পোল বট*\\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/newpoll প্রশ্ন | বিকল্প১ | বিকল্প২ | বিকল্প৩\\n' +
      '/mypolls - আপনার পোল দেখুন\\n\\n' +
      'উদাহরণ:\\n' +
      '/newpoll আপনার পছন্দের ফল কী? | আম | কাঁঠাল | লিচু | আনারস',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text.startsWith('/newpoll ')) {
    const parts = text.substring(9).split('|').map(s => s.trim());
    if (parts.length < 3) {
      await api.sendMessage(chatId, '❌ কমপক্ষে ২টি বিকল্প দিন।\nফরম্যাট: /newpoll প্রশ্ন | বিকল্প১ | বিকল্প২');
      return;
    }
    const question = parts[0];
    const options = parts.slice(1);
    const pollId = 'p_' + Date.now();
    polls[pollId] = { question, options, votes: options.map(() => 0), totalVoters: new Set() };

    let msg = '📊 *' + question + '*\\n\\n';
    options.forEach((o, i) => {
      msg += String.fromCharCode(65 + i) + ') ' + o + '\\n';
    });
    msg += '\\nভোট দিতে বিকল্পের অক্ষর পাঠান (A, B, C...)';
    await api.sendMessage(chatId, msg, { parse_mode: 'Markdown' });
    return;
  }

  if (text.startsWith('/mypolls')) {
    const keys = Object.keys(polls);
    if (keys.length === 0) {
      await api.sendMessage(chatId, 'কোনো পোল নেই। /newpoll দিয়ে তৈরি করুন।');
      return;
    }
    let msg = '📋 *আপনার পোলসমূহ*:\\n\\n';
    keys.forEach(k => { msg += '- ' + polls[k].question + '\\n'; });
    await api.sendMessage(chatId, msg, { parse_mode: 'Markdown' });
    return;
  }
};`,
  },
  {
    id: 'notification',
    type: 'echo',
    defaultConfig: { prefix: '📢 ' },
    name: 'নোটিফিকেশন বট',
    icon: 'bi-bell',
    description: 'আপডেট, রিমাইন্ডার বা কাস্টম নোটিফিকেশন পাঠায়। টীম ও কমিউনিটি ম্যানেজমেন্টের জন্য।',
    category: 'ব্যবসা',
    code: `module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start' || text === '/help') {
    await api.sendMessage(chatId,
      '🔔 *নোটিফিকেশন বট*\\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/notify মেসেজ - সবাইকে নোটিফিকেশন পাঠান\\n' +
      '/announce শিরোনাম | বডি - ঘোষণা করুন\\n' +
      '/status - বটের অবস্থা দেখুন',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text.startsWith('/notify ')) {
    const msg = text.substring(8);
    const now = new Date().toLocaleString('bn-BD');
    await api.sendMessage(chatId,
      '🔔 *নোটিফিকেশন*\\n\\n' + msg + '\\n\\n⏰ ' + now,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text.startsWith('/announce ')) {
    const parts = text.substring(10).split('|').map(s => s.trim());
    const title = parts[0] || 'ঘোষণা';
    const body = parts[1] || '';
    const now = new Date().toLocaleString('bn-BD');
    await api.sendMessage(chatId,
      '📢 *' + title + '*\\n\\n' + body + '\\n\\n📅 ' + now,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text === '/status') {
    await api.sendMessage(chatId,
      '✅ *বট সচল*\\n\\n' +
      '🕐 ' + new Date().toLocaleString('bn-BD') + '\\n' +
      '📡 Cloudflare Pages',
      { parse_mode: 'Markdown' }
    );
  }
};`,
  },
  {
    id: 'api-handler',
    type: 'echo',
    defaultConfig: {},
    name: 'API হ্যান্ডলার বট',
    icon: 'bi-plug',
    description: 'প্ল্যাটফর্ম ম্যানেজড ক্রেডেনশিয়াল, telegramApi() ফাংশন, ADMIN_ID, error handling সহ সম্পূর্ণ প্রোডাকশন বট।',
    category: 'বেসিক',
    code: `// ─── কনফিগারেশন (শুধুমাত্র এই অংশ পরিবর্তন করুন) ───
const ADMIN_ID = 123456789; // আপনার Telegram User ID দিন
const BOT_NAME = 'MyBot';

// ─── Telegram API ফাংশন (পরিবর্তন করবেন না) ───
async function telegramApi(token, method, data = {}) {
  const url = 'https://api.telegram.org/bot' + token + '/' + method;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (err) {
    console.error('telegramApi ত্রুটি (' + method + '):', err.message);
    return { ok: false, description: err.message };
  }
}

// ─── মূল হ্যান্ডলার ───
module.exports = async function(update, api) {
  const message = update.message;
  if (!message || !message.chat) return;

  const chatId = message.chat.id;
  const text = (message.text || '').trim();
  const fromId = message.from?.id;
  const fromName = message.from?.first_name || 'বন্ধু';
  const isPrivate = message.chat.type === 'private';
  const isGroup = message.chat.type === 'group' || message.chat.type === 'supergroup';
  const isAdmin = fromId === ADMIN_ID;

  // /start কমান্ড (বট username সহও কাজ করবে)
  if (/^\/start(\@\w+)?(\s|$)/i.test(text)) {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + fromName + '! \\n\\n' +
      'প্ল্যাটফর্ম ম্যানেজড ক্রেডেনশিয়াল সহ বট চলছে। \\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/status - বটের অবস্থা\\n' +
      '/info - চ্যাট তথ্য\\n' +
      '/admin - অ্যাডমিন প্যানেল (শুধু অ্যাডমিন)\\n' +
      '/ping - সংযোগ পরীক্ষা'
    );
    return;
  }

  // /ping - রেসপন্স টাইম টেস্ট
  if (/^\/ping(\@\w+)?(\s|$)/i.test(text)) {
    const start = Date.now();
    await api.sendMessage(chatId, 'pong!');
    const ms = Date.now() - start;
    await api.sendMessage(chatId, 'রেসপন্স টাইম: ' + ms + 'ms');
    return;
  }

  // /status - বট স্ট্যাটাস
  if (/^\/status(\@\w+)?(\s|$)/i.test(text)) {
    const now = new Date().toLocaleString('bn-BD');
    await api.sendMessage(chatId,
      '*বট স্ট্যাটাস*\\n\\n' +
      'নাম: ' + BOT_NAME + '\\n' +
      'স্ট্যাটাস: সচল \\u2705\\n' +
      'সময়: ' + now + '\\n' +
      'হোস্টিং: Cloudflare Pages',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // /info - চ্যাট তথ্য
  if (/^\/info(\@\w+)?(\s|$)/i.test(text)) {
    await api.sendMessage(chatId,
      '*চ্যাট তথ্য*\\n\\n' +
      'চ্যাট ID: ' + chatId + '\\n' +
      'ধরন: ' + message.chat.type + '\\n' +
      'ব্যবহারকারী: ' + fromName + ' (' + fromId + ')\\n' +
      'গ্রুপ: ' + (isGroup ? 'হ্যাঁ' : 'না') + '\\n' +
      'অ্যাডমিন: ' + (isAdmin ? 'হ্যাঁ' : 'না'),
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // /admin - অ্যাডমিন প্যানেল (শুধু ADMIN_ID)
  if (/^\/admin(\@\w+)?(\s|$)/i.test(text)) {
    if (!isAdmin) {
      await api.sendMessage(chatId, 'দুঃখিত, এই কমান্ড শুধুমাত্র অ্যাডমিনের জন্য।');
      return;
    }
    await api.sendMessage(chatId,
      '*অ্যাডমিন প্যানেল*\\n\\n' +
      'আপনি অ্যাডমিন হিসেবে যা করতে পারবেন:\\n' +
      '1. সব কমান্ড ব্যবহার করা\\n' +
      '2. বট রিস্টার্ট দেওয়া\\n' +
      '3. ব্রডকাস্ট মেসেজ পাঠানো\\n\\n' +
      'আপনার ID: ' + ADMIN_ID,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // অজানা কমান্ড
  if (text.startsWith('/')) {
    await api.sendMessage(chatId, 'কমান্ড চিনতে পারিনি। /start দেখুন।');
  }
};`,
  },
  {
    id: 'user-management',
    type: 'command-router',
    defaultConfig: { welcomeMessage: 'স্বাগতম! ইউজার ম্যানেজমেন্ট বট।' },
    name: 'ইউজার ম্যানেজমেন্ট বট',
    icon: 'bi-people',
    description: 'ইউজার রেজিস্ট্রেশন, প্রোফাইল, অ্যাডমিন ব্যান/আনব্যান, ব্রডকাস্ট, স্ট্যাটিসটিকস সহ সম্পূর্ণ ইউজার ম্যানেজমেন্ট বট।',
    category: 'ব্যবসা',
    code: `// ─── কনফিগারেশন ───
const ADMIN_ID = 123456789;
const BOT_NAME = 'UserManagerBot';

// ─── ইন-মেমোরি স্টোরেজ (রিস্টার্টে রিসেট হবে) ───
const users = {};       // { chatId: { name, username, joinedAt, banned, messageCount } }
const warnings = {};    // { chatId: count }
const MAX_WARNINGS = 3;

function getUser(chatId, from) {
  if (!users[chatId]) {
    users[chatId] = {
      name: from?.first_name || 'Unknown',
      username: from?.username || '',
      joinedAt: new Date().toLocaleString('bn-BD'),
      banned: false,
      messageCount: 0,
    };
  }
  users[chatId].messageCount++;
  return users[chatId];
}

function getUserCount() { return Object.keys(users).length; }
function getActiveUsers() { return Object.values(users).filter(u => !u.banned).length; }

// ─── মূল হ্যান্ডলার ───
module.exports = async function(update, api) {
  const message = update.message;
  if (!message || !message.chat) return;

  const chatId = String(message.chat.id);
  const text = (message.text || '').trim();
  const from = message.from || {};
  const fromId = from.id;
  const fromName = from.first_name || 'বন্ধু';
  const isAdmin = fromId === ADMIN_ID;
  const isPrivate = message.chat.type === 'private';

  // ইউজার ট্র্যাকিং
  const user = getUser(chatId, from);

  // ব্যান চেক
  if (user.banned && !isAdmin) {
    if (text === '/appeal') {
      await api.sendMessage(chatId,
        'আপনি ব্যানড। আনব্যানের জন্য অ্যাডমিনকে যোগাযোগ করুন।'
      );
    }
    return;
  }

  // ═══ /start - রেজিস্ট্রেশন ═══
  if (/^\/start(\@\w+)?(\s|$)/i.test(text)) {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + fromName + '! \\n\\n' +
      'আপনি সফলভাবে নিবন্ধিত হয়েছেন। \\n\\n' +
      'কমান্ডসমূহ:\\n' +
      '/me - আপনার প্রোফাইল দেখুন\\n' +
      '/stats - বট পরিসংখ্যান\\n' +
      '/help - সাহায্য দেখুন',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // ═══ /me - প্রোফাইল ═══
  if (/^\/me(\@\w+)?(\s|$)/i.test(text)) {
    const u = users[chatId] || {};
    await api.sendMessage(chatId,
      '*প্রোফাইল*\\n\\n' +
      'নাম: ' + u.name + '\\n' +
      'ইউজারনেম: ' + (u.username || 'নেই') + '\\n' +
      'যোগদান: ' + u.joinedAt + '\\n' +
      'মেসেজ: ' + u.messageCount + '\\n' +
      'স্ট্যাটাস: ' + (u.banned ? 'ব্যানড' : 'সক্রিয়'),
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // ═══ /help - সাহায্য ═══
  if (/^\/help(\@\w+)?(\s|$)/i.test(text)) {
    let help = '*সাহায্য*\\n\\n' +
      '/me - প্রোফাইল দেখুন\\n' +
      '/stats - পরিসংখ্যান\\n';
    if (isAdmin) {
      help += '\\n*অ্যাডমিন কমান্ড:*\\n' +
        '/broadcast মেসেজ - সবাইকে পাঠান\\n' +
        '/ban ID - ইউজার ব্যান\\n' +
        '/unban ID - ব্যান তুলুন\\n' +
        '/warn ID - সতর্কতা দিন\\n' +
        '/users - ইউজার তালিকা\\n' +
        '/stats - বিস্তারিত পরিসংখ্যান';
    }
    await api.sendMessage(chatId, help, { parse_mode: 'Markdown' });
    return;
  }

  // ═══ /stats - পরিসংখ্যান ═══
  if (/^\/stats(\@\w+)?(\s|$)/i.test(text)) {
    const total = getUserCount();
    const active = getActiveUsers();
    const banned = total - active;
    const totalMsg = Object.values(users).reduce((a, u) => a + u.messageCount, 0);
    await api.sendMessage(chatId,
      '*বট পরিসংখ্যান*\\n\\n' +
      'মোট ইউজার: ' + total + '\\n' +
      'সক্রিয়: ' + active + '\\n' +
      'ব্যানড: ' + banned + '\\n' +
      'মোট মেসেজ: ' + totalMsg,
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // ═══ অ্যাডমিন কমান্ড (শুধু ADMIN_ID) ═══
  if (!isAdmin) return;

  // /broadcast
  if (text.startsWith('/broadcast ')) {
    const msg = text.substring(10);
    if (!msg) {
      await api.sendMessage(chatId, 'ব্রডকাস্ট মেসেজ দিন: /broadcast আপনার মেসেজ');
      return;
    }
    let sent = 0, failed = 0;
    for (const [uid, u] of Object.entries(users)) {
      if (u.banned) continue;
      try {
        await api.sendMessage(uid, '📢 *ব্রডকাস্ট*\\n\\n' + msg, { parse_mode: 'Markdown' });
        sent++;
      } catch { failed++; }
    }
    await api.sendMessage(chatId, 'ব্রডকাস্ট সম্পন্ন! পাঠানো: ' + sent + ', ব্যর্থ: ' + failed);
    return;
  }

  // /ban
  if (text.startsWith('/ban ')) {
    const targetId = text.substring(5).trim();
    if (users[targetId]) {
      users[targetId].banned = true;
      await api.sendMessage(chatId, users[targetId].name + ' ব্যান করা হয়েছে।');
      try { await api.sendMessage(targetId, 'আপনি ব্যান করা হয়েছে।'); } catch {}
    } else {
      await api.sendMessage(chatId, 'ইউজার পাওয়া যায়নি।');
    }
    return;
  }

  // /unban
  if (text.startsWith('/unban ')) {
    const targetId = text.substring(7).trim();
    if (users[targetId]) {
      users[targetId].banned = false;
      await api.sendMessage(chatId, users[targetId].name + ' এর ব্যান তুলে নেওয়া হয়েছে।');
    } else {
      await api.sendMessage(chatId, 'ইউজার পাওয়া যায়নি।');
    }
    return;
  }

  // /warn
  if (text.startsWith('/warn ')) {
    const targetId = text.substring(6).trim();
    if (users[targetId]) {
      warnings[targetId] = (warnings[targetId] || 0) + 1;
      const wc = warnings[targetId];
      if (wc >= MAX_WARNINGS) {
        users[targetId].banned = true;
        await api.sendMessage(chatId, users[targetId].name + ' ' + MAX_WARNINGS + ' বার সতর্কতা পেয়ে অটো-ব্যান।');
      } else {
        await api.sendMessage(chatId, users[targetId].name + ' কে সতর্কতা দেওয়া হয়েছে (' + wc + '/' + MAX_WARNINGS + ')');
      }
    } else {
      await api.sendMessage(chatId, 'ইউজার পাওয়া যায়নি।');
    }
    return;
  }

  // /users - ইউজার লিস্ট
  if (/^\/users(\@\w+)?(\s|$)/i.test(text)) {
    const list = Object.entries(users).map(([id, u]) =>
      (u.banned ? '⛔' : '✅') + ' ' + u.name + ' (' + id + ') - ' + u.messageCount + ' msg'
    );
    const chunk = list.join('\\n');
    await api.sendMessage(chatId,
      '*ইউজার তালিকা (' + getUserCount() + ')*\\n\\n' +
      (chunk || 'কোনো ইউজার নেই'),
      { parse_mode: 'Markdown' }
    );
    return;
  }
};`,
  },
  {
    id: 'ai-assistant',
    type: 'ai-assistant',
    defaultConfig: { apiKey: '', apiUrl: 'https://inference.poolside.ai/v1/chat/completions', model: 'poolside/laguna-s-2.1', imageUrl: 'https://image.pollinations.ai/prompt/', systemPrompt: 'তুমি একজন সাহায্যকারী AI সহকারী। বাংলা ও ইংরেজি উভয় ভাষায় উত্তর দাও।' },
    name: 'AI সহকারী বট',
    icon: 'bi-stars',
    description: 'প্রশ্নের উত্তর, ছবি তৈরি ও ভিডিও তৈরি — AI চালিত সহকারী বট',
    category: 'এআই',
    code: `
// ─── কনফিগারেশন ───
const CONFIG = {
  API_KEY: 'YOUR_API_KEY_HERE',
  API_URL: 'https://inference.poolside.ai/v1/chat/completions',
  MODEL: 'poolside/laguna-s-2.1',
  IMG_URL: 'https://image.pollinations.ai/prompt/',
};

// ─── ইনটেন্ট ডিটেকশন ───
const IMG_KW = ['ছবি তৈরি','ইমেজ তৈরি','ছবি','ইমেজ','photo','image','draw','paint','picture','/img','/image','illustration','design'];
const VID_KW = ['ভিডিও তৈরি','ভিডিও','/vid','/video','video','animation','অ্যানিমেশন'];

function detect(t) {
  const l = t.toLowerCase();
  if (/^\/(img|image)\s/i.test(l)) return 'image';
  if (/^\/(vid|video)\s/i.test(l)) return 'video';
  for (const k of IMG_KW) { if (l.includes(k)) return 'image'; }
  for (const k of VID_KW) { if (l.includes(k)) return 'video'; }
  return 'question';
}

function getPrompt(t) { return t.replace(/^\/(img|image|vid|video|ask|q)\s*/i, '').trim(); }

// ─── AI চ্যাট (Poolside) ───
async function askAI(prompt) {
  const res = await fetch(CONFIG.API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CONFIG.API_KEY },
    body: JSON.stringify({ model: CONFIG.MODEL, messages: [
      { role: 'system', content: 'তুমি একজন সাহায্যকারী AI সহকারী। বাংলা ও ইংরেজি উভয় ভাষায় উত্তর দাও। সংক্ষিপ্ত ও সুন্দর উত্তর দাও।' },
      { role: 'user', content: prompt }
    ], max_tokens: 2048, temperature: 0.7 }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'দুঃখিত, উত্তর পাওয়া যায়নি।';
}

// ─── ছবি তৈরি (Pollinations AI - ফ্রি, কোনো Key লাগবে না) ───
function generateImage(prompt) {
  return CONFIG.IMG_URL + encodeURIComponent(prompt + ', high quality, detailed, 4k') + '?width=1024&height=1024&nologo=true';
}

// ─── মূল হ্যান্ডলার ───
module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const name = update.message?.from?.first_name || 'বন্ধু';
  if (!text) return;

  if (text === '/start') {
    await api.sendMessage(chatId,
      'স্বাগতম, ' + name + '! AI সহকারী বটে স্বাগতম! 🤖✨\n\n' +
      'আমি তিনটি কাজ করতে পারি:\n' +
      '💬 *প্রশ্নের উত্তর* — যেকোনো প্রশ্ন করুন\n' +
      '🖼 *ছবি তৈরি* — "/img একটি সূর্যোদয়" লিখুন\n' +
      '🎬 *ভিডিও স্ক্রিপ্ট* — "/vid একটি বৃষ্টির দৃশ্য" লিখুন\n\n' +
      'সরাসরি মেসেজ করুন, আমি বুঝে নেবো! 🧠',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  if (text === '/help') {
    await api.sendMessage(chatId,
      '*কমান্ড*\n\n/start, /help, /ask [প্রশ্ন], /img [বর্ণনা], /vid [বর্ণনা]',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  const intent = detect(text);
  const prompt = getPrompt(text) || text.replace(/^\/\w+\s*/i, '').trim();
  if (!prompt) { await api.sendMessage(chatId, 'অনুগ্রহ করে একটি প্রশ্ন বা বর্ণনা দিন।'); return; }

  try {
    if (intent === 'image') {
      await api.sendMessage(chatId, '🖼 ছবি তৈরি হচ্ছে...');
      await api.sendPhoto(chatId, generateImage(prompt), { caption: prompt });
    } else if (intent === 'video') {
      await api.sendMessage(chatId, '🎬 ভিডিও স্ক্রিপ্ট তৈরি হচ্ছে...');
      const r = await askAI('এই ভিডিওর জন্য একটি স্ক্রিপ্ট লিখো: ' + prompt);
      await api.sendMessage(chatId, r);
    } else {
      await api.sendMessage(chatId, '🤔 ভাবছি...');
      const answer = await askAI(prompt);
      await api.sendMessage(chatId, '🤖 ' + answer);
    }
  } catch (err) {
    await api.sendMessage(chatId, '❌ ' + (err.message || 'Error'));
  }
};
`,
  },
];

/* ─── Helpers ─── */
function generateId(): string {
  return 'bot_' + Math.random().toString(36).substring(2, 10);
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('bn-BD', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getStoredBots(): Bot[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('botforge_bots');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveBots(bots: Bot[]) {
  localStorage.setItem('botforge_bots', JSON.stringify(bots));
}

/* ─── Dark Mode Toggle ─── */
function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-9 h-9" />;
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 rounded-xl flex items-center justify-center border border-border hover:bg-muted transition-all duration-300 hover:scale-105"
      aria-label="ডার্ক মোড টগল"
    >
      <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-amber-400' : 'bi-moon-fill text-indigo-400'} text-base`}></i>
    </button>
  );
}

/* ─── NAVBAR ─── */
function Navbar({ onNavigate, currentSection }: { onNavigate: (s: string) => void; currentSection: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: 'home', label: 'হোম' },
    { id: 'features', label: 'ফিচার' },
    { id: 'templates', label: 'টেমপ্লেট' },
    { id: 'how-it-works', label: 'কীভাবে কাজ করে' },
    { id: 'dashboard', label: 'ড্যাশবোর্ড' },
    { id: 'faq', label: 'প্রশ্ন' },
    { id: 'docs', label: 'ডকুমেন্টেশন', href: '/docs' },
  ];
  const handleNav = (id: string, href?: string) => {
    if (href) { window.location.href = href; setMobileOpen(false); return; }
    onNavigate(id); setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f111a]/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl gradient-tg flex items-center justify-center text-white text-lg">
              <i className="bi bi-robot"></i>
            </div>
            <span className="text-xl font-bold text-gradient">BotForge</span>
          </button>
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button key={link.id} onClick={() => handleNav(link.id, (link as any).href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentSection === link.id ? 'text-[var(--color-telegram)] bg-[var(--color-telegram)]/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}>
                {link.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle />
            <Button size="sm" className="gradient-tg text-white border-0 cursor-pointer hover:opacity-90"
              onClick={() => handleNav('dashboard')}>
              <i className="bi bi-rocket-takeoff me-1"></i>শুরু করুন
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle menu">
              <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <button key={link.id} onClick={() => handleNav(link.id, (link as any).href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                    currentSection === link.id ? 'text-[var(--color-telegram)] bg-[var(--color-telegram)]/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}>
                  {link.label}
                </button>
              ))}
              <Separator className="my-2" />
              <Button size="sm" className="w-full gradient-tg text-white border-0 cursor-pointer" onClick={() => handleNav('dashboard')}>
                শুরু করুন
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function HeroSection({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-telegram)]/5 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--color-telegram)]/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[var(--color-telegram)]/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[var(--color-tg-blue)]/20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[var(--color-telegram)]/25 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-telegram)]/10 text-[var(--color-telegram)] text-sm font-medium mb-8">
          <i className="bi bi-infinity"></i>সম্পূর্ণ ফ্রি ও আনলিমিটেড
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block">Telegram বট হোস্ট করুন</span>
          <span className="block mt-2"><span className="text-gradient">কোনো সীমাবদ্ধতা ছাড়াই</span></span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          GitHub রিপোতে কোড আপলোড করুন, Cloudflare Pages-এ এক ক্লিকে ডিপ্লয় করুন।
          কোনো ডাটাবেস সেটআপ লাগবে না, কোনো সার্ভার খরচ নেই, কোনো হিডেন চার্জ নেই।
          আনলিমিটেড বট, আনলিমিটেড রিকোয়েস্ট — সবকিছ চিরকাল ফ্রি।
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="gradient-tg text-white border-0 px-8 py-6 text-lg cursor-pointer hover:opacity-90 shadow-lg shadow-[var(--color-telegram)]/25"
            onClick={() => onNavigate('dashboard')}>
            <i className="bi bi-rocket-takeoff me-2 text-xl"></i>এখনই শুরু করুন
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg cursor-pointer"
            onClick={() => onNavigate('templates')}>
            <i className="bi bi-grid me-2"></i>টেমপ্লেট দেখুন
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: 'bi-infinity', value: 'আনলিমিটেড', label: 'বট ও রিকোয়েস্ট' },
            { icon: 'bi-lightning', value: '<50ms', label: 'রেসপন্স টাইম' },
            { icon: 'bi-shield-check', value: '99.9%', label: 'আপটাইম' },
            { icon: 'bi-currency-dollar', value: '$0', label: 'চিরতালে ফ্রি' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <i className={`bi ${stat.icon} text-2xl text-[var(--color-telegram)]`}></i>
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
function FeaturesSection() {
  const features = [
    { icon: 'bi-infinity', title: 'সম্পূর্ণ আনলিমিটেড', description: 'কোনো বট সীমা নেই, কোনো রিকোয়েস্ট সীমা নেই, কোনো ট্রাফিক সীমা নেই। আপনি যত খুশি বট তৈরি করতে পারবেন, প্রতিটি বট যত খুশি মেসেজ প্রসেস করবে — কোনো বাধা নেই, কোনো অতিরিক্ত খরচ নেই।' },
    { icon: 'bi-database-slash', title: 'কোনো ডাটাবেস লাগবে না', description: 'আলাদা করে কোনো ডাটাবেস সার্ভার সেটআপ করতে হবে না, কোনো মাইগ্রেশন রান করতে হবে না। ব্রাউজারের localStorage এবং Cloudflare-এর অনবোর্ড টুলস দিয়েই সবকিছ ম্যানেজ হয়।' },
    { icon: 'bi-code-slash', title: 'JavaScript/TypeScript সাপোর্ট', description: 'আপনার পছন্দের প্রোগ্রামিং ভাষায় বট লিখুন। আধুনিক ES6+ সিনট্যাক্স, async/await, ডিস্ট্রাকচারিং — সবকিছ সমর্থিত। ইন-ব্রাউজার কোড এডিটরে সহজেই কোড লিখুন ও টেস্ট করুন।' },
    { icon: 'bi-globe2', title: 'গ্লোবাল CDN নেটওয়ার্ক', description: 'Cloudflare-এর ৩০০+ এজ ডাটা সেন্টারে আপনার বট ডিপ্লয় হবে। বাংলাদেশ, ভারত, মধ্যপ্রাচ্য সহ সারাবিশ্বে ব্যবহারকারীরা সুপার-ফাস্ট রেসপন্স পাবে। গড় রেসপন্স টাইম ৫০ মিলিসেকেন্ডেরও কম।' },
    { icon: 'bi-shield-lock', title: 'সুরক্ষিত V8 স্যান্ডবক্স', description: 'প্রতিটি বট আলাদা V8 Isolate-এ চলে, যার মানে একটি বটের কোড অন্য বটকে কোনোভাবেই প্রভাবিত করতে পারবে না। মেমরি লিমিট, CPU লিমিট সব অটোমেটিক্যালি কন্ট্রোল হয়।' },
    { icon: 'bi-github', title: 'GitHub অটো ডিপ্লয়', description: 'আপনার কোড GitHub রিপোতে পুশ করুন, Cloudflare Pages অটোমেটিক্যালি বিল্ড ও ডিপ্লয় করবে। আলাদা CI/CD পাইপলাইন কনফিগার করার কোনো দরকার নেই। ভার্সন কন্ট্রোলও পাশাপাশি চলবে।' },
  ];
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4"><i className="bi bi-stars me-1"></i>ফিচার সমূহ</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">কেন আমাদের প্ল্যাটফর্ম বেছে নেবেন?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">অত্যাধুনিক ক্লাউড টেকনোলজি দিয়ে তৈরি, ব্যবহারের জন্য অত্যন্ত সহজ। সার্ভার ম্যানেজমেন্টের ঝামেলা ছাড়াই শুধু কোড লিখুন, বাকিটা আমরা সামলাবো।</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="hover-lift border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl gradient-tg flex items-center justify-center text-white text-xl mb-2">
                  <i className={`bi ${f.icon}`}></i>
                </div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground leading-relaxed">{f.description}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TEMPLATES ─── */
function TemplatesSection({ onApplyTemplate }: { onApplyTemplate: (t: BotTemplate) => void }) {
  const categories = [...new Set(BOT_TEMPLATES.map(t => t.category))];
  const [activeCat, setActiveCat] = useState(categories[0]);
  return (
    <section id="templates" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4"><i className="bi bi-grid-3x3-gap me-1"></i>টেম্পলেট</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">প্রস্তুত বট টেম্পলেট</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            জিরো থেকে শুরু করার দরকার নেই। প্রস্তুত টেম্পলেট বেছে নিন, কাস্টমাইজ করুন, ডিপ্লয় করুন।
          </p>
        </div>
        <div className="flex justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCat === cat ? 'gradient-tg text-white' : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOT_TEMPLATES.filter(t => t.category === activeCat).map(t => (
            <Card key={t.id} className="hover-lift border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-telegram)]/10 flex items-center justify-center text-[var(--color-telegram)] text-xl">
                    <i className={`bi ${t.icon}`}></i>
                  </div>
                  <div>
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">{t.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.description}</p>
                <div className="bg-muted rounded-lg p-3 max-h-32 overflow-y-auto scrollbar-hide">
                  <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-all">{t.code.substring(0, 200)}...</pre>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-tg text-white border-0 cursor-pointer hover:opacity-90"
                  onClick={() => onApplyTemplate(t)}>
                  <i className="bi bi-plus-circle me-1"></i>এই টেম্পলেট ব্যবহার করুন
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorksSection() {
  const steps = [
    { step: '01', icon: 'bi-person-plus', title: 'অ্যাকাউন্ট তৈরি', description: 'GitHub অ্যাকাউন্ট দিয়ে লগইন করুন। কোনো ক্রেডিট কার্ড লাগবে না।' },
    { step: '02', icon: 'bi-robot', title: 'টেম্পলেট বেছে নিন', description: 'প্রস্তুত টেম্পলেট থেকে বেছে নিন অথবা নিজে কোড লিখুন। Bot Token দিন, বট তৈরি হয়ে যাবে।' },
    { step: '03', icon: 'bi-cloud-upload', title: 'GitHub এ পুশ করুন', description: 'কোড সহ GitHub রিপোতে পুশ করুন। Cloudflare Pages অটোমেটিক্যালি ডিপ্লয় করবে।' },
    { step: '04', icon: 'bi-check-circle', title: 'বট লাইভ!', description: 'বট এখনই চলছে। Telegram থেকে মেসেজ পাঠান, রিপ্লাই পান, ড্যাশবোর্ড থেকে মনিটর করুন।' },
  ];
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4"><i className="bi bi-diagram-3 me-1"></i>কার্যপ্রণালী</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">মাত্র ৪টি ধাপে শুরু করুন</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">জটিল কোনো প্রক্রিয়া নেই। মাত্র কয়েক মিনিটে আপনার প্রথম টেলিগ্রাম বট লাইভ করুন। কোনো প্রোগ্রামিং জ্ঞান থাকাও আবশ্যক নয়, আমাদের প্রস্তুত টেমপলেট ব্যবহার করুন।</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative text-center group">
              {s.step !== '04' && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--color-telegram)]/30 to-transparent" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-2xl gradient-tg flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className={`bi ${s.icon}`}></i>
              </div>
              <div className="text-xs font-bold text-[var(--color-telegram)] tracking-widest mb-2">ধাপ {s.step}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DASHBOARD ─── */
function DashboardSection({ pendingTemplate, onTemplateConsumed }: { pendingTemplate: BotTemplate | null; onTemplateConsumed: () => void }) {
  const { toast } = useToast();
  const [bots, setBots] = useState<Bot[]>(() => getStoredBots());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBot, setEditingBot] = useState<Bot | null>(null);
  const [activeTab, setActiveTab] = useState('list');
  const [formName, setFormName] = useState('');
  const [formToken, setFormToken] = useState('');
  const [formUsername, setFormUsername] = useState('');
  const [formCode, setFormCode] = useState('');
  const [selectedTemplateId, setSelectedTemplateId] = useState('blank');

  useEffect(() => {
    if (pendingTemplate) {
      resetForm();
      setFormCode(pendingTemplate.code);
      setSelectedTemplateId(pendingTemplate.id);
      setFormName(pendingTemplate.name);
      setDialogOpen(true);
      onTemplateConsumed();
    }
  }, [pendingTemplate, onTemplateConsumed]);

  const saveUpdatedBots = useCallback((updated: Bot[]) => {
    setBots(updated);
    saveBots(updated);
  }, []);

  const resetForm = () => {
    setFormName(''); setFormToken(''); setFormUsername('');
    setFormCode(BOT_TEMPLATES[0].code);
    setSelectedTemplateId('blank');
    setEditingBot(null);
  };

  const openCreateDialog = (template?: BotTemplate) => {
    resetForm();
    if (template) {
      setFormCode(template.code);
      setSelectedTemplateId(template.id);
      setFormName(template.name);
    }
    setDialogOpen(true);
  };

  const openEditDialog = (bot: Bot) => {
    setEditingBot(bot);
    setFormName(bot.name);
    setFormToken(bot.token);
    setFormUsername(bot.username);
    setFormCode(bot.code);
    setSelectedTemplateId(bot.templateId || 'blank');
    setDialogOpen(true);
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
    const tmpl = BOT_TEMPLATES.find(t => t.id === templateId);
    if (tmpl && !editingBot) setFormCode(tmpl.code);
  };

  const handleSaveBot = () => {
    if (!formName.trim() || !formToken.trim()) {
      toast({ title: 'ত্রুটি', description: 'বটের নাম এবং Token আবশ্যক।', variant: 'destructive' });
      return;
    }
    const tmpl = BOT_TEMPLATES.find(t => t.id === selectedTemplateId);
    const botType = tmpl?.type || 'echo';
    const botConfig = tmpl?.defaultConfig || {};
    if (editingBot) {
      const updated = bots.map(b => b.id === editingBot.id ? { ...b, name: formName, token: formToken, username: formUsername, code: formCode, templateId: selectedTemplateId, type: b.type || botType, config: b.config || botConfig } : b);
      saveUpdatedBots(updated);
      toast({ title: 'সফল', description: `"${formName}" বট আপডেট হয়েছে।` });
    } else {
      const newBotId = generateId();
      const newBot: Bot = {
        id: newBotId, name: formName, token: formToken,
        username: formUsername || '@' + formName.toLowerCase().replace(/\s+/g, '_'),
        status: 'active', code: formCode, templateId: selectedTemplateId,
        type: botType, config: botConfig,
        createdAt: new Date().toISOString(),
        webhookUrl: `${window.location.origin}/webhook/${newBotId}`,
        lastPing: new Date().toISOString(), messagesReceived: 0, messagesSent: 0,
      };
      saveUpdatedBots([newBot, ...bots]);
      toast({ title: 'সফল', description: `"${formName}" বট তৈরি হয়েছে।` });
    }
    setDialogOpen(false);
    resetForm();
  };

  const toggleBotStatus = (id: string) => {
    const updated = bots.map(b => b.id === id ? { ...b, status: (b.status === 'active' ? 'inactive' : 'active') as Bot['status'] } : b);
    saveUpdatedBots(updated);
    const bot = bots.find(b => b.id === id);
    toast({ title: bot?.status === 'active' ? 'বট বন্ধ' : 'বট সচল', description: `"${bot?.name}"` });
  };

  const deleteBot = (id: string) => {
    const bot = bots.find(b => b.id === id);
    saveUpdatedBots(bots.filter(b => b.id !== id));
    toast({ title: 'মুছে ফেলা হয়েছে', description: `"${bot?.name}" বট ডিলিট করা হয়েছে।`, variant: 'destructive' });
  };

  const copyWebhook = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({ title: 'কপি করা হয়েছে', description: 'ওয়েবহুক URL ক্লিপবোর্ডে কপি হয়েছে।' });
  };

  const downloadBotConfig = () => {
    const config: Record<string, { name: string; token: string; type: string; config: Record<string, string>; username?: string; status?: string }> = {};
    bots.forEach(b => {
      const tmpl = BOT_TEMPLATES.find(t => t.id === b.templateId);
      config[b.id] = {
        name: b.name, token: b.token, username: b.username, status: b.status,
        type: b.type || tmpl?.type || 'echo',
        config: b.config || tmpl?.defaultConfig || {},
      };
    });
    const json = JSON.stringify({ bots: config }, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'bot-config.json'; a.click();
    URL.revokeObjectURL(url);
    toast({ title: '✅ ডাউনলোড হয়েছে!', description: 'এখন নিচের ধাপগুলো অনুসরণ করুন।' });
  };

  const getSetWebhookUrl = (bot: Bot) => {
    return `https://api.telegram.org/bot${bot.token}/setWebhook?url=${encodeURIComponent(bot.webhookUrl)}`;
  };

  const openSetWebhook = (bot: Bot) => {
    const url = getSetWebhookUrl(bot);
    window.open(url, '_blank');
    toast({ title: 'Webhook সেট হচ্ছে', description: 'Telegram এর রেসপন্স দেখুন।' });
  };

  const totalMessages = bots.reduce((a, b) => a + b.messagesReceived + b.messagesSent, 0);
  const activeBots = bots.filter(b => b.status === 'active').length;

  return (
    <section id="dashboard" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4"><i className="bi bi-speedometer2 me-1"></i>ড্যাশবোর্ড</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">আপনার বট ম্যানেজ করুন</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">সব বট এক জায়গায় ম্যানেজ করুন। টেম্পলেট থেকে শুরু করুন বা নিজের কোড লিখুন।</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: 'bi-robot', value: bots.length, label: 'মোট বট', color: 'text-[var(--color-telegram)]' },
            { icon: 'bi-check-circle', value: activeBots, label: 'সচল বট', color: 'text-green-500' },
            { icon: 'bi-envelope', value: totalMessages, label: 'মোট মেসেজ', color: 'text-purple-500' },
          ].map(s => (
            <Card key={s.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <i className={`bi ${s.icon} text-2xl ${s.color}`}></i>
                <div><div className="text-2xl font-bold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="list"><i className="bi bi-list-ul me-1"></i>বট লিস্ট</TabsTrigger>
              <TabsTrigger value="code"><i className="bi bi-code-slash me-1"></i>কোড এডিটর</TabsTrigger>
            </TabsList>
            <div className="flex flex-wrap gap-2">
              <Button className="gradient-tg text-white border-0 cursor-pointer hover:opacity-90" onClick={() => openCreateDialog()}>
                <i className="bi bi-plus-lg me-1"></i>নতুন বট
              </Button>
              {bots.length > 0 && (
                <Button variant="outline" className="cursor-pointer border-amber-400 text-amber-600 hover:bg-amber-50" onClick={downloadBotConfig}>
                  <i className="bi bi-cloud-download me-1"></i>bot-config.json ডাউনলোড করুন
                </Button>
              )}
            </div>
          </div>

          <TabsContent value="list">
            {bots.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="bi bi-exclamation-triangle text-amber-600 dark:text-amber-400 text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">বট লাইভ করতে ৩টি ধাপ অনুসরণ করুন:</h4>
                    <ol className="text-sm text-amber-700 dark:text-amber-400 space-y-2 mt-2 list-decimal list-inside">
                      <li><strong>"bot-config.json ডাউনলোড করুন"</strong> বাটনে ক্লিক করুন (উপরে ডানদিকে)</li>
                      <li>ডাউনলোড করা <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded text-xs">bot-config.json</code> ফাইলটি আপনার GitHub রিপোর <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded text-xs">public/</code> ফোল্ডারে রাখুন (পুরাতনটি রিপ্লেস করুন) এবং <strong>GitHub এ পুশ করুন</strong></li>
                      <li>প্রতিটি বটের কার্ডে <strong>"Webhook সেট করুন"</strong> বাটনে ক্লিক করুন — Telegram অটোমেটিক্যালি webhook সেট করবে</li>
                    </ol>
                    <p className="text-xs text-amber-600 dark:text-amber-500 mt-2">💡 Cloudflare Pages অটো-ডিপ্লয় হবে। ১-২ মিনিট পর বট সচল হবে। বট পরিবর্তন করলে আবার ডাউনলোড ও পুশ করুন।</p>
                  </div>
                </div>
              </div>
            )}
            {bots.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                    <i className="bi bi-robot text-4xl text-muted-foreground"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">কোনো বট নেই</h3>
                  <p className="text-muted-foreground mb-6">টেম্পলেট থেকে শুরু করুন বা নতুন বট তৈরি করুন।</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button className="gradient-tg text-white border-0 cursor-pointer" onClick={() => openCreateDialog()}>
                      <i className="bi bi-plus-lg me-1"></i>খালি বট
                    </Button>
                    {BOT_TEMPLATES.filter(t => t.id !== 'blank').slice(0, 3).map(t => (
                      <Button key={t.id} variant="outline" className="cursor-pointer" onClick={() => openCreateDialog(t)}>
                        <i className={`bi ${t.icon} me-1`}></i>{t.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {bots.map(bot => {
                  const tmpl = BOT_TEMPLATES.find(t => t.id === bot.templateId);
                  return (
                    <Card key={bot.id} className="hover-lift">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                              bot.status === 'active' ? 'bg-green-500' : bot.status === 'error' ? 'bg-red-500' : 'bg-gray-400'
                            }`}>
                              <i className={`bi ${tmpl?.icon || 'bi-robot'}`}></i>
                            </div>
                            <div>
                              <CardTitle className="text-base">{bot.name}</CardTitle>
                              <CardDescription className="text-xs">{bot.username}</CardDescription>
                            </div>
                          </div>
                          <Badge variant={bot.status === 'active' ? 'default' : 'secondary'}>
                            <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                              bot.status === 'active' ? 'bg-green-400 animate-pulse' : bot.status === 'error' ? 'bg-red-400' : 'bg-gray-400'
                            }`}></span>
                            {bot.status === 'active' ? 'সচল' : bot.status === 'error' ? 'ত্রুটি' : 'বন্ধ'}
                          </Badge>
                        </div>
                        {tmpl && <Badge variant="outline" className="text-xs mt-2 w-fit">{tmpl.name}</Badge>}
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <i className="bi bi-link-45deg shrink-0"></i>
                            <span className="truncate text-xs font-mono">{bot.webhookUrl}</span>
                            <button onClick={() => copyWebhook(bot.webhookUrl)} className="ml-auto shrink-0 hover:text-[var(--color-telegram)] transition-colors" title="কপি করুন">
                              <i className="bi bi-clipboard"></i>
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="flex-1 text-xs cursor-pointer text-[var(--color-telegram)] border-[var(--color-telegram)]/30 hover:bg-[var(--color-telegram)]/10" onClick={() => openSetWebhook(bot)}>
                              <i className="bi bi-lightning-charge me-1"></i>Webhook সেট করুন
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs cursor-pointer" onClick={() => window.open(bot.webhookUrl, '_blank')} title="Webhook পরীক্ষা করুন">
                              <i className="bi bi-box-arrow-up-right"></i>
                            </Button>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span><i className="bi bi-calendar3 me-1"></i>{formatDate(bot.createdAt)}</span>
                            <span><i className="bi bi-arrow-down me-1"></i>{bot.messagesReceived}</span>
                            <span><i className="bi bi-arrow-up me-1"></i>{bot.messagesSent}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-3 border-t border-border/50 gap-2">
                        <Button variant="outline" size="sm" className="flex-1 cursor-pointer" onClick={() => openEditDialog(bot)}>
                          <i className="bi bi-pencil me-1"></i>এডিট
                        </Button>
                        <Button variant="outline" size="sm" className={`flex-1 cursor-pointer ${bot.status === 'active' ? 'border-amber-300 text-amber-600' : ''}`} onClick={() => toggleBotStatus(bot.id)}>
                          <i className={`bi ${bot.status === 'active' ? 'bi-pause-circle' : 'bi-play-circle'} me-1`}></i>
                          {bot.status === 'active' ? 'বন্ধ' : 'সচল'}
                        </Button>
                        <Button variant="outline" size="sm" className="cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => deleteBot(bot.id)}>
                          <i className="bi bi-trash3"></i>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>

          <TabsContent value="code">
            {bots.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <i className="bi bi-code-slash text-4xl text-muted-foreground mb-4"></i>
                  <p className="text-muted-foreground">কোড এডিট করতে প্রথমে একটি বট তৈরি করুন।</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <select className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    value={bots[0]?.id || ''}
                    onChange={(e) => {
                      const bot = bots.find(b => b.id === e.target.value);
                      if (bot) { setFormCode(bot.code); setEditingBot(bot); }
                    }}>
                    {bots.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                  </select>
                  <Button className="gradient-tg text-white border-0 cursor-pointer" onClick={() => {
                    if (editingBot) {
                      const updated = bots.map(b => b.id === editingBot.id ? { ...b, code: formCode } : b);
                      saveUpdatedBots(updated);
                      toast({ title: 'সফল', description: 'কোড সেভ করা হয়েছে।' });
                    }
                  }}>
                    <i className="bi bi-save me-1"></i>সেভ
                  </Button>
                </div>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        <i className="bi bi-filetype-js me-1 text-amber-500"></i>handler.js
                      </CardTitle>
                      <Badge variant="outline" className="text-xs font-mono">JavaScript</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea value={formCode} onChange={(e) => setFormCode(e.target.value)}
                      className="min-h-[400px] font-mono text-sm resize-y"
                      placeholder="আপনার বট কোড এখানে লিখুন..." />
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Create/Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle><i className="bi bi-robot me-2 text-[var(--color-telegram)]"></i>
                {editingBot ? 'বট এডিট করুন' : 'নতুন বট তৈরি করুন'}</DialogTitle>
              <DialogDescription>{editingBot ? 'বটের তথ্য ও কোড আপডেট করুন।' : 'টেম্পলেট বেছে নিন বা নিজে কোড লিখুন।'}</DialogDescription>
            </DialogHeader>
            <div className="space-y-5 py-2">
              {/* Template Selector */}
              {!editingBot && (
                <div className="space-y-2">
                  <label className="text-sm font-medium"><i className="bi bi-grid-3x3-gap me-1"></i>টেম্পলেট বেছে নিন</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {BOT_TEMPLATES.map(t => (
                      <button key={t.id} onClick={() => handleTemplateSelect(t.id)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          selectedTemplateId === t.id
                            ? 'border-[var(--color-telegram)] bg-[var(--color-telegram)]/5'
                            : 'border-border hover:border-[var(--color-telegram)]/50'
                        }`}>
                        <i className={`bi ${t.icon} text-lg ${selectedTemplateId === t.id ? 'text-[var(--color-telegram)]' : 'text-muted-foreground'}`}></i>
                        <div className="text-sm font-medium mt-1">{t.name}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{t.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium"><i className="bi bi-tag me-1"></i>বটের নাম <span className="text-red-500">*</span></label>
                <Input placeholder="যেমন: MyAwesomeBot" value={formName} onChange={e => setFormName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium"><i className="bi bi-key me-1"></i>বট Token <span className="text-red-500">*</span></label>
                <Input type="password" placeholder="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11" value={formToken} onChange={e => setFormToken(e.target.value)} />
                <p className="text-xs text-muted-foreground"><i className="bi bi-info-circle me-1"></i>@BotFather থেকে Token নিন। গোপন রাখুন।</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium"><i className="bi bi-at me-1"></i>বট ইউজারনেম</label>
                <Input placeholder="@my_awesome_bot" value={formUsername} onChange={e => setFormUsername(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium"><i className="bi bi-code-slash me-1"></i>বট কোড</label>
                <Textarea value={formCode} onChange={e => setFormCode(e.target.value)}
                  className="min-h-[250px] font-mono text-xs resize-y" />
              </div>
            </div>
            <DialogFooter className="gap-2 sm:gap-0">
              <DialogClose asChild><Button variant="outline" className="cursor-pointer">বাতিল</Button></DialogClose>
              <Button className="gradient-tg text-white border-0 cursor-pointer hover:opacity-90" onClick={handleSaveBot}>
                <i className={`bi ${editingBot ? 'bi-check-lg' : 'bi-plus-lg'} me-1`}></i>
                {editingBot ? 'আপডেট' : 'তৈরি'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

/* ─── FREE SECTION (replaces Pricing) ─── */
function FreeSection() {
  const perks = [
    { icon: 'bi-infinity', title: 'আনলিমিটেড বট', desc: 'যত খুশি বট তৈরি করুন, কোনো সীমা নেই।' },
    { icon: 'bi-lightning-charge', title: 'আনলিমিটেড রিকোয়েস্ট', desc: 'রিকোয়েস্ট সীমা নেই, ট্রাফিক সীমা নেই।' },
    { icon: 'bi-hdd', title: 'আনলিমিটেড স্টোরেজ', desc: 'D1 ডাটাবেস ও KV স্টোরেজ সীমাহীন।' },
    { icon: 'bi-globe', title: 'কাস্টম ডোমেইন', desc: 'আপনার নিজস্ব ডোমেইন কানেক্ট করুন।' },
    { icon: 'bi-github', title: 'GitHub ইন্টিগ্রেশন', desc: 'অটো ডিপ্লয়, ভার্সন কন্ট্রোল, CI/CD।' },
    { icon: 'bi-palette', title: 'টেম্পলেট লাইব্রেরি', desc: 'প্রস্তুত টেম্পলেট থেকে দ্রুত শুরু করুন।' },
    { icon: 'bi-shield-check', title: 'SSL/HTTPS', desc: 'Cloudflare-এর ফ্রি SSL সার্টিফিকেট।' },
    { icon: 'bi-people', title: 'কমিউনিটি সাপোর্ট', desc: 'সাহায্য ও গাইডলাইন সব ফ্রি।' },
  ];
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="gradient-tg text-white border-0 mb-4"><i className="bi bi-gift me-1"></i>সম্পূর্ণ ফ্রি</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">কোনো পেমেন্ট নেই, কোনো সীমা নেই</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            BotForge সম্পূর্ণ ফ্রি এবং চিরকাল ফ্রি থাকবে। কোনো হিডেন চার্জ, কোনো আপগ্রেড প্রেসার।
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <Card className="border-[var(--color-telegram)] border-2 shadow-xl shadow-[var(--color-telegram)]/10">
            <CardHeader className="text-center pt-10">
              <div className="w-16 h-16 rounded-2xl gradient-tg flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <i className="bi bi-infinity"></i>
              </div>
              <CardTitle className="text-2xl">সম্পূর্ণ ফ্রি প্ল্যান</CardTitle>
              <div className="mt-3"><span className="text-5xl font-extrabold text-gradient">$0</span><span className="text-muted-foreground"> /চিরকাল</span></div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {perks.map(p => (
                  <div key={p.title} className="flex items-start gap-3 p-2">
                    <i className={`bi ${p.icon} text-lg text-green-500 mt-0.5 shrink-0`}></i>
                    <div><div className="text-sm font-medium">{p.title}</div><div className="text-xs text-muted-foreground">{p.desc}</div></div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gradient-tg text-white border-0 cursor-pointer hover:opacity-90 text-lg py-6"
                onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}>
                <i className="bi bi-rocket-takeoff me-2"></i>এখনই ফ্রিতে শুরু করুন
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const faqs = [
    { q: 'BotForge কি সত্যিই সম্পূর্ণ ফ্রি?', a: 'হ্যাঁ, ১০০% ফ্রি। কোনো প্রো প্ল্যান নেই, কোনো আপগ্রেড নেই। সব ফিচার সবার জন্য উন্মুক্ত। Cloudflare Pages-এর ফ্রি টায়ার দিয়ে চলে, তাই কোনো সার্ভার খরচ নেই।' },
    { q: 'কতগুলি বট তৈরি করা যাবে?', a: 'আনলিমিটেড! যত খুশি বট তৈরি করুন। কোনো সীমাবদ্ধতা নেই। প্রতিটি বট আলাদা ওয়েবহুক URL পাবে এবং স্বাধীনভাবে চলবে।' },
    { q: 'PHP বট হোস্ট করা যাবে কি?', a: 'দুঃখিত, বর্তমানে শুধুমাত্র JavaScript এবং TypeScript বট সাপোর্ট করে। Cloudflare Workers V8 Isolate-এ চলে যেখানে PHP রানটাইম নেই।' },
    { q: 'টেম্পলেট কীভাবে ব্যবহার করবো?', a: 'নতুন বট তৈরির সময় ডায়ালগে টেম্পলেট গ্রিড দেখবেন। যেকোনো টেম্পলেটে ক্লিক করলে কোড অটো-ফিল হবে। তারপর নিজের মতো কাস্টমাইজ করে সেভ করুন।' },
    { q: 'ওয়েবহুক URL কীভাবে সেট করবো?', a: 'বট তৈরির পর ওয়েবহুক URL অটোমেটিক্যালি তৈরি হয়। কপি বাটনে ক্লিক করে @BotFather-এ বা Telegram API-তে setWebhook কল করে সেট করুন।' },
    { q: 'ডাটাবেস ছাড়া কি নিরাপদ?', a: 'বেশ নিরাপদ! আপনার কোনো ডাটাবেস সার্ভার সেটআপ করতে হবে না। Cloudflare-এর অনবোর্ড D1 (SQLite) এবং KV স্টোরেজ ব্যবহৃত হয়। এটি সম্পূর্ণ ম্যানেজড সার্ভিস।' },
  ];
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4"><i className="bi bi-question-circle me-1"></i>FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">সাধারণ জিজ্ঞাসা</h2>
          <p className="text-muted-foreground text-lg">সবচেয়ে জনপ্রিয় প্রশ্নগুলোর বিস্তারিত উত্তর এখানে পাবেন। আপনার প্রশ্নের উত্তর না পেলে আমাদের সাথে যোগাযোগ করুন।</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-tg flex items-center justify-center text-white text-lg"><i className="bi bi-robot"></i></div>
              <span className="text-xl font-bold text-gradient">BotForge</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Cloudflare Pages-এ সম্পূর্ণ ফ্রিতে Telegram বট হোস্ট করুন। আনলিমিটেড, কোনো সীমাবদ্ধতা নেই।</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">প্রোডাক্ট</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">ফিচার</span></li>
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">টেম্পলেট</span></li>
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">ডকুমেন্টেশন</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">রিসোর্স</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">গিটহাব</span></li>
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">এপিআই রেফারেন্স</span></li>
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">কমিউনিটি</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">কম্পানি</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">আমাদের সম্পর্কে</span></li>
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">গোপনীয়তা নীতি</span></li>
              <li><span className="hover:text-[var(--color-telegram)] cursor-pointer transition-colors">সার্ভিস শর্ত</span></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} BotForge. সর্বস্বত্ব সংরক্ষিত। সম্পূর্ণ ফ্রি ও ওপেন সোর্স।</p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hover:text-[var(--color-telegram)] cursor-pointer transition-colors"><i className="bi bi-github text-xl"></i></span>
            <span className="text-muted-foreground hover:text-[var(--color-telegram)] cursor-pointer transition-colors"><i className="bi bi-twitter-x text-xl"></i></span>
            <span className="text-muted-foreground hover:text-[var(--color-telegram)] cursor-pointer transition-colors"><i className="bi bi-telegram text-xl"></i></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [pendingTemplate, setPendingTemplate] = useState<BotTemplate | null>(null);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top, behavior: 'smooth' }); }
  }, []);

  const handleNavigate = useCallback((id: string) => { setCurrentSection(id); scrollToSection(id); }, [scrollToSection]);

  const handleApplyTemplate = useCallback((t: BotTemplate) => {
    setPendingTemplate(t);
    scrollToSection('dashboard');
  }, [scrollToSection]);

  const clearPendingTemplate = useCallback(() => setPendingTemplate(null), []);

  useEffect(() => {
    const sections = ['home', 'features', 'templates', 'how-it-works', 'dashboard', 'faq'];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) { if (entry.isIntersecting) setCurrentSection(entry.target.id); }
    }, { rootMargin: '-40% 0px -60% 0px' });
    const timer = setTimeout(() => {
      sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentSection={currentSection} />
      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        <FeaturesSection />
        <TemplatesSection onApplyTemplate={handleApplyTemplate} />
        <HowItWorksSection />
        <DashboardSection pendingTemplate={pendingTemplate} onTemplateConsumed={clearPendingTemplate} />
        <FreeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
