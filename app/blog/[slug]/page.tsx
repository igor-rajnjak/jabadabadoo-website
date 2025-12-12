import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Članak nije pronađen",
    };
  }

  return {
    title: `${post.title} | Jabadabadoo Rođendaonica Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <article className="py-24 md:py-32 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-red-500 font-bold mb-8 transition-colors"
          >
            ← Nazad na blog
          </Link>

          <header className="mb-12">
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
            className="blog-content text-lg leading-relaxed text-text/90"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split('\n\n')
                .map((paragraph) => {
                  if (paragraph.startsWith('#')) {
                    const level = paragraph.match(/^#+/)?.[0].length || 1;
                    const text = paragraph.replace(/^#+\s/, '');
                    const sizeClass = level === 1 ? 'text-4xl' : level === 2 ? 'text-3xl' : level === 3 ? 'text-2xl' : 'text-xl';
                    return `<h${level} class="font-bold text-text mb-4 mt-8 ${sizeClass}">${text}</h${level}>`;
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return `<ul class="list-disc list-inside mb-6 space-y-2 ml-4">${items.map(item => 
                      `<li class="text-text/90">${item.replace(/^-\s/, '').replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary font-bold">$1</strong>')}</li>`
                    ).join('')}</ul>`;
                  }
                  if (paragraph.startsWith('|')) {
                    return ''; // Skip tables
                  }
                  if (paragraph.trim() === '---') {
                    return '<hr class="my-8 border-t-2 border-secondary" />';
                  }
                  return `<p class="mb-6">${paragraph
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary font-bold">$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em>$1</em>')
                    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline font-bold">$1</a>')
                    .replace(/📞\s(\d+)/g, '<a href="tel:$1" class="text-primary hover:underline font-bold">📞 $1</a>')
                  }</p>`;
                })
                .join(''),
            }}
          />

          <div className="mt-16 pt-8 border-t-4 border-secondary">
            <Link
              href="/blog"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all hover:-translate-y-1 shadow-lg mb-8"
            >
              ← Nazad na blog
            </Link>
            <div className="bg-white p-8 rounded-3xl border-4 border-secondary shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Rezervišite Rođendan Danas!</h2>
              <p className="text-text mb-6">
                Spremni ste da napravite nezaboravan rođendan za vaše dete? Kontaktirajte nas i rezervišite termin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:066286555"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all text-center"
                >
                  📞 Pozovi 066286555
                </a>
                <Link
                  href="/#kontakt"
                  className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all text-center"
                >
                  📝 Rezerviši Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

