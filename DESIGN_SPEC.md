**デザイン仕様書 — my-portfolio**

概要
- 現在の実装に合わせたビジュアル設計とコンポーネント一覧です。デザインを変更したら、このファイルも更新してください。
- 初期の参考: https://szn.jp

カラーパレット（`styles/abstracts/_variables.scss`）

| トークン | ライト | ダーク | 用途 |
| --- | --- | --- | --- |
| `--color-background` | `#f5f5f5` | `#112234` | ページ背景 |
| `--color-surface` | `#f7f7f7` | `#182b40` | カード・ドロワーなどの面 |
| `--color-text` | `#112234` | `#f5f5f5` | 主要テキスト |
| `--color-sub-text` | `#3267a9` | `#e3c097` | アクセント・補助テキスト・署名の線 |
| `--color-border` | `#ececec` | `#2a2a2a` | 区切り線・カードの枠 |

- テーマ切り替えは `next-themes`（`attribute="class"`）。ダークモードでは `<html class="dark">` が付与される。
- CSS Modules からダーク時のスタイルを書く場合は `:global(html.dark) .xxx` を使う。

タイポグラフィ
- ベースフォント: `Noto Sans JP`（`app/layout.tsx` で `next/font/google` から読み込み）
- サイズトークン

| トークン | 値 | 主な用途 |
| --- | --- | --- |
| `--font-size-xs` | 0.875rem | 小さなラベル |
| `--font-size-sm` | 1rem | 本文 |
| `--font-size-md` | 1.5rem | カードタイトル・モバイルメニュー |
| `--font-size-lg` | 3rem | セクション見出し（h2） |
| `--font-size-xl` | 5rem | 大見出し |

スペーシング & レイアウト
- コンテナ: `max-width: 1100px`（`--max-width`）、左右 padding 5rem（モバイル 3rem）
- ヘッダー高さ: 80px（`--header-height`）
- セクション上下 padding: 160px（`--section-padding`）
- ブレークポイント: モバイル 768px / タブレット 1024px（`styles/abstracts/_breakpoints.scss`）

アニメーション指針
- イージング: `cubic-bezier(.22, .9, .35, 1)` を基本とする
- セクションのフェードアップ: `components/common/Motion/fadeUp.ts`（Framer Motion の Variants、`hidden` → `show`）
- Works カード: `staggerChildren: 0.08` で順番に表示
- Hero の手書き署名: SVG の stroke-dashoffset による描画アニメーション（7秒）。`prefers-reduced-motion` 時はアニメーションなし
- カードホバー: `translateY(-6px)` + box-shadow、画像は `scale(1.04)`

コンポーネント一覧
- `Signature` — 手書き署名の SVG。パスは `signaturePath.ts` に定義し、Hero と OG 画像で共有
- `Header` — 固定ヘッダー。スクロール位置に応じて現在のセクションをハイライト、テーマ切り替えボタン、モバイルではハンバーガーメニュー
- `Container` — 横幅と左右余白の制御
- `Footer` — コピーライト
- `sections/Hero` / `About` / `Skills` / `Works` / `Contact` — 各セクション
- `WorkCard` / `WorksDrawer` — 制作物カードと、クリックで下から開く詳細ドロワー

データ
- Works: `data/works.ts`（型: `types/work.ts`）
- 画像アセット: `public/images/`

アクセシビリティ
- 主要テキストと背景のコントラスト比を確保する
- キーボード操作時は `:focus-visible` でフォーカスを明示する
- ドロワーなどのダイアログは `role="dialog"`・Esc で閉じる・フォーカスを戻す
- 装飾目的の SVG は `aria-hidden`
