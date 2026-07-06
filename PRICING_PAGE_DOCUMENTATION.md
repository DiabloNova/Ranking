# تعرفه خدمات - Pricing Page Documentation

## Overview
A beautiful, interactive pricing page featuring a glassomorphic design with an auto-rotating service carousel. The page showcases 4 different services with stunning visual effects and smooth animations.

## Features Implemented

### 1. **Glassomorphic Design**
- Frosted glass effect with backdrop blur
- Modern semi-transparent cards with proper contrast
- Gradient overlays and soft shadows
- RTL (Right-to-Left) layout for Persian language support

### 2. **Service Carousel**
- **Auto-rotation**: Changes every 5 seconds
- **Manual Navigation**: Previous/Next buttons to manually cycle through services
- **Indicator Dots**: Visual indicators showing current service position
- **Interactive Indicators**: Click any dot to jump to that service
- **Auto-play Control**: Auto-play pauses on manual interaction and resumes after 3 seconds
- **Smooth Transitions**: Fade-in animations between slides

### 3. **Service Cards**
Each service card includes:
- Professional service image
- Farsi title
- Detailed description
- List of key features
- Prominent "شروع کنید" (Start Now) CTA button
- Overlay with gradient effects

### 4. **Animated Hero Section**
- Floating background blobs with smooth animations
- Multiple animation layers at different speeds
- Responsive heading and subheading
- Professional typography with optimal line heights

### 5. **Services Included**
1. **بهینه‌سازی موتور جستجو (SEO Optimization)**
   - Complete site analysis
   - Quality backlinks
   - Content optimization

2. **طراحی و بهینه‌سازی وب‌سایت (Web Design & Optimization)**
   - Better user experience
   - Fast loading speeds
   - Responsive design

3. **بازاریابی دیجیتال (Digital Marketing)**
   - Targeted advertising
   - Customer analysis
   - Sales improvement

4. **تحلیل و گزارش‌دهی (Analytics & Reporting)**
   - Accurate data
   - Monthly reports
   - Expert consultation

### 6. **SEO Optimization**
- Proper metadata tags
- Keywords targeting pricing and services
- Open Graph tags for social sharing
- Mobile-friendly viewport configuration
- Semantic HTML structure
- Schema.org structured data

### 7. **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly controls
- Adaptive typography
- Proper spacing and padding

## Component Structure

### File: `/components/service-carousel.tsx`
Main carousel component featuring:
- Service data management
- Auto-play logic with 5-second intervals
- Manual navigation controls
- Carousel indicators
- Glassomorphic card styling
- Floating animation elements

### File: `/app/pricing/page.tsx`
Page component including:
- SEO metadata
- Hero section with animated background
- ServiceCarousel component
- Additional benefits section
- Proper text direction (RTL) implementation

### Generated Assets
- `/public/service-seo.png` - SEO service illustration
- `/public/service-design.png` - Web design service illustration
- `/public/service-marketing.png` - Digital marketing service illustration
- `/public/service-analytics.png` - Analytics service illustration

## Styling & CSS Classes

### Glassomorphism Classes
- `.glass-card` - Main glassomorphic card styling
- `.glass-button` - Glassomorphic button styling
- `.glass-button-primary` - Primary CTA button with gradient

### Animations
- `@keyframes float` - Floating background elements
- `@keyframes carousel-fade-in` - Slide transition animations
- `animate-float` - Apply floating animation

### Design System Integration
Uses existing Tailwind CSS classes and custom CSS variables:
- `var(--primary)` - Primary brand color
- `var(--accent)` - Accent color
- `var(--muted)` - Muted text color
- `var(--border)` - Border colors with transparency

## Browser Support
- Modern browsers with backdrop-filter support
- Fallbacks for older browsers
- RTL text support
- Touch-optimized for mobile devices

## Performance Considerations
- Images optimized with lazy loading support
- Smooth 60fps animations using CSS transforms
- Efficient event handling for carousel
- Minimal JavaScript for maximum performance

## Navigation Integration
Added to main navbar at `/components/navbar.tsx`:
- Link: `/pricing` 
- Label: "تعرفه خدمات"
- Position: Second item in navigation menu

## Call-to-Action Flow
All "شروع کنید" buttons link to `/sign-up` for user registration and service purchase.

## Accessibility Features
- Semantic HTML5 structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support

## Future Enhancements
1. Add pricing tiers display
2. Implement service comparison chart
3. Add testimonials carousel
4. Include FAQ section
5. Add booking calendar integration
6. Email subscription form
7. Live chat support widget

## Testing Performed
✅ Page loads successfully
✅ Carousel auto-rotation works (5-second interval)
✅ Manual navigation buttons functional
✅ CTA buttons navigate to sign-up page
✅ Responsive design verified
✅ SEO metadata properly configured
✅ Glassomorphic effects display correctly
✅ Animations smooth and performant
✅ RTL layout renders properly
