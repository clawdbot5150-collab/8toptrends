import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - 8 Top Trends`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Top Ad */}
      <div className="ad-container mb-8">
        <div className="ad-placeholder" id="ad-post-top">
          [Post Top Ad - 728x90]
        </div>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
              {post.category}
            </span>
            <span className="text-gray-500">{post.readingTime}</span>
            <span className="text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>By <strong>{post.author}</strong></span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Mid-content Ad */}
        <div className="ad-container my-12">
          <div className="ad-placeholder" id="ad-post-mid">
            [Mid-Post Ad - 728x90 or 300x250]
          </div>
        </div>

        {/* Affiliate Links Section */}
        {post.affiliateLinks && post.affiliateLinks.length > 0 && (
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">🛍️ Shop These Trending Products</h3>
            <p className="text-sm text-gray-600 mb-6">
              As an Amazon Associate, we earn from qualifying purchases. 
              These are our top picks mentioned in this article:
            </p>
            <div className="space-y-4">
              {post.affiliateLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block bg-white p-4 rounded-lg hover:shadow-lg transition border-2 border-transparent hover:border-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{link.product}</h4>
                      <p className="text-gray-600 text-sm">{link.text}</p>
                    </div>
                    <span className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-red-600 transition">
                      Check Price →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-dark text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Never Miss a Trend</h3>
          <p className="mb-6 opacity-90">Get the latest trending topics delivered to your inbox</p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </article>

      {/* Bottom Ad */}
      <div className="ad-container mt-12">
        <div className="ad-placeholder" id="ad-post-bottom">
          [Post Bottom Ad - 728x90]
        </div>
      </div>
    </div>
  );
}
