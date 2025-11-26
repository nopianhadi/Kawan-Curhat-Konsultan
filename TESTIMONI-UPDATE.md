# Update Testimoni - Gambar dan Video Baru

## Perubahan yang Dilakukan

Testimoni dan video testimoni telah diperbarui menggunakan gambar dan video asli dari klien.

## Gambar Testimoni Baru

### 1. ASG
- **File**: `/aset/Folder Baru/ASG.jpg`
- **Nama**: ASG
- **Role**: Klien Kawan Curhat
- **Digunakan di**: Testimoni & Video Testimoni

### 2. KH Yusuf Mansur
- **File**: `/aset/Folder Baru/KH Yusuf Mansur.jpg`
- **Nama**: KH Yusuf Mansur
- **Role**: Tokoh Nasional
- **Digunakan di**: Testimoni & Video Testimoni

## Video Testimoni Baru

### 1. Video ASG
- **File**: `/aset/Folder Baru/Video WhatsApp 2025-11-24 pukul 12.22.14_5784c61c.mp4`
- **Durasi**: 1:30
- **Deskripsi**: Testimoni Video - Pengalaman Konsultasi Hukum Bisnis

### 2. Video KH Yusuf Mansur
- **File**: `/aset/Folder Baru/Video WhatsApp 2025-11-24 pukul 12.22.28_cbdf5059.mp4`
- **Durasi**: 1:45
- **Deskripsi**: Testimoni Video - Kepercayaan dan Profesionalisme

## File yang Diperbarui

1. **admin/sampleData.ts**
   - Update `sampleTestimonials` dengan gambar ASG dan KH Yusuf Mansur
   - Update `sampleVideoTestimonials` dengan video lokal
   - Increment DATA_VERSION ke 4

2. **components/Testimonials.tsx**
   - Update array `testimonials` dengan gambar baru
   - Menampilkan ASG dan KH Yusuf Mansur di posisi pertama dan kedua

## Struktur Data

### Testimoni
```typescript
{
  id: 'asg',
  name: 'ASG',
  role: 'Klien Kawan Curhat',
  quote: 'Konsultasi yang sangat membantu!...',
  rating: 5,
  image: '/aset/Folder Baru/ASG.jpg'
}
```

### Video Testimoni
```typescript
{
  id: '1',
  name: 'ASG',
  role: 'Klien Kawan Curhat',
  videoUrl: '/aset/Folder Baru/Video WhatsApp 2025-11-24 pukul 12.22.14_5784c61c.mp4',
  description: 'Testimoni Video - Pengalaman Konsultasi Hukum Bisnis',
  image: '/aset/Folder Baru/ASG.jpg',
  duration: '1:30'
}
```

## Catatan

- Video menggunakan file lokal (MP4) bukan YouTube embed
- Gambar testimoni menggunakan foto asli klien
- Data version di-increment untuk force reload
- Testimoni lainnya tetap menggunakan gambar placeholder
- Admin panel dapat mengelola testimoni dan video testimoni dengan mudah

## Testing

1. Buka homepage dan scroll ke section Testimoni
2. Verifikasi gambar ASG dan KH Yusuf Mansur muncul dengan benar
3. Buka section Video Testimoni (jika ada)
4. Verifikasi video dapat diputar dengan baik
5. Test di admin panel untuk edit testimoni
