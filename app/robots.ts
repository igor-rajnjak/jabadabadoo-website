import { MetadataRoute } from "next";

// AI crawlers: user-agent tokens from official docs (OpenAI, Perplexity, Anthropic, Google, Apple).
// Full list and sources: docs/24_AI_SEARCH_OPTIMIZATION_AUDIT.md §5 and §6.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://rodjendaonica-novi-sad.com/sitemap.xml",
  };
}

