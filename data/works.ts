import { Work } from "@/types/work";

export const works: Work[] = [
  {
    id: 3,
    title: "同期図鑑",
    description: "同期のプロフィールと共通点を見える化し、誕生日を寄せ書きでお祝いできるWebアプリ",
    detail: "同期同士の交流を深めるために作成したWebアプリです。趣味や出身地などのプロフィールから同期との共通点を表示し、名前・趣味・出身地・職種で同期を検索できます。誕生日の前後1週間だけ書ける寄せ書き機能があり、本人は誕生日当日まで内容を見られないサプライズ仕様にしています。Googleログインと招待コードで同期だけが使えるようにし、写真は非公開の保存領域に置いて期限付きURLで表示するなど、プライバシーにも配慮しました。スマホ優先の画面で、ホーム画面に追加してアプリのように使えます（PWA）。",
    imageUrl: "/images/doki-zukan.png",
    githubUrl: "https://github.com/Taito1608/doki-zukan",
    demoUrl: "https://doki-zukan.vercel.app/about",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "PWA",
    ],
  },

  {
    id: 1,
    title: "温度湿度センサーを用いたモニタリングシステム",
    description: "Raspberry Piを用いた温度湿度モニタリングシステム",
    detail: "このサービスは、Raspberry Piを使用して温度と湿度をモニタリングシステムです。センサーからデータを収集し、リアルタイムで表示するWebアプリケーションが特徴です。温度が設定した閾値を超えた場合にメールを送信する機能も備えており、ユーザーは環境の変化に迅速に対応できるようになっています。",
    imageUrl: "/images/temperature-humidity-monitoring.png",
    githubUrl: "https://github.com/Taito1608/THsense_system",
    demoUrl: "",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "Raspberry Pi",
      "MariaDB",
      "Arduino",
      "DHT20",
    ],
  },

  {
    id: 2,
    title: "Portfolio",
    description:
      "Next.jsで作成したポートフォリオサイト",
    detail: "このポートフォリオサイトは、Next.jsを使用して作成しました。TypeScriptとSCSSを用いて開発され、Framer Motionを用いたアニメーション効果が特徴です。",
    imageUrl: "/images/portfolio.png",
    githubUrl: "https://github.com/Taito1608/my-portfolio",
    demoUrl: "https://taito1608.vercel.app",
    technologies: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "Framer Motion",
    ],
  },
];
