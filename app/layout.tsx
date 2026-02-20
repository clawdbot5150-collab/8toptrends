'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>8 Top Trends - What's Trending Now</title>
        <meta name="description" content="Discover the hottest trends in tech, fashion, lifestyle, and more. Stay ahead with 8 Top Trends." />
        <meta name="keywords" content="trends, trending, top trends, viral, popular, what's hot" />
        <meta property="og:title" content="8 Top Trends - What's Trending Now" />
        <meta property="og:description" content="Discover the hottest trends in tech, fashion, lifestyle, and more." />
        <meta property="og:url" content="https://8toptrends.com" />
        <meta property="og:site_name" content="8 Top Trends" />
        <meta property="og:type" content="website" />
        
        {/* Ezoic placeholder - replace with actual script after signup */}
        {/* <script async src="//www.ezoic.net/yoursite.js"></script> */}
        
        {/* Google Analytics placeholder */}
        {/* Add GA4 tag here */}
      </head>
      <body className="antialiased">
        {/* Header */}
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/">
              <motion.div
                className="text-3xl md:text-4xl font-bold font-display cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-white">8</span>{" "}
                <span className="gradient-text">Top</span>{" "}
                <span className="text-white">Trends</span>
              </motion.div>
            </Link>
            
            <div className="flex gap-8 items-center">
              <Link href="/blog">
                <motion.div
                  className="text-gray-300 hover:text-white transition font-medium hidden md:block"
                  whileHover={{ y: -2 }}
                >
                  Blog
                </motion.div>
              </Link>
              <Link href="/categories">
                <motion.div
                  className="text-gray-300 hover:text-white transition font-medium hidden md:block"
                  whileHover={{ y: -2 }}
                >
                  Categories
                </motion.div>
              </Link>
              <Link href="/about">
                <motion.div
                  className="text-gray-300 hover:text-white transition font-medium hidden md:block"
                  whileHover={{ y: -2 }}
                >
                  About
                </motion.div>
              </Link>
              
              {/* Mobile menu button */}
              <motion.button
                className="md:hidden text-white"
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </nav>
        </motion.header>

        {/* Top banner ad slot */}
        <div className="pt-24">
          <div className="ad-container max-w-7xl mx-auto mt-4">
            <div className="ad-placeholder" id="ad-top-banner">
              [Top Banner Ad - 728x90 or 970x90]
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="min-h-screen relative">
          {children}
        </main>

        {/* Footer */}
        <motion.footer
          className="glass-dark py-16 mt-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display">
                  <span className="text-white">8</span>{" "}
                  <span className="gradient-text">Top</span>{" "}
                  <span className="text-white">Trends</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  Your daily source for what's hot, what's not, and what's next.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-gray-400 hover:text-primary-400 transition text-sm">All Trends</Link></li>
                  <li><Link href="/categories" className="text-gray-400 hover:text-primary-400 transition text-sm">Categories</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-primary-400 transition text-sm">About Us</Link></li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Popular Categories</h4>
                <ul className="space-y-2">
                  <li><Link href="/category/tech" className="text-gray-400 hover:text-primary-400 transition text-sm">Tech</Link></li>
                  <li><Link href="/category/fashion" className="text-gray-400 hover:text-primary-400 transition text-sm">Fashion</Link></li>
                  <li><Link href="/category/lifestyle" className="text-gray-400 hover:text-primary-400 transition text-sm">Lifestyle</Link></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">Get daily trend alerts in your inbox</p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                  <motion.button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    →
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  © 2026 8 Top Trends. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <Link href="/privacy" className="text-gray-500 hover:text-primary-400 transition">Privacy Policy</Link>
                  <Link href="/terms" className="text-gray-500 hover:text-primary-400 transition">Terms of Service</Link>
                  <Link href="/contact" className="text-gray-500 hover:text-primary-400 transition">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </body>
    </html>
  );
}
