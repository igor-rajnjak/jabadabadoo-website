import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rodjendaonica-novi-sad.com";
  
  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}

