import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          What's <span className="text-primary">Trending</span> Now?
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the hottest trends in tech, fashion, lifestyle, and culture. 
          Stay ahead of the curve with our curated content.
        </p>
        
        {/* Email capture form */}
        <div className="mt-8 max-w-md mx-auto">
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email for daily trends" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Featured Trends */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Top 8 Trends This Week 🔥
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-white opacity-50">
                    {index + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span>{post.category}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mid-page ad slot */}
      <div className="ad-container">
        <div className="ad-placeholder" id="ad-mid-page">
          [Mid-Page Ad - 728x90 or 300x250]
        </div>
      </div>

      {/* Categories Preview */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore by Category
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {["Tech", "Fashion", "Lifestyle", "Entertainment", "Health", "Finance", "Travel", "Food"].map((category) => (
            <Link 
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center bg-dark text-white p-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">
          Never Miss a Trend
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Join 10,000+ trend hunters getting daily updates
        </p>
        <button className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-red-600 transition">
          Get Free Trend Alerts
        </button>
      </section>
    </div>
  );
}
