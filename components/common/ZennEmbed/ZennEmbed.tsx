"use client";

import { useEffect } from "react";

const EMBED_ORIGIN = "https://embed.zenn.studio";

type EmbedMessage = {
  type?: string;
  data?: { id?: string; height?: number };
};

// Zennのリンクカードなどの埋め込み（iframe）は、親ページとメッセージをやり取りして表示される
// - iframe から "ready" が届いたら、表示するURL（data-content）を "rendering" で返す
// - iframe から "resize" が届いたら、iframe の高さを合わせる
export default function ZennEmbed() {
  useEffect(() => {
    // 数式などZenn独自の要素を表示するためのスクリプト
    import("zenn-embed-elements");

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== EMBED_ORIGIN || typeof event.data !== "string") return;

      let message: EmbedMessage;
      try {
        message = JSON.parse(event.data);
      } catch {
        return;
      }

      const id = message.data?.id;
      if (!id) return;
      const iframe = document.getElementById(id);
      if (!(iframe instanceof HTMLIFrameElement)) return;

      if (message.type === "ready") {
        const theme = document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
        iframe.contentWindow?.postMessage(
          JSON.stringify({
            type: "rendering",
            data: { id, src: iframe.dataset.content, theme },
          }),
          EMBED_ORIGIN,
        );
      }

      if (message.type === "resize" && typeof message.data?.height === "number") {
        iframe.style.height = `${message.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
