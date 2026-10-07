import Link from "next/link";
import Container from "@/components/layout/Container/Container";
import { getArticles, ZENN_PROFILE_URL } from "@/lib/zenn";
import ArticleList from "./ArticleList";
import styles from "./Articles.module.scss";

// トップページに表示する記事の件数
const LATEST_COUNT = 3;

export default async function Articles() {
  const articles = await getArticles();

  return (
    <section id="articles" className={styles.articles}>
      <Container>
        <h2 className={styles.heading}>
          Articles
        </h2>

        {articles.length > 0 ? (
          <ArticleList articles={articles.slice(0, LATEST_COUNT)} />
        ) : (
          <p className={styles.empty}>
            記事を読み込めませんでした。
          </p>
        )}

        <div className={styles.more}>
          {articles.length > LATEST_COUNT && (
            <Link href="/articles">
              すべての記事を見る →
            </Link>
          )}
          <a
            href={ZENN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zennで見る →
          </a>
        </div>
      </Container>
    </section>
  );
}
