import type { Metadata } from "next";
import Container from "@/components/layout/Container/Container";
import ArticleList from "@/components/sections/Articles/ArticleList";
import { getArticles, ZENN_PROFILE_URL } from "@/lib/zenn";
import styles from "./page.module.scss";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles | Taito - Portfolio",
  description: "Zennに投稿した技術記事の一覧です。",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <section className={styles.articles}>
      <Container>
        <h1 className={styles.heading}>
          Articles
        </h1>

        {articles.length > 0 ? (
          <ArticleList articles={articles} />
        ) : (
          <p className={styles.empty}>
            記事を読み込めませんでした。
          </p>
        )}

        <p className={styles.more}>
          <a
            href={ZENN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zennで見る →
          </a>
        </p>
      </Container>
    </section>
  );
}
