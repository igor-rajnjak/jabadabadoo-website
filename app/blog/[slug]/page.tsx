import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { CONTACT, TRUST_SIGNALS } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BlogCTA from "@/components/BlogCTA";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Članak nije pronađen",
    };
  }

  const baseUrl = "https://rodjendaonica-novi-sad.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Jabadabadoo Rođendaonica Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: postUrl,
      siteName: "Jabadabadoo Rođendaonica",
      images: [
        {
          url: post.image ? `${baseUrl}${post.image}` : `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image ? `${baseUrl}${post.image}` : `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const baseUrl = "https://rodjendaonica-novi-sad.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${baseUrl}${post.image}` : `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-og-photo.png`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Jabadabadoo Rođendaonica",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Jabadabadoo Rođendaonica",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/jabadabadoo-rodjendaonica-za-decu-novi-sad-logo-transparent.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: "Blog - Saveti za Rođendane",
    keywords: post.keywords.join(", "),
    timeRequired: `PT${post.readTime}M`,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Početna",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <article className="py-24 md:py-32 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text/60">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-text/80">{post.title}</li>
            </ol>
          </nav>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-red-500 font-bold mb-8 transition-colors"
          >
            ← Nazad na blog
          </Link>

          <header className="mb-12">
            {post.image && (
              <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border-4 border-secondary">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}
            <div className="text-6xl mb-6">{post.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text">{post.title}</h1>
            <div className="flex items-center gap-4 text-text/60 mb-8">
              <span>{post.readTime} min čitanja</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("sr-RS", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <p className="text-xl text-text/80 leading-relaxed">{post.excerpt}</p>
          </header>

          <div
            className="blog-content text-lg leading-relaxed text-text/90 prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: (() => {
                // Helper function to escape HTML
                const escapeHtml = (text: string) => {
                  const map: { [key: string]: string } = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#039;',
                  };
                  return text.replace(/[&<>"']/g, (m) => map[m]);
                };

                // Helper function to process inline formatting
                const processInline = (text: string): string => {
                  // First escape HTML to prevent XSS
                  let processed = escapeHtml(text);
                  
                  // Process bold (**text**) - handle multiple bold sections
                  // Use a more robust regex that handles edge cases
                  processed = processed.replace(/\*\*([^*]+?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>');
                  
                  // Process italic (*text*) - but only if not part of bold
                  // Check for single asterisks that are not part of double asterisks
                  processed = processed.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em class="italic">$1</em>');
                  
                  // Process inline code (`code`)
                  processed = processed.replace(/`([^`]+?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>');
                  
                  // Process links [text](url)
                  processed = processed.replace(/\[([^\]]+?)\]\(([^)]+?)\)/g, '<a href="$2" class="text-primary hover:underline font-semibold">$1</a>');
                  
                  // Process phone numbers
                  processed = processed.replace(/📞\s*(\d+)/g, '<a href="tel:$1" class="text-primary hover:underline font-semibold">📞 $1</a>');
                  
                  return processed;
                };

                // Process line by line to handle headings and lists properly
                const lines = post.content.split('\n');
                const result: string[] = [];
                let i = 0;
                
                while (i < lines.length) {
                  const line = lines[i].trim();
                  
                  // Skip empty lines
                  if (!line) {
                    i++;
                    continue;
                  }
                  
                  // Check for heading
                  const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
                  if (headingMatch) {
                    const level = headingMatch[1].length;
                    const text = headingMatch[2];
                    const sizeClass = 
                      level === 1 ? 'text-4xl' : 
                      level === 2 ? 'text-3xl' : 
                      level === 3 ? 'text-2xl' : 
                      level === 4 ? 'text-xl' : 
                      level === 5 ? 'text-lg' :
                      'text-base';
                    const marginClass = 
                      level === 1 ? 'mb-6 mt-12' :
                      level === 2 ? 'mb-5 mt-10' :
                      level === 3 ? 'mb-4 mt-8' :
                      level === 4 ? 'mb-3 mt-6' :
                      'mb-2 mt-4';
                    
                    result.push(`<h${level} class="font-bold text-text ${marginClass} ${sizeClass}">${processInline(text)}</h${level}>`);
                    i++;
                    continue;
                  }
                  
                  // Check for lists (unordered)
                  if (line.startsWith('- ') || line.startsWith('* ')) {
                    const listItems: string[] = [];
                    while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
                      const itemText = lines[i].trim().replace(/^[-*]\s+/, '');
                      listItems.push(`<li class="mb-2">${processInline(itemText)}</li>`);
                      i++;
                    }
                    if (listItems.length > 0) {
                      result.push(`<ul class="list-disc list-inside mb-6 space-y-2 ml-4">${listItems.join('')}</ul>`);
                    }
                    continue;
                  }
                  
                  // Check for ordered lists
                  if (line.match(/^\d+\.\s/)) {
                    const listItems: string[] = [];
                    while (i < lines.length && lines[i].trim().match(/^\d+\.\s/)) {
                      const itemText = lines[i].trim().replace(/^\d+\.\s+/, '');
                      listItems.push(`<li class="mb-2">${processInline(itemText)}</li>`);
                      i++;
                    }
                    if (listItems.length > 0) {
                      result.push(`<ol class="list-decimal list-inside mb-6 space-y-2 ml-4">${listItems.join('')}</ol>`);
                    }
                    continue;
                  }
                  
                  // Check for horizontal rule
                  if (line === '---' || line.match(/^-{3,}$/)) {
                    result.push('<hr class="my-8 border-t-2 border-secondary" />');
                    i++;
                    continue;
                  }
                  
                  // Check for tables
                  if (line.startsWith('|')) {
                    const tableLines: string[] = [];
                    while (i < lines.length && lines[i].trim().startsWith('|')) {
                      tableLines.push(lines[i].trim());
                      i++;
                    }
                    if (tableLines.length > 1) {
                      const headerRow = tableLines[0].split('|').map(cell => cell.trim()).filter(Boolean);
                      const dataRows = tableLines.slice(2).map(row => 
                        row.split('|').map(cell => cell.trim()).filter(Boolean)
                      );
                      
                      let tableHtml = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border-2 border-secondary">';
                      
                      if (headerRow.length > 0) {
                        tableHtml += '<thead><tr class="bg-gradient-to-r from-primary to-pink text-white">';
                        headerRow.forEach(cell => {
                          tableHtml += `<th class="p-3 text-left font-bold border border-white">${processInline(cell)}</th>`;
                        });
                        tableHtml += '</tr></thead>';
                      }
                      
                      tableHtml += '<tbody>';
                      dataRows.forEach((row, rowIndex) => {
                        const rowClass = rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50';
                        tableHtml += `<tr class="${rowClass}">`;
                        row.forEach(cell => {
                          tableHtml += `<td class="p-3 border border-gray-300">${processInline(cell)}</td>`;
                        });
                        tableHtml += '</tr>';
                      });
                      tableHtml += '</tbody></table></div>';
                      result.push(tableHtml);
                    }
                    continue;
                  }
                  
                  // Regular paragraph - collect consecutive non-empty lines
                  const paragraphLines: string[] = [];
                  while (i < lines.length && lines[i].trim() && 
                         !lines[i].trim().match(/^#{1,6}\s+/) && 
                         !lines[i].trim().startsWith('- ') && 
                         !lines[i].trim().startsWith('* ') &&
                         !lines[i].trim().match(/^\d+\.\s/) &&
                         !lines[i].trim().startsWith('|') &&
                         lines[i].trim() !== '---' &&
                         !lines[i].trim().match(/^-{3,}$/)) {
                    paragraphLines.push(lines[i].trim());
                    i++;
                  }
                  if (paragraphLines.length > 0) {
                    result.push(`<p class="mb-6">${processInline(paragraphLines.join(' '))}</p>`);
                  }
                }
                
                return result.join('');
              })(),
            }}
          />

          <BlogCTA postTitle={post.title} />
        </div>
      </article>
      <Footer />
      <StickyCall />
      <WhatsAppWidget />
    </div>
  );
}

