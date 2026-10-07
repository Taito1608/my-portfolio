import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import "zenn-content-css";
import Container from "@/components/layout/Container/Container";
import ZennEmbed from "@/components/common/ZennEmbed/ZennEmbed";
import { getArticle, getArticles } from "@/lib/zenn";
import { formatDate } from "@/lib/formatDate";
import styles from "./page.module.scss";

// 記事の内容は1時間ごとに再取得する
export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getArticles()).find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Taito - Portfolio`,
    description: article.excerpt,
    alternates: { canonical: article.url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      images: article.ogImage ? [article.ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.ogImage ? [article.ogImage] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    // Zennにはあるが、GitHubリポジトリにない記事はZennのページへ移動する
    const summary = (await getArticles()).find((a) => a.slug === slug);
    if (summary) redirect(summary.url);
    notFound();
  }

  return (
    <article className={styles.article}>
      <Container>
        <div className={styles.inner}>
          <Link href="/#articles" className={styles.back}>
            ← Articles
          </Link>

          <header className={styles.header}>
            {article.emoji && (
              <span className={styles.emoji} aria-hidden="true">
                {article.emoji}
              </span>
            )}
            <h1 className={styles.title}>
              {article.title}
            </h1>
            <time className={styles.date} dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            {article.topics.length > 0 && (
              <ul className={styles.topics}>
                {article.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            )}
          </header>

          <div
            className={`znc ${styles.body}`}
            // zenn-markdown-html の出力はライブラリ内でサニタイズ済み
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
          <ZennEmbed />

          <footer className={styles.footer}>
            <p>この記事はZennにも投稿しています。</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zennで読む・いいねする →
            </a>
          </footer>
        </div>
      </Container>
    </article>
  );
}
