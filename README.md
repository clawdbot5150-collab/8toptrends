# 8 Top Trends

A high-performance trending content site built with Next.js 14, optimized for display ads and affiliate marketing revenue.

## 🚀 Revenue Model (Tier 1)

### Display Ads
- **Platform:** Ezoic (no traffic requirement) → Mediavine (50k sessions/month)
- **Expected RPM:** $15-50 per 1,000 visitors
- **Placement:** Header banner, sidebar, in-content, bottom
- **Target:** $1.5k-5k/month at 100k visitors

### Affiliate Marketing
- **Amazon Associates:** 1-10% commission on trending products
- **Niche programs:** Fashion (15-20%), Tech (3-8%), Beauty (10-15%)
- **Integration:** Embedded links in articles + dedicated product sections
- **Target:** $500-3k/month at 50k visitors

### Email List Building
- Homepage capture form
- Post-article signup CTA
- Lead magnet: "Daily Trend Digest"
- **Goal:** 10k subscribers → $10k-50k/month potential

## 📊 Traffic Strategy

### SEO Content
- **Volume:** 200-500 articles targeting trending keywords
- **Keywords:** Long-tail, low competition, high search volume
- **Update frequency:** 2-5 articles/day
- **Tools:** Brave Search API for trend discovery

### Content Categories
1. Tech trends
2. Fashion trends
3. Lifestyle trends
4. Entertainment/viral content
5. Health & wellness trends
6. Finance/crypto trends
7. Travel trends
8. Food & recipes

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** Markdown + Gray Matter
- **Deployment:** Static export (Hostinger/Netlify/Vercel)
- **Analytics:** Google Analytics 4
- **Ad Management:** Ezoic → Mediavine

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run build && npm run export
```

## 📝 Content Management

### Creating Posts

Posts are stored in `content/posts/` as Markdown files with frontmatter:

```markdown
---
title: "10 Tech Trends Dominating 2026"
date: "2026-02-20"
excerpt: "Discover the hottest tech trends shaping the future..."
category: "Tech"
tags: ["technology", "ai", "trends", "2026"]
author: "Trend Team"
affiliateLinks:
  - text: "Check out this trending product"
    url: "https://amazon.com/..."
    product: "Apple Vision Pro 2"
---

Your article content here...
```

### Affiliate Link Integration

Add affiliate links in the frontmatter:

```yaml
affiliateLinks:
  - text: "Best price we found"
    url: "https://amazon.com/dp/PRODUCT_ID?tag=YOUR_TAG"
    product: "Product Name"
```

They'll automatically appear in a styled "Shop These Products" section.

## 🎯 Month 1 Goals

- **Content:** 200 SEO-optimized articles
- **Traffic:** 10k-50k visitors
- **Revenue:** $1k-3k (ads + affiliates)
- **Email list:** 1k-5k subscribers

## 📈 Scaling Plan

### Phase 1 (Month 1-2)
- Install Ezoic
- Publish 200 articles
- Amazon Associates setup
- Email capture optimization

### Phase 2 (Month 3-4)
- Upgrade to Mediavine (if traffic qualifies)
- Launch premium newsletter ($19/mo)
- Add more affiliate programs

### Phase 3 (Month 5-6)
- Dropship trending products
- Sponsored content deals
- Scale to 500+ articles

## 🔧 Deployment

### Hostinger (Static)

```bash
# Build and export
npm run build

# Upload /out/ directory to public_html via SFTP
# Point domain to directory
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_AMAZON_TAG=your-amazon-tag-20
```

## 📊 Analytics Setup

1. **Google Analytics 4:** Add tracking ID to `.env.local`
2. **Google Search Console:** Verify domain ownership
3. **Ezoic:** Sign up and add site (no traffic requirement)

## 🎨 Customization

- **Colors:** Edit `tailwind.config.ts`
- **Logo:** Replace text logo in `app/layout.tsx`
- **Ad slots:** Customize in layout and blog post template

## 💰 Monetization Checklist

- [ ] Install Ezoic ads
- [ ] Set up Amazon Associates account
- [ ] Add affiliate links to all product mentions
- [ ] Install email capture form (ConvertKit/Mailchimp)
- [ ] Set up Google Analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Create Pinterest account for content distribution
- [ ] Apply to additional affiliate networks (ShareASale, CJ)

## 📝 License

MIT - Do whatever you want with it!

---

**Built by:** Meow 🐾 (OpenClaw AI)  
**For:** Quinn Mercer / DomKink LLC  
**GitHub:** https://github.com/clawdbot5150-collab/8toptrends
