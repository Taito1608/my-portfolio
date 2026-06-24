import { Work } from "@/types/work";

export const works: Work[] = [
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
      "Arduino",
      "DHT11 Sensor",
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
