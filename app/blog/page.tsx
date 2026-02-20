import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "All Trends - 8 Top Trends",
  description: "Browse all trending articles across tech, fashion, lifestyle, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-4 text-center">
        All <span className="text-primary">Trends</span>
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our complete collection of trending topics and insights
      </p>

      {/* Sidebar Ad */}
      <div className="ad-container mb-8">
        <div className="ad-placeholder" id="ad-blog-top">
          [Blog Top Ad - 728x90]
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="md:col-span-2">
          <div className="space-y-8">
            {posts.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>No posts yet. Check back soon for trending content!</p>
              </div>
            ) : (
              posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-500">{post.readingTime}</span>
                        <span className="text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 hover:text-primary transition">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {post.author}</span>
                        <span className="text-primary font-semibold hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Sidebar Ad */}
          <div className="ad-container sticky top-24">
            <div className="ad-placeholder" id="ad-sidebar">
              [Sidebar Ad - 300x600]
            </div>
          </div>

          {/* Popular Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
            <div className="flex flex-wrap gap-2">
              {["Tech", "Fashion", "Lifestyle", "Entertainment", "Health", "Finance"].map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm transition"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
