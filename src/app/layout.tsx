import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "BotForge - টেলিগ্রাম বট হোস্টিং প্ল্যাটফর্ম",
  description:
    "Cloudflare Pages-এ সম্পূর্ণ ফ্রিতে আপনার Telegram বট হোস্ট করুন। কোনো সার্ভার লাগবে না, কোনো ডাটাবেস লাগবে না। আনলিমিটেড বট, আনলিমিটেড রিকোয়েস্ট, চিরকাল ফ্রি।",
  keywords: [
    "Telegram Bot",
    "Bot Hosting",
    "Cloudflare Pages",
    "Free Bot Hosting",
    "Serverless",
    "টেলিগ্রাম বট",
    "ফ্রি বট হোস্টিং",
    "বট তৈরি",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${notoSerifBengali.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}