# Panduan Detail Pages

## 📖 Overview

Detail pages memungkinkan pengguna melihat informasi lengkap tentang:
- Team Members
- Blog Posts
- Services
- Case Studies
- Testimonials

## 🚀 Cara Mengaktifkan

Edit `index.tsx`:
```tsx
import AppWithDetails from './AppWithDetails';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithDetails />
  </React.StrictMode>
);
```

## 📁 Struktur Detail Pages

### 1. TeamDetail.tsx
Menampilkan profil lengkap anggota tim:
- Foto profil
- Nama & posisi
- Biografi lengkap
- Pendidikan
- Keahlian
- Pengalaman
- Penghargaan
- Informasi kontak
- Social media links

### 2. BlogDetail.tsx
Menampilkan artikel blog lengkap:
- Featured image
- Judul & kategori
- Author & tanggal
- Konten artikel
- Related posts
- Share buttons

### 3. ServiceDetail.tsx
Menampilkan detail layanan:
- Service image
- Deskripsi lengkap
- Fitur layanan
- Proses kerja
- FAQ khusus layanan
- CTA untuk konsultasi

### 4. CaseStudyDetail.tsx
Menampilkan studi kasus lengkap:
- Case image
- Client & kategori
- Challenge
- Solution
- Results
- Testimonial client
- Related cases

### 5. TestimonialDetail.tsx
Menampilkan testimoni lengkap:
- Client photo
- Nama, posisi, perusahaan
- Rating
- Quote lengkap
- Case details
- Timeline
- Results achieved

## 🔧 Cara Menambah Data

### Contoh: Menambah Team Member

Edit `components/TeamDetail.tsx`:

```tsx
const teamMembers = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Senior Partner',
    imgSrc: '/aset/your-image.png',
    bio: 'Deskripsi lengkap...',
    education: [
      'S.H., Universitas Indonesia, 2005',
      'LL.M., Harvard Law School, 2008'
    ],
    expertise: [
      'Hukum Korporat',
      'Merger & Akuisisi'
    ],
    experience: [
      '15+ tahun pengalaman',
      '100+ kasus sukses'
    ],
    awards: [
      'Best Lawyer 2023',
      'Top 10 Corporate Lawyers'
    ],
    contact: {
      email: 'john@lawcase.com',
      phone: '+62 812 3456 7890'
    },
    socials: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  // ... member lainnya
];
```

### Contoh: Menambah Blog Post

Edit `components/BlogDetail.tsx`:

```tsx
const blogPosts = [
  {
    id: 'slug-artikel',
    category: 'Bisnis',
    title: 'Judul Artikel',
    imgSrc: '/aset/blog-image.jpg',
    excerpt: 'Ringkasan singkat...',
    author: 'Jessica Miller',
    date: '15 November 2025',
    readTime: '5 menit',
    content: [
      'Paragraf pertama...',
      'Paragraf kedua...',
      // ... paragraf lainnya
    ],
    tags: ['Bisnis', 'Hukum', 'Tips']
  },
  // ... post lainnya
];
```

## 🎨 Customization

### Mengubah Layout
Setiap detail page memiliki struktur yang bisa diubah:

```tsx
// Contoh struktur TeamDetail
<div className="container">
  <Breadcrumb />
  <div className="grid md:grid-cols-3">
    <div className="md:col-span-2">
      {/* Konten utama */}
    </div>
    <div>
      {/* Sidebar */}
    </div>
  </div>
</div>
```

### Menambah Section Baru
Tambahkan section di dalam komponen:

```tsx
{/* Section Baru */}
<div className="bg-white rounded-xl p-8 shadow-lg mb-8">
  <h3 className="text-2xl font-bold mb-4">Judul Section</h3>
  <p>Konten section...</p>
</div>
```

## 🔗 Navigation

### Dari List ke Detail
Tambahkan onClick handler:

```tsx
// Di Team.tsx
<button onClick={() => navigateToTeamDetail(member.id)}>
  Lihat Profil
</button>
```

### Dari Detail ke Home
Gunakan tombol close:

```tsx
<button onClick={onClose}>
  Kembali ke Home
</button>
```

## 📱 Responsive Design

Semua detail pages sudah responsive:
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns dengan sidebar

## ♿ Accessibility

Detail pages sudah include:
- Breadcrumb navigation
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management

## 🎯 Best Practices

1. **ID Unik**: Gunakan slug yang SEO-friendly
2. **Images**: Optimasi ukuran gambar
3. **Content**: Tulis konten yang informatif
4. **Loading**: Tambahkan loading state
5. **Error Handling**: Handle data tidak ditemukan

## 📊 Data Structure Example

```json
{
  "id": "unique-slug",
  "title": "Judul",
  "category": "Kategori",
  "imgSrc": "/aset/image.jpg",
  "description": "Deskripsi singkat",
  "content": ["Paragraf 1", "Paragraf 2"],
  "metadata": {
    "author": "Nama Author",
    "date": "DD MMM YYYY",
    "tags": ["tag1", "tag2"]
  }
}
```

## 🚀 Production Tips

1. Hapus demo buttons di `AppWithDetails.tsx`
2. Ganti dengan routing library (React Router)
3. Fetch data dari API/CMS
4. Tambahkan SEO meta tags
5. Implement analytics tracking
