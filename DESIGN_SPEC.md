**デザイン仕様書 — my-portfolio（参考: https://szn.jp）**

概要
- 目的: `szn.jp` を参考にしつつポートフォリオ向けに調整したビジュアル設計とコンポーネント一覧を提供します。

カラーパレット
- --color-bg: #0F0F10 (ダーク背景)
- --color-surface: #121215
- --color-muted: #9CA3AF (中間のグレー)
- --color-text: #FFFFFF
- --color-accent: #FFD166 (アクセント：暖色系のイエロー/オレンジ)
- --color-accent-2: #FF6B6B (補助アクセント)

（用途）
- 背景: `--color-bg` / surface 層はカードやセクションに `--color-surface`。
- テキスト主要: `--color-text`。補助テキスト: `--color-muted`。
- 重要CTAやハイライトに `--color-accent` を使用。

タイポグラフィ
- ベースフォント: `Geist`（既に `app/layout.tsx` で読み込み済み）
- モノスペース: `Geist_Mono`（コードや小さなラベル用）
- 推奨サイズ（レスポンシブ）
  - h1: 48px (desktop), 34px (mobile)
  - h2: 32px / 24px
  - body: 18px / 16px
  - caption: 13px

スペーシング & グリッド
- ベース間隔: 8px スケールで倍数（8,16,24,32,48,64）
- コンテナ幅: max-width 1200px, side padding 24px (mobile 16px)

アニメーション指針
- 全体トランジション: `transition: all 400ms cubic-bezier(.22,.9,.35,1)`
- 要素フェード/スライド: `framer-motion` を標準化（既存の `FadeIn` を拡張）
- ページロード/ヒーロー: 手書き署名はSVG stroke-dash を用いた描画アニメ（遅延は0.08s刻みでスタッガー）
- カードホバー: scale(1.02) + box-shadow で軽い浮遊感

コンポーネント一覧（実装優先順）
- `Signature` — SVG stroke-draw アニメ（Hero に配置）
  - props: `size?: 'sm'|'md'|'lg'`
  - アクセシビリティ: `aria-hidden`（装飾的）、代替テキストは別途 `title` コンポーネントを用意
- `Hero` — 大見出し + `Signature` + サブテキスト
- `Header` / `Navigation` — 固定または透過ヘッダー、スクロールで背景変化
- `WorksCard` — プロジェクトカード（画像、タイトル、タグ、short description）
  - hover: elevation + reveal actions
- `Button` — Primary / Ghost / Icon variants
- `Container` — 横幅制御と左右パディング
- `Footer` — 連絡先と小さな署名リンク

SCSS トークン例
```scss
:root {
  --color-bg: #0F0F10;
  --color-surface: #121215;
  --color-text: #FFFFFF;
  --color-muted: #9CA3AF;
  --color-accent: #FFD166;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg);
  transition: transform .18s ease, box-shadow .18s ease;
}
```

アクセシビリティ
- コントラスト比を確保（主要テキストは背景と十分な比率）
- キーボード操作でのフォーカススタイルを明確に（outline or box-shadow）

アセット
- 署名SVGは `components/common/Signature/Signature.tsx` にインライン化済み。
- 画像アセットは `public/images/` に配置。

実装スニペット（モーション例）
- `FadeIn` を利用してコンテンツを画面に遅延表示、重要要素は `staggerChildren` を設定。

次の作業
- ワイヤーフレーム作成（デスクトップ／モバイル）：低解像度のレイアウト図を用意します。

---
ファイル作成: この仕様に差し替えや追加要望があれば教えてください。
