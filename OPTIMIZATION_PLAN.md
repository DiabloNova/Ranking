# Website Optimization Plan & Analysis

## Current Analysis

The website has been analyzed for Performance, SEO, and Accessibility. Key findings include:
- **Performance:** FCP was hindered by lack of font preloading and unoptimized images. Duplicate `metadataBase` was present in the layout.
- **SEO:** Missing OG images (pointing to non-existent assets), lack of structured data for sub-pages (Breadcrumbs), and server-side analysis in the tool was broken due to browser-only API usage.
- **Accessibility:** Low contrast on muted text and missing `aria-label` on interactive elements.

## Implemented Improvements

### 1. Performance
- ✅ **Image Optimization:** Enabled Next.js built-in image optimization in `next.config.mjs`.
- ✅ **Font Preloading:** Added `<link rel="preload">` for the main Peyda font in `RootLayout`.
- ✅ **Cleanup:** Removed duplicate metadata entries and redundant DNS prefetches.

### 2. SEO & Meta Tags
- ✅ **Fixed Analyzer:** Switched from `DOMParser` to `jsdom` in server actions, fixing the SEO analysis tool.
- ✅ **Meta Tags:** Updated all pages to point to a valid OG image (`logo.webp`) and ensured proper metadata inheritance.
- ✅ **Structured Data:** Added `BreadcrumbList` schema to all main pages (About, Contact, Analyzer) and expanded the `Organization` schema.

### 3. Accessibility & UI
- ✅ **Contrast:** Increased contrast for `--muted` text in both light and dark themes to meet WCAG AA standards.
- ✅ **ARIA Labels:** Added descriptive labels to buttons and links for screen readers.

## Future Recommendations

1. **Content Strategy:** Regularly update the site with SEO-optimized blog posts focusing on the Iranian market.
2. **Backlinks:** Focus on acquiring high-quality backlinks from `.ir` domains to improve local ranking.
3. **Core Web Vitals:** Continuously monitor LCP and CLS as more dynamic content is added.
4. **PWA:** Fully implement the service worker for offline capabilities and better mobile performance.
