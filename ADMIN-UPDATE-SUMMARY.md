# Update Admin Panel - Struktur Menu Baru

## Perubahan yang Dilakukan

Admin panel telah diperbarui dengan struktur menu yang lebih lengkap dan terorganisir. Setiap jenis konten disesuaikan dengan kebutuhan terbaiknya.

## Menu Admin Panel

1. **Dashboard** - Statistik dan overview konten
2. **Blog** - Kelola artikel blog (judul, kategori, gambar)
3. **Layanan** - Kelola layanan yang ditawarkan (nama, deskripsi)
4. **Testimoni** - Kelola testimoni klien (nama, perusahaan, testimoni, rating, foto)
5. **Video Testimoni** - Kelola video testimoni (nama, perusahaan, URL video, deskripsi, foto, durasi)
6. **FAQ** - Kelola pertanyaan yang sering diajukan (pertanyaan, jawaban, kategori)
7. **Galeri** - Kelola foto galeri (judul, deskripsi, gambar)
8. **Pengaturan** - Kelola informasi website, kontak, dan media sosial

## File yang Diperbarui

### 1. admin/Dashboard.tsx
- Menambahkan menu Galeri dan Pengaturan
- Mengintegrasikan komponen Settings
- Memperbarui statistik dashboard

### 2. admin/ContentManager.tsx
- Menambahkan support untuk Galeri
- Menyesuaikan field untuk setiap jenis konten sesuai kebutuhan:
  - **Blog**: Hanya judul, kategori, dan gambar
  - **Layanan**: Hanya nama dan deskripsi (tanpa gambar)
  - **Testimoni**: Nama, perusahaan, testimoni (quote), rating, foto
  - **Video Testimoni**: Nama, perusahaan, URL video, deskripsi, foto, durasi
  - **FAQ**: Pertanyaan, jawaban, kategori
  - **Galeri**: Judul, deskripsi, gambar
- Memperbaiki tampilan list dengan badge untuk kategori, role, rating, dan durasi

### 3. admin/Settings.tsx (BARU)
- Komponen baru untuk mengelola pengaturan website
- Kelola informasi website (nama, deskripsi)
- Kelola kontak (telepon, email, WhatsApp, alamat)
- Kelola media sosial (Facebook, Instagram, LinkedIn, YouTube)
- Data disimpan di localStorage

### 4. admin/sampleData.ts
- Menyesuaikan struktur data blog (hanya title, category, image)
- Menyesuaikan struktur data layanan (hanya title, description)
- Mengubah field 'content' menjadi 'quote' untuk testimoni
- Memperbarui path gambar testimoni sesuai dengan komponen
- Increment DATA_VERSION ke 3 untuk force reload

### 5. admin/README.md
- Memperbarui dokumentasi dengan menu baru
- Menambahkan penjelasan fitur Galeri dan Pengaturan

## Cara Menggunakan

### Akses Admin Panel
```
http://localhost:5173/admin
```

### Login
- Email: admin@kawancurhat.com
- Password: admin123

### Kelola Pengaturan
1. Klik menu "Pengaturan" di sidebar
2. Edit informasi website, kontak, atau media sosial
3. Klik "Simpan Perubahan"
4. Data akan tersimpan di localStorage browser

### Kelola Galeri
1. Klik menu "Galeri" di sidebar
2. Klik "Tambah Baru" untuk menambah foto
3. Isi judul, deskripsi, dan URL gambar
4. Klik "Simpan"

## Fitur Pengaturan

### Informasi Website
- Nama Website
- Deskripsi Website

### Informasi Kontak
- Nomor Telepon
- Email
- WhatsApp
- Alamat

### Media Sosial
- Facebook
- Instagram
- LinkedIn
- YouTube

## Detail Field untuk Setiap Konten

### Blog
- **Judul**: Judul artikel blog
- **Kategori**: Kategori artikel (contoh: Layanan Utama)
- **Gambar**: URL gambar artikel

### Layanan
- **Nama**: Nama layanan
- **Deskripsi**: Deskripsi lengkap layanan
- **Catatan**: Layanan tidak menggunakan gambar

### Testimoni
- **Nama**: Nama klien
- **Perusahaan/Jabatan**: Nama perusahaan atau jabatan klien
- **Testimoni**: Isi testimoni dari klien
- **Rating**: Rating 1-5 bintang
- **Foto**: URL foto klien

### Video Testimoni
- **Nama**: Nama klien
- **Perusahaan/Jabatan**: Nama perusahaan atau jabatan klien
- **URL Video**: Link YouTube atau Vimeo
- **Deskripsi**: Deskripsi singkat video
- **Foto**: URL foto thumbnail
- **Durasi**: Durasi video (contoh: 2:45)

### FAQ
- **Pertanyaan**: Pertanyaan yang sering diajukan
- **Jawaban**: Jawaban lengkap
- **Kategori**: Kategori FAQ (opsional)

### Galeri
- **Judul**: Judul foto
- **Deskripsi**: Deskripsi foto
- **Gambar**: URL gambar

## Catatan

- Semua data disimpan di localStorage browser
- Untuk production, integrasikan dengan backend API
- Sample data akan di-load otomatis jika belum ada data
- DATA_VERSION di-increment untuk force reload data baru
- Pengaturan dapat diakses dari menu sidebar
