(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37974,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let o=[{id:"overview",title:"প্ল্যাটফর্ম ওভারভিউ",icon:"bi-info-circle",content:`BotForge হলো একটি সম্পূর্ণ ফ্রি ও ওপেন সোর্স Telegram Bot হোস্টিং প্ল্যাটফর্ম। এটি Next.js 16, Tailwind CSS 4, এবং shadcn/ui দিয়ে তৈরি। ব্যবহারকারীরা এই ওয়েবসাইটের মাধ্যমে তাদের Telegram বটের কোড ম্যানেজ করতে পারবেন, প্রস্তুত টেম্পলেট ব্যবহার করতে পারবেন, এবং Cloudflare Pages-এ ফ্রিতে ডিপ্লয় করতে পারবেন।

কোনো ডাটাবেস সার্ভার লাগবে না। কোনো ক্রেডিট কার্ড লাগবে না। শুধু GitHub অ্যাকাউন্ট আর Cloudflare অ্যাকাউন্ট থাকলেই চলবে। বটের ডেটা ব্রাউজারের localStorage-এ সংরক্ষিত হয়। প্রতিটি বট আলাদা ওয়েবহুক URL পায় যা Cloudflare Pages Function হিসেবে কাজ করে।

**টেকনোলজি স্ট্যাক:** Next.js 16.1.3 (Turbopack), React 19, Tailwind CSS 4, shadcn/ui (Radix UI Primitives), Bootstrap Icons CDN, next-themes (ডার্ক মোড), TypeScript 5, class-variance-authority (CVA), tailwind-merge, tw-animate-css.`,codeBlocks:[{filename:"package.json (প্রধান dependencies)",language:"json",code:`{
  "dependencies": {
    "next": "^16.1.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-themes": "^0.4.6",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.3.5"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}`}]},{id:"architecture",title:"প্রজেক্ট আর্কিটেকচার ও ফাইল স্ট্রাকচার",icon:"bi-folder2-open",content:"প্রজেক্টটি একটি Next.js App Router সিঙ্গেল-পেজ অ্যাপ্লিকেশন। মূল পেজ সম্পূর্ণ ক্লায়েন্ট-সাইড রেন্ডার ('use client')। সব UI কম্পোনেন্ট shadcn/ui প্যাটার্ন অনুসরণ করে — Radix UI Primitives-এর উপর বিল্ড করা। কোনো লুসাইড-রিয়্যাক্ট ব্যবহৃত হয়নি, সব আইকন Bootstrap Icons CDN থেকে নেওয়া।",codeBlocks:[{filename:"ফাইল স্ট্রাকচার",language:"text",code:`botforge/
├── public/
│   └── robots.txt                  # SEO robots
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout: Noto Serif Bangla font, ThemeProvider, Toaster
│   │   ├── page.tsx                 # মূল SPA: সব সেকশন (Navbar, Hero, Features, Templates, Dashboard, FAQ, Footer)
│   │   ├── globals.css              # Tailwind CSS 4 theme, CSS variables, dark mode, animations
│   │   └── docs/
│   │       └── page.tsx             # এই ডকুমেন্টেশন পেজ
│   ├── components/
│   │   ├── theme-provider.tsx       # next-themes wrapper
│   │   └── ui/                      # shadcn/ui কম্পোনেন্ট (Radix UI based)
│   │       ├── accordion.tsx         # FAQ সেকশনে ব্যবৃত্ত
│   │       ├── badge.tsx            # স্ট্যাটাস ব্যাজ, ক্যাটাগরি ট্যাগ
│   │       ├── button.tsx           # CVA variant button
│   │       ├── card.tsx             # কার্ড লেআউট
│   │       ├── dialog.tsx           # বট তৈরি/এডিট মোডাল
│   │       ├── input.tsx            # ফর্ম ইনপুট
│   │       ├── separator.tsx        # ডিভাইডার
│   │       ├── tabs.tsx             # ড্যাশবোর্ড ট্যাব
│   │       ├── textarea.tsx         # কোড এডিটর
│   │       ├── toast.tsx            # Toast notification primitives
│   │       └── toaster.tsx          # Toast renderer
│   ├── hooks/
│   │   └── use-toast.ts            # Toast state management hook
│   └── lib/
│       └── utils.ts                 # cn() utility (clsx + tailwind-merge)
├── next.config.ts                   # output: "export" for Cloudflare Pages
├── tsconfig.json                    # TypeScript config
├── postcss.config.mjs               # PostCSS with @tailwindcss/postcss
├── components.json                  # shadcn/ui config
└── package.json`}],subSections:[{title:"লেআউট সিস্টেম (layout.tsx)",content:'Root Layout হলো সমগ্র অ্যাপের মেরুদণ্ড। এটি তিনটি গুরুত্বপূর্ণ কাজ করে: (১) Noto Serif Bangla Google Font লোড করে CSS variable --font-bangla হিসেবে সেট করে, (২) ThemeProvider দিয়ে ডার্ক/লাইট মোড ম্যানেজ করে, (৩) Toaster কম্পোনেন্ট রেন্ডার করে। Bootstrap Icons CDN link head-এ যুক্ত আছে। html lang="bn" সেট করা আছে। suppressHydrationWarning দেওয়া আছে next-themes-এর জন্য।',codeBlocks:[{filename:"src/app/layout.tsx",language:"tsx",code:`import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={\`\${notoSerifBengali.variable} antialiased bg-background text-foreground\`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}`}]},{title:"থিম সিস্টেম (globals.css)",content:`CSS-এ দুটি থিম ডিফাইন করা আছে: :root (লাইট) এবং .dark (ডার্ক)। প্রতিটি থিমে --background, --foreground, --card, --muted, --border, --primary, --ring, --input, --accent, --destructive সহ ১৫+ CSS variable আছে। Tailwind CSS 4-এর @theme inline ব্লকে এই variable গুলোকে Tailwind color token হিসেবে রেজিস্টার করা হয়েছে। @custom-variant dark দিয়ে .dark class-based dark mode কাজ করে।

কাস্টম utility class গুলো: .gradient-tg (Telegram blue gradient), .text-gradient (gradient text), .hover-lift (hover animation), .glass-card, .animate-float, .animate-pulse-slow, .scrollbar-hide। দুটি keyframe animation আছে: float (6s ease-in-out) এবং pulse-slow (3s ease-in-out)।`,codeBlocks:[{filename:"src/app/globals.css (থিম variables)",language:"css",code:`@import "tailwindcss";
@import "tw-animate-css";
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-bangla), 'Noto Serif Bengali', serif;
  --color-telegram: #0088cc;
  --color-telegram-light: #29b6f6;
  --color-telegram-dark: #006699;
  --color-tg-blue: #2AABEE;
  /* ... সব color token ... */
}

:root {
  --background: #f8fafb;
  --foreground: #1a1a2e;
  --card: #ffffff;
  --primary: #0088cc;
  --muted: #f0f4f8;
  --muted-foreground: #4a5568;
  --border: #e2e8f0;
  /* ... */
}

.dark {
  --background: #0a0e1a;
  --foreground: #e2e8f0;
  --card: #141925;
  --primary: #2AABEE;
  --muted: #1a1f2e;
  --muted-foreground: #7b8fa3;
  --border: #1e2a3a;
  /* ... */
}`}]}]},{id:"main-page",title:"মূল পেজ আর্কিটেকচার (page.tsx)",icon:"bi-file-earmark-code",content:"src/app/page.tsx হলো সমগ্র অ্যাপ্লিকেশনের মূল ফাইল। এটি 'use client' ডিরেক্টিভ সহ একটি সিঙ্গেল-পেজ অ্যাপ্লিকেশন যেখানে সব সেকশন একটি ফাইলে ডিফাইন করা আছে। পেজটি নিচের সেকশনগুলো নিয়ে গঠিত:",subSections:[{title:"ডেটা টাইপ ও টেম্পলেট সিস্টেম",content:`Bot interface ডিফাইন করা আছে যেখানে id, name, token, username, status, code, templateId, createdAt, webhookUrl, lastPing, messagesReceived, messagesSent প্রপার্টি আছে। BotTemplate interface-এ id, name, icon (Bootstrap Icons class), description, category, code আছে।

BOT_TEMPLATES array-তে ৬টি প্রস্তুত টেম্পলেট আছে। প্রতিটি টেম্পলেটের code হলো একটি JavaScript module.exports ফাংশন যা (update, api) দুটি প্যারামিটার নেয়। update হলো Telegram Update অবজেক্ট, api হলো হেল্পার অবজেক্ট (sendMessage, sendPhoto, sendDocument ইত্যাদি মেথড সহ)।`,codeBlocks:[{filename:"Bot ও BotTemplate Interface",language:"typescript",code:`interface Bot {
  id: string;
  name: string;
  token: string;
  username: string;
  status: 'active' | 'inactive' | 'error';
  code: string;           // JavaScript handler code
  templateId: string;     // কোন টেম্পলেট থেকে তৈরি
  createdAt: string;
  webhookUrl: string;     // Cloudflare Pages URL
  lastPing: string;
  messagesReceived: number;
  messagesSent: number;
}

interface BotTemplate {
  id: string;
  name: string;
  icon: string;          // Bootstrap Icons class যেমন 'bi-robot'
  description: string;
  category: string;      // 'বেসিক' বা 'ব্যবসা'
  code: string;           // module.exports = async function(update, api) { ... }
}`}]},{title:"বট হ্যান্ডলার কোড ফরম্যাট",content:`প্রতিটি বটের কোড নিচের ফরম্যাটে লিখতে হবে। এটি একটি CommonJS module যা একটি async ফাংশন export করে। ফাংশনটি দুটি প্যারামিটার পায়: update (Telegram Update object) এবং api (হেল্পার methods সহ অবজেক্ট)।

api অবজেক্টের মেথডসমূহ: api.sendMessage(chatId, text, options), api.sendPhoto(chatId, fileId, options), api.sendDocument(chatId, fileId, options)। options-এ { parse_mode: 'Markdown' } পাস করা যায়।

update.message.text থেকে ইউজারের পাঠানো টেক্সট পাওয়া যায়। update.message.chat.id থেকে chat ID পাওয়া যায়। update.message.from.first_name থেকে ইউজারের নাম পাওয়া যায়। update.message.photo থেকে ছবি পাওয়া যায়। update.message.document থেকে ফাইল পাওয়া যায়।`,codeBlocks:[{filename:"বট হ্যান্ডলার ফরম্যাট (handler.js)",language:"javascript",code:`// সব বট কোড এই ফরম্যাটে লিখতে হবে
module.exports = async function(update, api) {
  const text = update.message?.text || '';
  const chatId = update.message?.chat?.id;
  const firstName = update.message?.from?.first_name || 'বন্ধু';

  // /start কমান্ড হ্যান্ডেল
  if (text === '/start') {
    await api.sendMessage(chatId, 'স্বাগতম, ' + firstName + '!');
    return;
  }

  // /help কমান্ড
  if (text === '/help') {
    await api.sendMessage(chatId,
      'কমান্ড সমূহ:
/start - শুরু করুন
/help - সাহায্য
/ping - পিং',
      { parse_mode: 'Markdown' }
    );
    return;
  }

  // অন্য যেকোনো মেসেজে রিপ্লাই
  await api.sendMessage(chatId, 'আপনি লিখেছেন: ' + text);
};

// ──── Update Object Structure ────
// update.message = {
//   message_id: number,
//   from: { id: number, first_name: string, username?: string },
//   chat: { id: number, type: 'private'|'group'|'supergroup' },
//   text?: string,
//   photo?: Array<{ file_id: string, file_unique_id: string }>,
//   document?: { file_id: string, file_name?: string },
//   date: number
// }`},{filename:"api অবজেক্টের মেথডসমূহ",language:"typescript",code:`// api অবজেক্ট যা হ্যান্ডলার ফাংশনে পাস হয়
interface BotAPI {
  sendMessage(
    chatId: number | string,
    text: string,
    options?: { parse_mode?: 'Markdown' | 'HTML' }
  ): Promise<any>;

  sendPhoto(
    chatId: number | string,
    fileId: string,
    options?: { caption?: string }
  ): Promise<any>;

  sendDocument(
    chatId: number | string,
    fileId: string,
    options?: { caption?: string }
  ): Promise<any>;
}`}]},{title:"ড্যাশবোর্ড ও স্টেট ম্যানেজমেন্ট",content:`DashboardSection কম্পোনেন্ট সব বট CRUD অপারেশন হ্যান্ডেল করে। বটের ডেটা localStorage-এ 'botforge_bots' key-তে JSON আকারে সেভ থাকে। getStoredBots() দিয়ে ডেটা লোড হয়, saveBots() দিয়ে সেভ হয়।

ড্যাশবোর্ডে দুটি ট্যাব আছে: "বট লিস্ট" (সব বটের কার্ড ভিউ) এবং "কোড এডিটর" (ইন-ব্রাউজার কোড এডিটিং)। নতুন বট তৈরির জন্য Dialog মডাল আছে যেখানে টেম্পলেট সিলেক্টর, নাম, টোকেন, ইউজারনেম, এবং কোড এডিটর আছে।

Home কম্পোনেন্টে pendingTemplate state আছে যা TemplatesSection থেকে ড্যাশবোর্ডে টেম্পলেট অ্যাপ্লাই করার জন্য ব্যবহৃত হয়। useEffect দিয়ে pendingTemplate পরিবর্তন শোনা হয় এবন ডায়ালগ অটো-ওপেন হয়। IntersectionObserver দিয়ে active nav section ট্র্যাক করা হয়।`,codeBlocks:[{filename:"localStorage CRUD ফাংশন",language:"typescript",code:`function getStoredBots(): Bot[] {
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

// বট তৈরির সময় localStorage-ে সেভ হয়
const newBot: Bot = {
  id: 'bot_' + Math.random().toString(36).substring(2, 10),
  name: formName,
  token: formToken,
  username: formUsername || '@' + formName.toLowerCase().replace(/s+/g, '_'),
  status: 'active',
  code: formCode,
  templateId: selectedTemplateId,
  createdAt: new Date().toISOString(),
  webhookUrl: 'https://your-project.pages.dev/webhook/' + generateId(),
  lastPing: new Date().toISOString(),
  messagesReceived: 0,
  messagesSent: 0,
};
saveBots([newBot, ...existingBots]);`}]},{title:"টেম্পলেট লিস্ট",content:"৬টি প্রস্তুত টেম্পলেট আছে দুটি ক্যাটাগরিতে: বেসিক (৩টি) এবং ব্যবসা (৩টি)। প্রতিটি টেম্পলেটে সম্পূর্ণ কার্যকর বট কোড আছে যা সরাসরি ডিপ্লয় করা যায়। টেম্পলেট কোডে বাংলা ভাষায় মেসেজ ও কমান্ড লেখা আছে।",codeBlocks:[{filename:"৬টি টেম্পলেট",language:"javascript",code:`// ১. blank (খালি বট) - বেসিক
// সম্পূর্ণ খালি টেম্পলেট, /start শুধু

// ২. welcome (ওয়েলকাম বট) - বেসিক
// /start, /help, /about, /ping কমান্ড
// ইউজার গ্রিটিং, রেসপন্স টাইম টেস্ট

// ৩. echo (ইকো বট) - বেসিক
// টেক্সট, ছবি, ফাইল ইকো (ফিরিয়ে পাঠায়)
// টেস্টিং এর জন্য আদর্শ

// ৪. faq (FAQ বট) - ব্যবসা
// প্রি-ডিফাইন্ড প্রশ্ন-উত্তর, নম্বর/কীওয়ার্ড ম্যাচিং
// নতুন কর্মী, কাস্টমার সাপোর্ট

// ৫. poll (পোল বট) - ব্যবসা
// /newpoll দিয়ে ইনলাইন পোল তৈরি
// গ্রুপ/চ্যানেলে ভোট সংগ্রহ

// ৬. notification (নোটিফিকেশন বট) - ব্যবসা
// /notify ও /announce কমান্ড
// টীম/কমিউনিটি ম্যানেজমেন্ট`}]},{title:"ডার্ক মোড টগল",content:'next-themes লাইব্রেরি ব্যবহার করে ডার্ক মোড ইম্প্লিমেন্ট করা হয়েছে। ThemeProvider layout.tsx-এ attribute="class" দিয়ে র‍্যাপ করা, যার মানে html element-এ .dark class যোগ/সরানো হয়। DarkModeToggle কম্পোনেন্টে useTheme() hook ব্যবহৃত হয়। mounted state দিয়ে hydration mismatch প্রতিরোধ করা হয়েছে।',codeBlocks:[{filename:"DarkModeToggle কম্পোনেন্ট",language:"tsx",code:`function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-9 h-9" />;
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 rounded-xl flex items-center justify-center
        border border-border hover:bg-muted transition-all duration-300"
    >
      <i className={\`bi \${
        theme === 'dark' ? 'bi-sun-fill text-amber-400' : 'bi-moon-fill text-indigo-400'
      } text-lg\`} />
    </button>
  );
}`}]},{title:"নেভিগেশন ও স্ক্রল সিস্টেম",content:"Navbar ফিক্সড টপে থাকে (z-50, backdrop-blur)। IntersectionObserver দিয়ে কোন সেকশন ভিউপোর্টে আছে তা ট্র্যাক করে active nav link হাইলাইট করে। scrollToSection() ফাংশন getBoundingClientRect() ব্যবহার করে element-এর অবস্থান বের করে, 64px navbar height বাদ দিয়ে smooth scroll করে। মোবাইলে হ্যামবার্গার মেনু আছে।"}]},{id:"ui-components",title:"UI কম্পোনেন্ট লাইব্রেরি",icon:"bi-puzzle",content:"সব UI কম্পোনেন্ট shadcn/ui প্যাটার্ন অনুসরণ করে। প্রতিটি কম্পোনেন্ট নিচের প্যাটার্নে লেখা: Radix UI Primitive ইম্পোর্ট, cn() utility দিয়ে className merge, data-slot attribute সহ semantic HTML, forwardRef প্যাটার্ন (যেখানে প্রযোজ্য)। কোনো লুসাইড-রিয়্যাক্ট আইকন ব্যবহৃত হয়নি — সব আইকন ইনলাইন SVG বা Bootstrap Icons CDN থেকে।",subSections:[{title:"Button (button.tsx)",content:"class-variance-authority (CVA) দিয়ে ৫টি variant (default, destructive, outline, secondary, ghost, link) এবং ৪টি size (default, sm, lg, icon) ডিফাইন করা আছে। Radix Slot ব্যবহার করে asChild prop সাপোর্ট করে।"},{title:"Dialog (dialog.tsx)",content:"@radix-ui/react-dialog ভিত্তিক। DialogContent-এ Portal + Overlay + Content প্যাটার্ন। অ্যানিমেশন: zoom-in/out, fade-in/out (data-[state=open]/data-[state=closed])। showCloseButton prop দিয়ে close button লুকানো/দেখানো যায়। XIcon ইনলাইন SVG দিয়ে তৈরি।"},{title:"Accordion (accordion.tsx)",content:"@radix-ui/react-accordion ভিত্তিক। ChevronDownIcon ইনলাইন SVG। AccordionTrigger-এ [&[data-state=open]>svg]:rotate-180 দিয়ে চেভরন রোটেশন। অ্যানিমেশন: accordion-up, accordion-down (tw-animate-css থেকে)।"},{title:"Toast System (toast.tsx + toaster.tsx + use-toast.ts)",content:"@radix-ui/react-toast ভিত্তিক সম্পূর্ণ toast notification সিস্টেম। use-toast.ts-এ reducer pattern দিয়ে state ম্যানেজ হয়। TOAST_LIMIT = 1 (একসাথে একটি toast)। toast() ফাংশন কল করলে dispatch হয়, listeners-এর মাধ্যমে সব useToast() হুক আপডেট হয়। variant: 'default' | 'destructive' সাপোর্ট।"},{title:"অন্যান্য কম্পোনেন্ট",content:"Card (card.tsx): Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter — সব section-এ ব্যবহৃত। Input (input.tsx): focus-visible ring সহ styled input। Textarea (textarea.tsx): resize-y সহ textarea। Badge (badge.tsx): variant (default, secondary, outline, destructive) সহ ছোট ব্যাজ। Tabs (tabs.tsx): @radix-ui/react-tabs ভিত্তিক, ড্যাশবোর্ডে ব্যবহৃত। Separator (separator.tsx): @radix-ui/react-separator ভিত্তিক ডিভাইডার।"}]},{id:"deployment",title:"Cloudflare Pages ডিপ্লয়মেন্ট গাইড",icon:"bi-cloud-upload",content:"BotForge Cloudflare Pages-এ সম্পূর্ণ ফ্রিতে হোস্ট করা যায়। নিচে ধাপে ধাপে দেওয়া হলো কিভাবে ডিপ্লয় করতে হবে। আপনার একটি GitHub অ্যাকাউন্ট এবং একটি Cloudflare অ্যাকাউন্ট লাগবে (দুটিই ফ্রি)।",subSections:[{title:"ধাপ ১: GitHub রিপো তৈরি",content:"GitHub-এ একটি নতুন repository তৈরি করুন (Private বা Public, যেকোনোটা)। এই প্রোডাকশন ZIP ফাইল আনজিপ করে সব ফাইল রিপোতে কমিট ও পুশ করুন।"},{title:"ধাপ ২: Cloudflare Pages তে কানেক্ট",content:"Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git-এ যান। আপনার GitHub রিপো সিলেক্ট করুন।"},{title:"ধাপ ৩: বিল্ড সেটিংস (সবচেয়ে গুরুত্বপূর্ণ!)",content:"এই সেটিংস ভুল হলে সাইট 404 দেবে! নিচের মতো সেট করুন:",codeBlocks:[{filename:"Cloudflare Pages Build Settings",language:"text",code:`Framework preset:    None
Build command:       npm run build
Build output dir:    out
Root directory:       (খালি রাখুন)
Node.js version:      18 বা 20

⚠️ সতর্কতা:
- Build output dir অবশ্যই "out" হতে হবে (".next" নয়!)
- Framework preset "None" রাখুন ("Next.js" সিলেক্ট করবেন না)
- next.config.ts-এ output: "export" আছে কিনা নিশ্চিত করুন`}]},{title:"ধাপ ৪: ডিপ্লয় হওয়ার অপেক্ষা",content:"Save and Deploy ক্লিক করুন। ১-২ মিনিটে বিল্ড সম্পন্ন হবে। সফল হলে আপনি একটি .pages.dev সাবডোমেইন পাবেন। কাস্টম ডোমেইনও কানেক্ট করতে পারবেন Custom Domains ট্যাব থেকে।"},{title:"সমস্যা সমাধান (Troubleshooting)",content:`সাইট 404 দেচ্ছে: Build output directory "out" সেট আছে কিনা চেক করুন। next.config.ts-এ output: "export" আছে কিনা যাচাই করুন। বিল্ড লগে সব রুট "Static" হিসেবে দেখাচ্ছে কিনা চেক করুন।

বিল্ড ফেইল হচ্ছে: npm install সফল হচ্ছে কিনা দেখুন। package-lock.json কমিট করেছেন কিনা নিশ্চিত করুন। Node.js version 18+ ব্যবহার করুন।

ফন্ট লোড হচ্ছে না: Noto Serif Bangla Google Font next/font/google থেকে লোড হয়। ইন্টারনেট কানেকশন চেক করুন।`,codeBlocks:[{filename:"next.config.ts (সঠিক কনফিগ)",language:"typescript",code:`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // ← এটি অবশ্যই লাগবে!
  typescript: {
    ignoreBuildErrors: true,  // টাইপ এরর ইগনোর
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,        // static export-এ লাগবে
  },
};

export default nextConfig;`}]}]},{id:"bot-hosting",title:"বট হোস্টিং সম্পূর্ণ গাইড",icon:"bi-robot",content:"BotForge-এ বট হোস্ট করার সম্পূর্ণ প্রক্রিয়া নিচে দেওয়া হলো। একটি AI যদি এই ডকুমেন্টেশন পড়ে, তাহলে সে সম্পূর্ণ বট কোড তৈরি করতে পারবে এবং হোস্ট করতে পারবে।",subSections:[{title:"ধাপ ১: Telegram Bot Token নিন",content:"Telegram-ে @BotFather বটে মেসেজ পাঠান। /newbot কমান্ড দিন, বটের নাম দিন, ইউজারনেম দিন। BotFather একটি Token দেবে যেমন: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz। এই Token নিরাপদে রাখুন, কাউকে শেয়ার করবেন না।"},{title:"ধাপ ২: BotForge ড্যাশবোর্ডে বট তৈরি করুন",content:'ওয়েবসাইটের ড্যাশবোর্ড সেকশনে যান। "নতুন বট" বাটনে ক্লিক করুন। টেম্পলেট বেছে নিন বা খালি থেকে শুরু করুন। বটের নাম, Bot Token, ইউজারনেম দিন। কোড এডিটরে বটের লজিক লিখুন (module.exports ফরম্যাটে)। সেভ করুন।',codeBlocks:[{filename:"নতুন বট তৈরির ফ্লো",language:"text",code:`১. BotForge ওয়েবসাইট ওপেন করুন
২. ড্যাশবোর্ড সেকশনে যান (নেভিগেশন বার থেকে)
৩. "নতুন বট" বাটনে ক্লিক করুন
৪. ডায়ালগে টেম্পলেট বেছে নিন:
   - খালি বট (নিজে কোড লিখুন)
   - ওয়েলকাম বট (/start, /help, /about, /ping)
   - ইকো বট (মেসেজ, ছবি, ফাইল ইকো)
   - FAQ বট (প্রশ্ন-উত্তর)
   - পোল বট (ভোট সংগ্রহ)
   - নোটিফিকেশন বট (ঘোষণা)
৫. বটের নাম দিন (যেমন: MyHelperBot)
৬. BotFather থেকে প্রাপ্ত Token পেস্ট করুন
৭. বট ইউজারনেম দিন (যেমন: @my_helper_bot)
৮. কোড কাস্টমাইজ করুন (ইচ্ছামতো)
৯. "তৈরি" বাটনে ক্লিক করুন
১০. বট এখন ড্যাশবোর্ডে দেখা যাবে`}]},{title:"ধাপ ৩: Webhook সেটআপ",content:"বট তৈরির পর প্রতিটি বট একটি webhook URL পায় (যেমন: https://your-project.pages.dev/webhook/bot_abc123)। এই URL Telegram-এ রেজিস্টার করতে হবে। ব্রাউজারে বা curl দিয়ে নিচের API কল করুন:",codeBlocks:[{filename:"Webhook সেট করার API কল",language:"bash",code:`# Webhook সেট করুন
 curl -X POST "https://api.telegram.org/bot<TOKEN>/setWebhook" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://your-project.pages.dev/webhook/bot_abc123"}'

# Webhook স্ট্যাটাস চেক করুন
curl "https://api.telegram.org/bot<TOKEN>/getWebhookInfo"

# Webhook মুছে ফেলুন (লাগবে না হলে)
curl "https://api.telegram.org/bot<TOKEN>/deleteWebhook"`}]},{title:"ধাপ ৪: বট টেস্টিং",content:"Telegram অ্যাপে আপনার বট সার্চ করুন, বটের ইউজারনেম দিয়ে। /start কমান্ড পাঠান। বট রিপ্লাই দিলে সব ঠিক আছে! ড্যাশবোর্ড থেকে বটের স্ট্যাটাস দেখুন, কোড এডিট করুন, আবার ডিপ্লয় করুন।"},{title:"AI দিয়ে বট কোড তৈরির নির্দেশনা",content:"যেকোনো AI-কে (যেমন ChatGPT, Claude, Gemini) নিচের প্রম্পট দিয়ে বট কোড তৈরি করতে বলুন:",codeBlocks:[{filename:"AI প্রম্পট টেমপ্লেট",language:"text",code:`তুমি একজন Telegram Bot ডেভেলপার। BotForge প্ল্যাটফর্মের জন্য একটি বট হ্যান্ডলার লিখো।

বট হ্যান্ডলার ফরম্যাট:
module.exports = async function(update, api) { ... }

Parameters:
- update.message.text (string): ইউজারের পাঠানো টেক্সট
- update.message.chat.id (number): চ্যাট আইডি
- update.message.from.first_name (string): ইউজারের নাম
- update.message.photo (array | undefined): ছবি
- update.message.document (object | undefined): ফাইল

api methods:
- api.sendMessage(chatId, text, { parse_mode: 'Markdown' })
- api.sendPhoto(chatId, fileId, { caption: '' })
- api.sendDocument(chatId, fileId, { caption: '' })

[এখানে তোমার বটের বিবরণ দাও]
বটের কাজ: ...
কমান্ডসমূহ: ...
বিশেষ ফিচার: ...

মেসেজ বাংলায় হবে।`},{filename:"উদাহরণ: ক্যালকুলেটর বট (AI তৈরি)",language:"javascript",code:`// AI এই কোড তৈরি করতে পারবে
module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start') {
    await api.sendMessage(chatId,
      'ক্যালকুলেটর বট! 

' +
      'ব্যবহার: /calc 25 + 30 * 2
' +
      'অপারেটর: + - * / 

' +
      '/help - সাহায্য দেখুন'
    );
    return;
  }

  if (text.startsWith('/calc ')) {
    const expr = text.substring(6);
    try {
      // শুধুমাত্র সংখ্যা ও অপারেটর অনুমোদন
      if (/^[0-9+-*/().s]+$/.test(expr)) {
        const result = Function('"use strict"; return (' + expr + ')')();
        await api.sendMessage(chatId,
          ' গণনা: ' + expr + '
' +
          ' = ' + result
        );
      } else {
        await api.sendMessage(chatId, 'শুধুমাত্র সংখ্যা ও + - * / ব্যবহার করুন।');
      }
    } catch {
      await api.sendMessage(chatId, 'গণনায় ত্রুটি! সঠিক ফরম্যাট ব্যবহার করুন।');
    }
    return;
  }

  await api.sendMessage(chatId, 'কমান্ড চিনতে পারছি না। /help দেখুন।');
};`}]}]},{id:"customization",title:"কাস্টমাইজেশন গাইড",icon:"bi-palette",content:"BotForge সহজে কাস্টমাইজ করা যায়। রঙ, ফন্ট, টেম্পলেট সব পরিবর্তন করা সম্ভব।",subSections:[{title:"রঙ পরিবর্তন",content:"globals.css-এ :root এবং .dark সেকশনে CSS variables পরিবর্তন করুন। --color-telegram, --color-telegram-light, --color-telegram-dark, --color-tg-blue পরিবর্তন করলে সাইটের মূল রঙ বদলাবে। .gradient-tg utility class-এ gradient colors পরিবর্তন করুন।",codeBlocks:[{filename:"রঙ কাস্টমাইজেশন উদাহরণ",language:"css",code:`/* globals.css - সবুজ থিম */
:root {
  --background: #f0fdf4;
  --foreground: #14532d;
  --primary: #16a34a;
  --card: #ffffff;
  --muted: #dcfce7;
  --border: #bbf7d0;
}

/* @theme inline-এ */
--color-telegram: #16a34a;
--color-telegram-light: #4ade80;
--color-telegram-dark: #15803d;
--color-tg-blue: #22c55e;

/* .gradient-tg utility-এ */
.gradient-tg {
  background: linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%);
}`}]},{title:"নতুন টেম্পলেট যোগ করা",content:"page.tsx-এ BOT_TEMPLATES array-তে নতুন অবজেক্ট যোগ করুন। id ইউনিক হতে হবে, icon হবে Bootstrap Icons class, category হবে 'বেসিক' বা 'ব্যবসা' (বা নতুন ক্যাটাগরি), code হবে module.exports ফরম্যাটের JavaScript কোড।",codeBlocks:[{filename:"নতুন টেম্পলেট যোগ করার উদাহরণ",language:"javascript",code:`// BOT_TEMPLATES array-তে যোগ করুন
{
  id: 'weather',
  name: 'ওয়েদার বট',
  icon: 'bi-cloud-sun',
  description: 'শহরের নাম দিলে আবহাওয়া দেখায়।',
  category: 'ব্যবসা',
  code: \`module.exports = async function(update, api) {
  const text = (update.message?.text || '').trim();
  const chatId = update.message?.chat?.id;

  if (text === '/start') {
    await api.sendMessage(chatId,
      'ওয়েদার বট!
' +
      'শহরের নাম লিখুন, আবহাওয়া জানাবো।'
    );
    return;
  }

  // শহরের নাম পেলে আবহাওয়া দেখান
  await api.sendMessage(chatId, text + ' শহরের আবহাওয়া লোড হচ্ছে...');
  // TODO: API call যোগ করুন
};\`
}`}]}]}];function s({block:e}){let[o,r]=(0,a.useState)(!1);return(0,t.jsxs)("div",{className:"rounded-xl overflow-hidden border border-border bg-[#0d1117] my-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("div",{className:"flex gap-1.5",children:[(0,t.jsx)("span",{className:"w-3 h-3 rounded-full bg-red-500/80"}),(0,t.jsx)("span",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),(0,t.jsx)("span",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),(0,t.jsx)("span",{className:"text-xs text-muted-foreground font-mono ml-2",children:e.filename})]}),(0,t.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(e.code),r(!0),setTimeout(()=>r(!1),2e3)},className:"text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1",children:[(0,t.jsx)("i",{className:`bi ${o?"bi-check-lg text-green-400":"bi-clipboard"}`}),o?"কপি হয়েছে":"কপি"]})]}),(0,t.jsx)("pre",{className:"p-4 overflow-x-auto text-sm font-mono leading-relaxed scrollbar-hide",children:(0,t.jsx)("code",{className:"text-gray-300",children:e.code})})]})}function r({activeId:e,onNav:a,onClose:s}){return(0,t.jsxs)("div",{className:"fixed inset-0 z-50 lg:hidden",onClick:s,children:[(0,t.jsx)("div",{className:"fixed inset-0 bg-black/50"}),(0,t.jsxs)("aside",{className:"fixed left-0 top-0 bottom-0 w-72 bg-card border-r border-border overflow-y-auto p-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg gradient-tg flex items-center justify-center text-white text-sm",children:(0,t.jsx)("i",{className:"bi bi-journal-code"})}),(0,t.jsx)("span",{className:"font-bold text-gradient",children:"ডকুমেন্টেশন"})]}),(0,t.jsx)("button",{onClick:s,className:"p-1 hover:bg-muted rounded-lg",children:(0,t.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,t.jsx)("nav",{className:"space-y-1",children:o.map(o=>(0,t.jsxs)("button",{onClick:()=>{a(o.id),s()},className:`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-3 ${e===o.id?"bg-[var(--color-telegram)]/10 text-[var(--color-telegram)] font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[(0,t.jsx)("i",{className:`bi ${o.icon}`}),o.title]},o.id))})]})]})}e.s(["default",0,function(){let[e,n]=(0,a.useState)(o[0].id),[i,l]=(0,a.useState)(!1),c=e=>{n(e);let t=document.getElementById("doc-"+e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,t.jsxs)("div",{className:"min-h-screen bg-background",children:[(0,t.jsx)("header",{className:"sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("button",{onClick:()=>l(!0),className:"lg:hidden p-2 hover:bg-muted rounded-lg",children:(0,t.jsx)("i",{className:"bi bi-list text-lg"})}),(0,t.jsxs)("a",{href:"/",className:"flex items-center gap-2 group",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg gradient-tg flex items-center justify-center text-white text-sm",children:(0,t.jsx)("i",{className:"bi bi-robot"})}),(0,t.jsx)("span",{className:"font-bold text-gradient",children:"BotForge"})]}),(0,t.jsx)("span",{className:"hidden sm:inline text-muted-foreground",children:"/"}),(0,t.jsx)("span",{className:"hidden sm:inline font-medium",children:"ডকুমেন্টেশন"})]}),(0,t.jsxs)("a",{href:"/",className:"text-sm text-muted-foreground hover:text-[var(--color-telegram)] transition-colors flex items-center gap-1",children:[(0,t.jsx)("i",{className:"bi bi-arrow-left"}),"মূল পেজে ফিরুন"]})]})}),i&&(0,t.jsx)(r,{activeId:e,onNav:c,onClose:()=>l(!1)}),(0,t.jsxs)("div",{className:"max-w-7xl mx-auto flex",children:[(0,t.jsx)("aside",{className:"hidden lg:block w-64 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-4 scrollbar-hide",children:(0,t.jsx)("nav",{className:"space-y-1",children:o.map(a=>(0,t.jsxs)("button",{onClick:()=>c(a.id),className:`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-3 ${e===a.id?"bg-[var(--color-telegram)]/10 text-[var(--color-telegram)] font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted"}`,children:[(0,t.jsx)("i",{className:`bi ${a.icon} text-base`}),a.title]},a.id))})}),(0,t.jsxs)("main",{className:"flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-8 pb-24",children:[(0,t.jsxs)("div",{className:"mb-12 p-8 rounded-2xl gradient-tg text-white relative overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-black/10"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,t.jsx)("i",{className:"bi bi-journal-code text-2xl"}),(0,t.jsx)("span",{className:"text-sm font-medium bg-white/20 px-3 py-1 rounded-full",children:"v1.0.0"})]}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold mb-3",children:"BotForge ডেভেলপার ডকুমেন্টেশন"}),(0,t.jsx)("p",{className:"text-white/80 text-lg max-w-2xl leading-relaxed",children:"প্ল্যাটফর্মের সম্পূর্ণ আর্কিটেকচার, কোড স্ট্রাকচার, বট হোস্টিং গাইড, এবং AI দিয়ে বট কোড তৈরির নির্দেশনা। এই ডকুমেন্টেশন যেকোনো AI-কে দিলে সে সম্পূর্ণ প্ল্যাটফর্ম বুঝে কাস্টম বট কোড তৈরি করতে পারবে।"})]})]}),o.map(e=>(0,t.jsxs)("section",{id:`doc-${e.id}`,className:"mb-14 scroll-mt-20",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-6",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-xl gradient-tg flex items-center justify-center text-white text-lg shrink-0",children:(0,t.jsx)("i",{className:`bi ${e.icon}`})}),(0,t.jsx)("h2",{className:"text-2xl sm:text-3xl font-bold",children:e.title})]}),e.content.split("\n\n").map((e,a)=>{if(e.startsWith("**")&&e.endsWith("**"))return(0,t.jsx)("p",{className:"font-semibold mt-4 mb-2",children:e.replace(/\*\*/g,"")},a);if(e.startsWith("**")){let o=e.split("**");return(0,t.jsx)("p",{className:"leading-relaxed mb-3",children:o.map((e,a)=>a%2==1?(0,t.jsx)("strong",{children:e},a):e)},a)}return(0,t.jsx)("p",{className:"leading-relaxed mb-3 text-foreground/90",children:e},a)}),e.codeBlocks?.map((e,a)=>(0,t.jsx)(s,{block:e},a)),e.subSections?.map((e,a)=>(0,t.jsxs)("div",{className:"mt-8 ml-0 sm:ml-4",children:[(0,t.jsxs)("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:[(0,t.jsx)("span",{className:"w-6 h-6 rounded-md bg-[var(--color-telegram)]/10 flex items-center justify-center text-xs text-[var(--color-telegram)] font-bold",children:a+1}),e.title]}),e.content.split("\n\n").map((e,a)=>{if(e.startsWith("**")&&e.endsWith("**"))return(0,t.jsx)("p",{className:"font-semibold mt-3 mb-1",children:e.replace(/\*\*/g,"")},a);if(e.startsWith("**")){let o=e.split("**");return(0,t.jsx)("p",{className:"leading-relaxed mb-3",children:o.map((e,a)=>a%2==1?(0,t.jsx)("strong",{children:e},a):e)},a)}return(0,t.jsx)("p",{className:"leading-relaxed mb-3 text-foreground/90",children:e},a)}),e.codeBlocks?.map((e,a)=>(0,t.jsx)(s,{block:e},a))]},a))]},e.id))]})]})]})}])}]);