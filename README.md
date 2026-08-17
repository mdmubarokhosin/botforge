# BotForge - Telegram Bot Hosting Platform

সম্পূর্ণ ফ্রি ও আনলিমিটেড Telegram বট হোস্টিং প্ল্যাটফর্ম। Cloudflare Pages-এ ডিপ্লয় করুন।

## ফিচার

- আনলিমিটেড বট ও রিকোয়েস্ট
- কোনো ডাটাবেস লাগবে না
- ৬টি প্রস্তুত বট টেম্পলেট
- ইন-ব্রাউজার কোড এডিটর
- সম্পূর্ণ রেসপন্সিভ
- Bootstrap Icons CDN

## ডিপ্লয় (Cloudflare Pages)

1. এই রিপোটি GitHub-এ ফোর্ক করুন
2. Cloudflare Dashboard > Pages > Create a project
3. GitHub কানেক্ট করুন
4. Build command: `npm run build`
5. Output directory: `.next`

## লোকালি চালানো

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে http://localhost:3000 ওপেন করুন।

## টেম্পলেট সমূহ

1. **খালি বট** - সম্পূর্ণ কাস্টম
2. **ওয়েলকাম বট** - /start, /help, /ping
3. **ইকো বট** - মেসেজ, ফটো, ফাইল ইকো
4. **FAQ বট** - প্রি-ডিফাইন্ড প্রশ্ন-উত্তর
5. **পোল বট** - ইনলাইন পোল তৈরি
6. **নোটিফিকেশন বট** - ঘোষণা ও নোটিফিকেশন

## টেকনোলজি

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Bootstrap Icons CDN
