# Panduan Animasi Website Lawcase

## Overview
Website ini menggunakan berbagai animasi modern dan smooth untuk meningkatkan user experience. Semua animasi dioptimalkan untuk performa dan accessibility.

## Jenis Animasi yang Digunakan

### 1. Scroll-Based Animations (Intersection Observer)
Hampir semua komponen menggunakan Intersection Observer API untuk mendeteksi kapan elemen masuk ke viewport dan memicu animasi.

**Komponen yang menggunakan:**
- Hero
- Services
- About
- Testimonials
- CaseStudies
- Team
- Blog
- WhyChooseUs
- Process
- FAQ
- CTA
- Partners
- TrustBadges
- Footer
- Newsletter
- VideoTestimonials
- ContactForm

**Cara kerja:**
```typescript
const [isVisible, setIsVisible] = useState(false);
const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.1 });

  if (ref.current) observer.observe(ref.current);
  return () => {
    if (ref.current) observer.unobserve(ref.current);
  };
}, []);
```

### 2. CSS Animations

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Slide Down
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Slide In Left/Right
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

#### Bounce In
```css
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
```

### 3. Hover Effects

#### Image Zoom
```css
.image-zoom-container {
  overflow: hidden;
}

.image-zoom {
  transition: transform 0.5s ease;
}

.image-zoom-container:hover .image-zoom {
  transform: scale(1.1);
}
```

#### Lift Effect
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

#### Scale Hover
```css
.scale-hover {
  transition: transform 0.3s ease;
}

.scale-hover:hover {
  transform: scale(1.05);
}
```

### 4. Loading Animations

#### Shimmer Effect
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.shimmer {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

#### Skeleton Loading
```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}
```

### 5. Interactive Animations

#### Button Ripple Effect
```css
.btn-ripple {
  position: relative;
  overflow: hidden;
}

.btn-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-ripple:active::after {
  width: 300px;
  height: 300px;
}
```

### 6. Stagger Animations
Untuk animasi berurutan pada list items:

```css
.stagger-item {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-item:nth-child(3) { animation-delay: 0.3s; }
```

Atau menggunakan inline style:
```tsx
<div 
  style={{ transitionDelay: `${index * 150}ms` }}
  className="transition-all duration-500"
>
  {content}
</div>
```

### 7. Parallax Effect
Digunakan di Hero section:

```typescript
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Apply to background
style={{ backgroundPositionY: `${scrollY * 0.5}px` }}
```

### 8. Animated Numbers
Counter animation untuk statistik:

```typescript
const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setDisplayValue(Math.ceil(start));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span>{displayValue}+</span>;
};
```

## Best Practices

### 1. Performance
- Gunakan `transform` dan `opacity` untuk animasi (GPU-accelerated)
- Hindari animasi pada `width`, `height`, `top`, `left` (CPU-intensive)
- Unobserve element setelah animasi triggered untuk menghemat memory

### 2. Accessibility
- Semua animasi menggunakan `prefers-reduced-motion` media query
- Durasi animasi tidak terlalu lama (max 700ms untuk entrance)
- Fokus states tetap visible

### 3. Timing
- Entrance animations: 500-700ms
- Hover effects: 200-300ms
- Stagger delay: 100-150ms per item
- Loading animations: 1-2s loop

### 4. Easing Functions
- `ease-out`: Untuk entrance animations
- `ease-in-out`: Untuk hover effects
- `ease`: Untuk general transitions

## Komponen Khusus

### LazyImage
Komponen untuk lazy loading gambar dengan animasi:
```tsx
<LazyImage 
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64 object-cover"
/>
```

Features:
- Intersection Observer untuk lazy loading
- Shimmer placeholder saat loading
- Smooth fade-in saat loaded
- Scale animation untuk entrance

### LoadingSkeleton
Komponen untuk loading state:
```tsx
<LoadingSkeleton />
```

## Tips Debugging

1. **Animasi tidak muncul:**
   - Check apakah `isVisible` state berubah
   - Pastikan `ref` terpasang dengan benar
   - Verify threshold IntersectionObserver

2. **Animasi tersendat:**
   - Reduce jumlah elemen yang dianimasi sekaligus
   - Gunakan `will-change` CSS property
   - Check browser DevTools Performance tab

3. **Animasi terlalu cepat/lambat:**
   - Adjust `duration` di CSS atau inline style
   - Modify `transitionDelay` untuk stagger effect

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Fallback tanpa animasi (graceful degradation)

## Future Improvements
- [ ] Add GSAP untuk animasi kompleks
- [ ] Implement scroll-triggered animations dengan ScrollTrigger
- [ ] Add page transition animations
- [ ] Optimize untuk mobile devices
- [ ] Add animation presets/variants
