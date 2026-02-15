import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { VS_COMPETITORS } from "@/lib/vsCompetitors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rodjendaonica-novi-sad.com";
  
  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const najboljaRodjendaonicaPages = VS_COMPETITORS.map((c) => ({
    url: `${baseUrl}/najbolja-rodjendaonica/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/igraonica`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lokacija`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/najbolja-rodjendaonica`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogPosts,
    ...najboljaRodjendaonicaPages,
  ];
}

