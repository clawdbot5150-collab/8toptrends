'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import TrendCard from "@/components/TrendCard";
import MagneticButton from "@/components/MagneticButton";
import AnimatedNumber from "@/components/AnimatedNumber";
import ParticlesBackground from "@/components/ParticlesBackground";

interface HomePageProps {
  posts: any[];
}

export default function HomePage({ posts }: HomePageProps) {
  const [email, setEmail] = useState("");
  const categories = ["Tech", "Fashion", "Lifestyle", "Entertainment", "Health", "Finance", "Travel", "Food"];

  return (
    <>
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-24 min-h-[80vh] flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating badges */}
          <motion.div
            className="flex justify-center gap-4 mb-8 flex-wrap"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span
              className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-primary-500/10 text-primary-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary-500/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🔥 Trending Now
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-gradient-to-r from-secondary-500/20 to-secondary-500/10 text-secondary-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-secondary-500/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ⚡ Real-Time Updates
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 text-yellow-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-500/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ✨ AI-Powered
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 font-display"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            What's <span className="gradient-text">Trending</span> Now?
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover the hottest trends in tech, fashion, lifestyle, and culture. 
            Stay ahead of the curve with{" "}
            <span className="text-primary-400 font-semibold">AI-curated content</span> delivered daily.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-8 md:gap-16 mb-12 flex-wrap"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-display">
                <AnimatedNumber value={500} suffix="+" />
              </div>
              <div className="text-gray-500 text-sm mt-2">Trending Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-display">
                <AnimatedNumber value={50} suffix="K+" />
              </div>
              <div className="text-gray-500 text-sm mt-2">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-display">
                <AnimatedNumber value={24} suffix="/7" />
              </div>
              <div className="text-gray-500 text-sm mt-2">Real-Time Updates</div>
            </div>
          </motion.div>

          {/* Email capture form */}
          <motion.div
            className="mt-12 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="glass-dark p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Get Daily Trend Alerts 📬
              </h3>
              <p className="text-gray-400 mb-6">
                Join 10,000+ trend hunters who never miss what's hot
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 px-6 py-4 bg-black/30 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-500 transition-all"
                />
                <MagneticButton
                  type="submit"
                  className="px-8 py-4 text-white rounded-2xl font-semibold text-lg whitespace-nowrap"
                >
                  Subscribe Free
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </MagneticButton>
              </form>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-8 h-8 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.section>

        {/* Featured Trends */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              Top <span className="gradient-text">8 Trends</span> This Week
            </h2>
            <p className="text-gray-400 text-lg">The hottest topics everyone's talking about</p>
          </motion.div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <TrendCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  readingTime={post.readingTime}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20 glass-dark rounded-3xl border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔥</div>
              <p className="text-gray-400 text-lg">Content loading... Check back soon for trending topics!</p>
            </motion.div>
          )}
        </section>

        {/* Mid-page ad slot */}
        <div className="ad-container">
          <div className="ad-placeholder" id="ad-mid-page">
            [Mid-Page Ad - 728x90 or 300x250]
          </div>
        </div>

        {/* Categories Section */}
        <motion.section
          className="mt-24 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-16 text-center font-display"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            Explore by <span className="gradient-text">Category</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/category/${category.toLowerCase()}`}>
                  <motion.div
                    className="glass-dark p-8 rounded-2xl text-center border border-white/10 group cursor-pointer relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/20 group-hover:to-secondary-500/20 transition-all duration-500" />
                    <h3 className="text-2xl font-bold relative z-10 font-display group-hover:gradient-text transition-all">
                      {category}
                    </h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-24 text-center glass-dark p-16 rounded-3xl border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
          
          <motion.div
            className="relative z-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Never Miss a <span className="gradient-text">Trend</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the community of trend hunters staying ahead of the curve
            </p>
            <MagneticButton className="px-10 py-5 text-white rounded-2xl font-bold text-xl">
              Get Free Trend Alerts
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </MagneticButton>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
