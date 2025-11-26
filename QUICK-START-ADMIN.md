# 🚀 Quick Start - Admin Panel

## Langkah Cepat Memulai

### 1️⃣ Jalankan Server
```bash
npm run dev
```

### 2️⃣ Buka Admin Panel
Klik link ini atau copy ke browser:
```
http://localhost:5173/admin
```

### 3️⃣ Login
```
Email: admin@kawancurhat.com
Password: admin123
```

### 4️⃣ Mulai Kelola Konten! 🎉

## 📋 Menu yang Tersedia

| Menu | Fungsi | Contoh Penggunaan |
|------|--------|-------------------|
| 📊 Dashboard | Overview & statistik | Lihat ringkasan aktivitas |
| 📝 Blog | Kelola artikel blog | Tambah artikel baru tentang hukum bisnis |
| 💼 Layanan | Kelola layanan | Edit deskripsi layanan konsultasi |
| 💬 Testimoni | Kelola testimoni klien | Tambah testimoni klien baru |
| 🎥 Video Testimoni | Kelola video testimoni | Embed video dari YouTube |
| ❓ FAQ | Kelola pertanyaan umum | Tambah FAQ tentang layanan |
| 🖼️ Galeri | Kelola gambar | Upload foto kantor/tim |
| ⚙️ Pengaturan | Konfigurasi website | Update info kontak |

## ⚡ Tips Cepat

### Tambah Konten Baru
1. Klik menu di sidebar (misal: Blog)
2. Klik tombol **"Tambah Baru"** (biru, pojok kanan atas)
3. Isi form yang muncul
4. Klik **"Simpan"** (hijau)

### Edit Konten
1. Klik icon **pensil** (biru) di item yang ingin diedit
2. Ubah data yang diperlukan
3. Klik **"Simpan"**

### Hapus Konten
1. Klik icon **tempat sampah** (merah) di item yang ingin dihapus
2. Konfirmasi penghapusan
3. Done! ✅

### Cari Konten
Gunakan search bar di atas daftar konten untuk mencari dengan cepat.

## 🎯 Contoh Workflow

### Menambah Artikel Blog Baru
```
1. Login ke admin panel
2. Klik menu "Blog" di sidebar
3. Klik "Tambah Baru"
4. Isi:
   - Judul: "Tips Memilih Konsultan Hukum yang Tepat"
   - Deskripsi: "Panduan lengkap memilih konsultan hukum..."
   - Konten: [Isi artikel lengkap]
   - Penulis: "Tim Kawan Curhat"
   - Kategori: "Tips & Panduan"
   - URL Gambar: "/aset/blog-image.jpg"
5. Klik "Simpan"
6. Artikel muncul di daftar! ✨
```

### Menambah Testimoni
```
1. Klik menu "Testimoni"
2. Klik "Tambah Baru"
3. Isi:
   - Nama: "Budi Santoso"
   - Jabatan: "CEO PT Maju Jaya"
   - Konten: "Pelayanan sangat profesional..."
   - Rating: 5
   - URL Gambar: "/aset/client-photo.jpg"
4. Klik "Simpan"
5. Testimoni tampil di website! ⭐
```

## 🔑 Fitur Penting

### ✅ Auto-Save Session
Login Anda tersimpan otomatis. Tidak perlu login ulang setiap kali buka admin panel.

### ✅ Konfirmasi Hapus
Sistem akan meminta konfirmasi sebelum menghapus data untuk mencegah kesalahan.

### ✅ Search & Filter
Cari konten dengan mudah menggunakan search bar.

### ✅ Responsive
Admin panel bisa diakses dari desktop, tablet, atau smartphone.

## 🎨 Navigasi Sidebar

### Desktop
- Sidebar terbuka penuh dengan label menu
- Klik icon hamburger untuk collapse/expand

### Mobile
- Sidebar otomatis collapse
- Klik hamburger untuk buka menu
- Touch-friendly buttons

## 🔐 Logout

Untuk keluar dari admin panel:
1. Scroll ke bawah sidebar
2. Klik tombol **"Keluar"** (merah)
3. Anda akan kembali ke halaman login

## 📱 Akses dari Website

Link admin tersembunyi di footer website:
1. Scroll ke paling bawah website utama
2. Cari link kecil bertuliskan "Admin"
3. Klik untuk masuk ke admin panel

## ⚠️ Catatan Penting

### Data Sementara
Saat ini data disimpan di browser (localStorage). Data akan hilang jika:
- Clear browser cache
- Ganti browser
- Ganti device

### Untuk Production
Integrasikan dengan backend dan database untuk penyimpanan permanen.

## 🆘 Troubleshooting

### Tidak Bisa Login?
- Pastikan email: `admin@kawancurhat.com`
- Pastikan password: `admin123`
- Coba refresh halaman

### Data Hilang?
- Jangan clear browser cache
- Data tersimpan di localStorage browser

### Halaman Tidak Muncul?
- Pastikan server running (`npm run dev`)
- Cek URL: `http://localhost:5173/admin`
- Coba hard refresh (Ctrl+Shift+R)

## 📚 Dokumentasi Lengkap

Untuk informasi lebih detail:
- **Panduan Lengkap**: `ADMIN-GUIDE.md`
- **Dokumentasi Teknis**: `admin/README.md`
- **Detail Implementasi**: `ADMIN-IMPLEMENTATION.md`

## 🎉 Selamat Mengelola Konten!

Jika ada pertanyaan atau butuh bantuan, hubungi tim development.

---

**Happy Managing! 🚀**
