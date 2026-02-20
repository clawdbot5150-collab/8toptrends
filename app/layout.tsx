import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "8 Top Trends - What's Trending Now",
  description: "Discover the hottest trends in tech, fashion, lifestyle, and more. Stay ahead with 8 Top Trends.",
  keywords: "trends, trending, top trends, viral, popular, what's hot",
  openGraph: {
    title: "8 Top Trends - What's Trending Now",
    description: "Discover the hottest trends in tech, fashion, lifestyle, and more.",
    url: "https://8toptrends.com",
    siteName: "8 Top Trends",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ezoic placeholder - replace with actual script after signup */}
        {/* <script async src="//www.ezoic.net/yoursite.js"></script> */}
        
        {/* Google Analytics placeholder */}
        {/* Add GA4 tag here */}
      </head>
      <body className="antialiased">
        <header className="bg-dark text-white py-6 sticky top-0 z-50 shadow-lg">
          <nav className="container mx-auto px-4 flex justify-between items-center">
            <a href="/" className="text-3xl font-bold">
              8 <span className="text-primary">Top</span> Trends
            </a>
            <div className="flex gap-6">
              <a href="/blog" className="hover:text-primary transition">Blog</a>
              <a href="/categories" className="hover:text-primary transition">Categories</a>
              <a href="/about" className="hover:text-primary transition">About</a>
            </div>
          </nav>
        </header>

        {/* Top banner ad slot */}
        <div className="ad-container max-w-7xl mx-auto mt-4">
          <div className="ad-placeholder" id="ad-top-banner">
            [Top Banner Ad - 728x90 or 970x90]
          </div>
        </div>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-dark text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4">© 2026 8 Top Trends. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary">Terms of Service</a>
              <a href="/contact" className="hover:text-primary">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
