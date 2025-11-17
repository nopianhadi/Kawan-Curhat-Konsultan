# Kawan Curhat Konsultan - Website Konsultasi Hukum Bisnis

Website landing page modern dan profesional untuk konsultan hukum bisnis yang dibangun dengan React, TypeScript, dan Tailwind CSS dengan fitur UI/UX yang lengkap dan advanced.

**Tagline:** "Solusi Cerdas dan Aman untuk Konsultasi Bisnis Anda"  
**WhatsApp:** 08567886251

## ✨ Fitur Utama

### Design & UX
- 🎨 Desain modern dengan glassmorphism & gradient effects
- 📱 Fully responsive dengan mobile-first approach
- 🌊 Parallax scrolling pada hero section
- ✨ Smooth animations dengan Intersection Observer
- 🎭 Micro-interactions & hover effects
- 💫 Loading skeletons untuk better UX
- 🖼️ Lazy loading untuk optimasi gambar

### Navigation & Accessibility
- 📍 Sticky navigation dengan backdrop blur
- 📊 Scroll progress indicator
- ⬆️ Back to top button
- 📱 Mobile bottom navigation bar
- ♿ WCAG accessibility compliant
- ⌨️ Keyboard navigation support
- 🔗 Skip to content link
- 🍞 Breadcrumb navigation

### Interactive Features
- 💬 Live chat widget
- 🎠 Testimonial carousel dengan auto-play
- 🔍 Service search & filter functionality
- 📹 Video testimonials modal
- 📧 Newsletter subscription
- 📝 Contact form dengan real-time validation
- 🎯 Smooth scroll behavior
- 🏆 Trust badges section

### Performance
- ⚡ Fast loading dengan Vite
- 🖼️ Image lazy loading
- 📦 Code splitting ready
- 🎯 TypeScript untuk type safety
- 🚀 Optimized animations

## Teknologi

- **React** 19.2.0
- **TypeScript** 5.8.2
- **Vite** 6.2.0
- **Tailwind CSS** (via CDN)
- **Google Fonts** (Inter)

## 📋 Struktur Website

### Core Sections
1. **Header** - Sticky navigation dengan backdrop blur effect
2. **Hero** - Banner dengan parallax scrolling & animated stats
3. **Trust Badges** - Award & certification badges
4. **Partners** - Logo partner/klien
5. **About** - Nilai-nilai firma dengan card animations
6. **Why Choose Us** - Animated statistics & feature highlights
7. **Services** - Layanan dengan search & filter:
   - Tax Law
   - Family Law
   - Real Estate Law
   - Employment Law
   - Criminal Defense
   - Immigration Law
8. **Case Studies** - Success stories dengan before/after
9. **Team** - Tim pengacara profesional
10. **Process** - 3 tahap proses kerja
11. **Testimonials** - Carousel dengan rating & auto-play
12. **Video Testimonials** - Video player modal
13. **FAQ** - Accordion dengan smooth animations
14. **Blog** - Artikel dan berita
15. **Contact Form** - Form dengan real-time validation
16. **Newsletter** - Email subscription
17. **CTA** - Enhanced call-to-action dengan contact info
18. **Footer** - Informasi lengkap

### Interactive Components
- **Scroll Progress Bar** - Visual scroll indicator
- **Back to Top Button** - Smooth scroll to top
- **Live Chat Widget** - Customer support chat
- **Mobile Navigation** - Bottom nav untuk mobile
- **Lazy Image Component** - Optimized image loading

## Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

Server development akan berjalan di `http://localhost:3000`

## Warna Brand

- **Dark**: #1C2024
- **Light**: #FFFBF5
- **Accent**: #E59560 (Orange)
- **Text**: #2E353E

## 📁 Folder Structure

```
├── aset/                      # Gambar dan aset lokal
├── components/                # Komponen React
│   ├── Header.tsx            # Sticky navigation
│   ├── Hero.tsx              # Hero dengan parallax
│   ├── ScrollProgress.tsx    # Progress bar
│   ├── BackToTop.tsx         # Back to top button
│   ├── MobileNav.tsx         # Mobile bottom nav
│   ├── LiveChat.tsx          # Chat widget
│   ├── TrustBadges.tsx       # Trust badges
│   ├── Partners.tsx          # Partner logos
│   ├── About.tsx             # About section
│   ├── WhyChooseUs.tsx       # Stats & features
│   ├── Services.tsx          # Services dengan filter
│   ├── CaseStudies.tsx       # Success stories
│   ├── Team.tsx              # Team members
│   ├── Process.tsx           # Process steps
│   ├── Testimonials.tsx      # Carousel testimonials
│   ├── VideoTestimonials.tsx # Video testimonials
│   ├── FAQ.tsx               # FAQ accordion
│   ├── Blog.tsx              # Blog posts
│   ├── ContactForm.tsx       # Contact form
│   ├── Newsletter.tsx        # Newsletter signup
│   ├── CTA.tsx               # Call to action
│   ├── Footer.tsx            # Footer
│   ├── Breadcrumb.tsx        # Breadcrumb nav
│   ├── LazyImage.tsx         # Lazy loading images
│   ├── LoadingSkeleton.tsx   # Loading states
│   └── Icons.tsx             # Icon components
├── App.tsx                    # Main app component
├── index.tsx                  # Entry point
├── index.css                  # Global styles & animations
└── index.html                 # HTML template
```

## 🎨 Customization

### Warna Brand
Edit konfigurasi Tailwind di `index.html`:
- **brand-dark**: #1C2024 (Dark backgrounds)
- **brand-light**: #FFFBF5 (Light backgrounds)
- **brand-accent**: #C19D60 (Gold accent)
- **brand-text**: #2E353E (Text color)

### Konten
Edit data di masing-masing komponen:
- Services: `components/Services.tsx`
- Testimonials: `components/Testimonials.tsx`
- FAQ: `components/FAQ.tsx`
- Team: `components/Team.tsx`
- Blog: `components/Blog.tsx`

### Gambar
Ganti gambar di folder `aset/` dengan format yang sama

### Font
Ganti Google Fonts di `index.html` (default: Inter)

## 🚀 Performance Tips

1. **Images**: Gunakan format WebP untuk gambar
2. **Lazy Loading**: Sudah diimplementasikan untuk gambar
3. **Code Splitting**: Pertimbangkan lazy load komponen besar
4. **Caching**: Setup service worker untuk PWA
5. **CDN**: Host aset di CDN untuk loading lebih cepat

## 🎯 Best Practices Implemented

- ✅ Semantic HTML
- ✅ ARIA labels untuk accessibility
- ✅ Focus states untuk keyboard navigation
- ✅ Responsive images
- ✅ Optimized animations (GPU accelerated)
- ✅ Error boundaries ready
- ✅ TypeScript strict mode
- ✅ Component composition
- ✅ Custom hooks untuk reusability

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

© 2024 Kawan Curhat Konsultan - All Rights Reserved
