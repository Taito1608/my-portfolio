// Zennのユーザー名
export const ZENN_USERNAME = "taito0816";
export const ZENN_PROFILE_URL = `https://zenn.dev/${ZENN_USERNAME}`;

// 記事の取得結果をキャッシュする秒数（新しい記事は最大1時間で反映される）
const REVALIDATE_SECONDS = 3600;

export type ArticleSummary = {
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  ogImage?: string;
};

export type Article = ArticleSummary & {
  emoji?: string;
  topics: string[];
  html: string;
};

const unwrapCdata = (value: string) =>
  value.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();

const pickTag = (xml: string, tag: string) => {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? unwrapCdata(match[1]) : "";
};

// 記事一覧は、公開済みの記事だけが載るZenn公式のRSSフィードから取得する
export async function getArticles(): Promise<ArticleSummary[]> {
  try {
    const res = await fetch(`${ZENN_PROFILE_URL}/feed`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    return items.map((item) => {
      const url = pickTag(item, "link");
      return {
        slug: url.split("/").pop() ?? "",
        title: pickTag(item, "title"),
        excerpt: pickTag(item, "description")
          .replace(/\s+/g, " ")
          .slice(0, 120),
        url,
        publishedAt: new Date(pickTag(item, "pubDate")).toISOString(),
        ogImage: item.match(/<enclosure url="([^"]+)"/)?.[1],
      };
    });
  } catch {
    return [];
  }
}

type ZennArticleResponse = {
  article?: {
    emoji?: string;
    body_html?: string;
    topics?: { display_name: string }[];
  };
};

// 記事本文は、Zennが表示用に変換したHTMLをZennのAPIから取得する
// （記事を管理しているGitHubリポジトリは非公開のため、そこからは取得しない）
// 取得できなかった場合はnullを返し、記事ページはZennのページへ移動する
export async function getArticle(slug: string): Promise<Article | null> {
  if (!/^[a-z0-9_-]+$/.test(slug)) return null;

  const summary = (await getArticles()).find((a) => a.slug === slug);
  if (!summary) return null;

  try {
    const res = await fetch(`https://zenn.dev/api/articles/${slug}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const { article } = (await res.json()) as ZennArticleResponse;
    if (!article?.body_html) return null;

    return {
      ...summary,
      emoji: article.emoji,
      topics: (article.topics ?? []).map((topic) => topic.display_name),
      html: article.body_html,
    };
  } catch {
    return null;
  }
}
