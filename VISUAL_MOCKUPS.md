# ビジュアルモックアップ — キー画面（モバイルファースト）

目的
- 主要画面のビジュアル指示書。開発者が見た目・アニメーション・レスポンシブ挙動を再現できるようにする。

共通トークン
- カラー: `--color-bg`, `--color-surface`, `--color-text`, `--color-muted`, `--color-accent`
- フォント: `Geist`（見出し大きめ、モノは `Geist_Mono`）
- コンテナ: max-width 1200px, mobile padding 16px

1) Hero（モバイル）
- 構成順: `Signature`（中央）→ `h1` → `p` → CTA
- 背景: `--color-bg`、テキストは `--color-text`
- spacing: 上下 padding 48px
- h1: 34px、line-height 1.05、weight 700
- CTA: primary ボタン（`--color-accent`）
- アニメ: `Signature` stroke-draw (1.6s)。完了から 0.18s 後に `h1`、さらに 0.12s 後に `p` と CTA をフェードイン。

2) Works（モバイル）
- 単一カラムカードリスト
- Card: image 16:9, title, tags (chip), summary
- card padding: 16px, border-radius 12px, background `--color-surface`
- hover/active: transform: translateY(-6px) scale(1.02), box-shadow: 0 10px 30px rgba(0,0,0,0.4)
- アニメ: 画面に入るごとに staggered fade+up (framer-motion: y: 12 -> 0, opacity 0 -> 1)

3) Works（Desktop）
- 3カラムグリッド (gap 24px)
- Hero 隣に大きな署名SVGを表示（右寄せ）

4) About
- レスポンシブで段組み調整。テキスト左、サイドにスキルチップのグリッド。

5) Contact
- シンプルフォーム。入力はボーダーではなく背景変化で差分を出す（アクセントカラーの薄い背景）。

アニメーション詳細（実装向け）
- 共通 variant:
  - container: { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  - item: { hidden: { opacity:0, y: 12 }, show: { opacity:1, y:0, transition: { duration: 0.48, ease: [0.22,0.9,0.35,1] } } }
- ボタン hover: { scale: 1.02 } (transition 180ms)

アセット配置
- 署名SVG: `components/common/Signature/Signature.tsx`（インライン）
- サムネイル: `public/images/works/<slug>.jpg`

実装メモ
- 既存の `FadeIn` は opacity のみ。`framer-motion` を用いて `y` を追加した `FadeInMotion` を作ると統一しやすい。
- Hero の署名はロード時に一度だけ描画する（`useEffect` + data 属性ですでに実装済み）。

出力
- 次はこのモックを元に `WorksCard` と `FadeInMotion` の実装を行います。
