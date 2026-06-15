import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import "./globals.scss";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taito Yusa",
  description: "Portfolio website of Taito Yusa",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
