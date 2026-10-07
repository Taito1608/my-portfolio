import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.scss";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

// 見出しやラベルなど英字部分に使う等幅フォント
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://taito1608.vercel.app";
const siteTitle = "Taito - Portfolio";
const siteDescription =
  "情報系学部に所属するTaito Yusaのポートフォリオサイトです。IoTを活用したシステム開発やWebアプリケーション開発の制作実績、スキルを紹介しています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Taito Yusa", url: "https://github.com/Taito1608" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={jetBrainsMono.variable} suppressHydrationWarning>
      <body className={notoSansJP.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
