import markdownToHtml from "zenn-markdown-html";

// Zennのユーザー名と、記事のMarkdownを管理しているGitHubリポジトリ
export const ZENN_USERNAME = "taito0816";
export const ZENN_PROFILE_URL = `https://zenn.dev/${ZENN_USERNAME}`;
const CONTENT_REPO_RAW =
  "https://raw.githubusercontent.com/Taito1608/zenn-content/main";

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

// Zennのfront matter（--- で囲まれた部分）を読み取る
function parseFrontMatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  const data: Record<string, string> = {};
  if (!match) return { data, body: markdown };

  for (const line of match[1].split("\n")) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }
  return { data, body: markdown.slice(match[0].length) };
}

const parseTopics = (value = "") =>
  value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((topic) => topic.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);

// 記事本文は、GitHubリポジトリのMarkdownを取得してZenn公式のライブラリでHTMLに変換する
// Zennのエディタで直接書いた記事など、リポジトリにない記事はnullを返す
export async function getArticle(slug: string): Promise<Article | null> {
  if (!/^[a-z0-9_-]+$/.test(slug)) return null;

  const summary = (await getArticles()).find((a) => a.slug === slug);
  if (!summary) return null;

  try {
    const res = await fetch(`${CONTENT_REPO_RAW}/articles/${slug}.md`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const { data, body } = parseFrontMatter(await res.text());

    // 記事内の画像（/images/...）はGitHubリポジトリの画像を参照する
    const markdown = body.replace(/\]\(\/images\//g, `](${CONTENT_REPO_RAW}/images/`);
    const html = await markdownToHtml(markdown, {
      embedOrigin: "https://embed.zenn.studio",
    });

    return {
      ...summary,
      emoji: data.emoji,
      topics: parseTopics(data.topics),
      html,
    };
  } catch {
    return null;
  }
}
