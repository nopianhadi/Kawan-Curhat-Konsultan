# Lawcase - Law Firm Website

Website modern dan profesional untuk firma hukum dengan fitur lengkap dan desain yang menarik.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Struktur Proyek

```
lawcase/
├── components/          # Komponen React
│   ├── Hero.tsx        # Banner utama
│   ├── Services.tsx    # Layanan
│   ├── Team.tsx        # Tim pengacara
│   ├── Testimonials.tsx # Testimoni
│   └── ...
├── aset/               # Gambar dan asset
├── App.tsx             # Aplikasi utama (tanpa detail pages)
├── AppWithDetails.tsx  # Aplikasi dengan detail pages
└── index.tsx           # Entry point
```

## 🎯 Fitur Utama

### Landing Page
- ✅ Hero Section dengan parallax effect
- ✅ Trust Badges & Partner Logos
- ✅ About Section dengan animasi
- ✅ Services Grid dengan kategori
- ✅ Case Studies showcase
- ✅ Team Members dengan social links
- ✅ Process Timeline
- ✅ Testimonials Carousel
- ✅ Video Testimonials
- ✅ FAQ Accordion
- ✅ Blog Grid
- ✅ Contact Form dengan validasi
- ✅ Newsletter Subscription
- ✅ CTA Section
- ✅ Footer dengan links

### UI/UX Features
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Smooth Scroll & Animations
- ✅ Loading Skeletons
- ✅ Lazy Loading Images
- ✅ Back to Top Button
- ✅ Scroll Progress Bar
- ✅ Live Chat Widget
- ✅ Mobile Navigation
- ✅ Accessibility (ARIA labels, keyboard navigation)

### Detail Pages (AppWithDetails.tsx)
- ✅ Team Member Detail
- ✅ Blog Post Detail
- ✅ Service Detail
- ✅ Case Study Detail
- ✅ Testimonial Detail

## 📝 Cara Menggunakan

### Menggunakan Landing Page Biasa
Edit `index.tsx` dan import `App`:
```tsx
import App from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

### Menggunakan dengan Detail Pages
Edit `index.tsx` dan import `AppWithDetails`:
```tsx
import AppWithDetails from './AppWithDetails';
ReactDOM.createRoot(document.getElementById('root')!).render(<AppWithDetails />);
```

## 🎨 Customization

### Mengubah Warna Brand
Edit `index.css`:
```css
:root {
  --brand-dark: #1a1a2e;
  --brand-accent: #d4af37;
  --brand-text: #2c3e50;
  --brand-light: #f8f9fa;
}
```

### Menambah/Edit Konten
Setiap komponen memiliki data array di bagian atas file yang bisa diubah:
- `Services.tsx` - Edit array `services`
- `Team.tsx` - Edit array `teamMembers`
- `Testimonials.tsx` - Edit array `testimonials`
- dll.

## 📦 Dependencies

- React 18
- TypeScript
- Vite
- Tailwind CSS (via inline styles)

## 🖼️ Asset Management

Semua gambar ada di folder `/aset/`. Proyek sudah dioptimasi dengan:
- ✅ Hanya gambar yang digunakan (24 gambar tidak terpakai sudah dihapus)
- ✅ Lazy loading untuk performa
- ✅ Responsive images

## 📊 Statistik Proyek

- **Total Komponen**: 30+
- **Total Sections**: 17
- **Total Detail Pages**: 5
- **Gambar Digunakan**: 23 files
- **Ukuran Folder Aset**: ~3-5 MB (setelah cleanup)

## 🔧 Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

Template ini bebas digunakan untuk proyek komersial maupun personal.

## 🤝 Support

Untuk pertanyaan atau bantuan, silakan buka issue di repository ini.
