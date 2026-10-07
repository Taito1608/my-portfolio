# my-portfolio

Taito Yusa のポートフォリオサイトです。

https://taito1608.vercel.app

## 技術スタック

- [Next.js](https://nextjs.org) 16（App Router / React Compiler）
- React 19 / TypeScript
- SCSS（CSS Modules）
- [Framer Motion](https://motion.dev)（スクロール時のフェードイン、Worksのドロワー）
- [next-themes](https://github.com/pacocoursey/next-themes)（ライト / ダークテーマ）
- Vercel（ホスティング）

## セクション構成

| セクション | 内容 |
| --- | --- |
| Hero | 手書き署名のSVGストロークアニメーション |
| About | 自己紹介 |
| Skills | カテゴリ別のスキル一覧 |
| Works | 制作物のカード一覧。クリックで詳細ドロワーを表示 |
| Contact | メール・SNSへのリンク |

## ディレクトリ構成

```
app/                 レイアウト・ページ・メタデータ
components/
  common/            汎用コンポーネント（Signature、モーション定義など）
  layout/            Header / Footer / Container
  sections/          各セクション（Hero, About, Skills, Works, Contact）
data/                表示するデータ（works.ts など）
types/               型定義
styles/              SCSSの変数・mixin・ベーススタイル
public/images/       Worksのサムネイル画像
```

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | ビルド結果を起動 |
| `npm run lint` | ESLint を実行 |

## コンテンツの更新

### Works を追加する

1. サムネイル画像を `public/images/` に置く
2. `data/works.ts` の配列に作品を追加する

```ts
{
  id: 3,
  title: "作品名",
  description: "カードに表示する短い説明",
  detail: "ドロワーに表示する詳しい説明",
  imageUrl: "/images/xxx.png",
  githubUrl: "https://github.com/...", // 任意
  demoUrl: "https://...",              // 任意
  technologies: ["Next.js", "TypeScript"],
},
```
