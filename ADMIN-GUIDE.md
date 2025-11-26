# Panduan Admin Panel

## 🚀 Cara Mengakses Admin Panel

### 1. Jalankan Development Server
```bash
npm run dev
```

### 2. Buka Admin Panel
Akses melalui browser:
```
http://localhost:5173/admin
```

### 3. Login
Gunakan kredensial berikut:
- **Email**: `admin@kawancurhat.com`
- **Password**: `admin123`

## 📋 Fitur yang Tersedia

### Dashboard
- Overview statistik website
- Aktivitas terbaru
- Quick access ke semua fitur

### Kelola Konten

#### 1. Blog
- ✅ Tambah artikel baru
- ✅ Edit artikel
- ✅ Hapus artikel
- ✅ Kategori & penulis
- ✅ Upload gambar

#### 2. Layanan
- ✅ Tambah layanan baru
- ✅ Edit deskripsi layanan
- ✅ Upload gambar layanan

#### 3. Testimoni
- ✅ Tambah testimoni klien
- ✅ Rating bintang (1-5)
- ✅ Foto klien
- ✅ Jabatan/role

#### 4. Video Testimoni
- ✅ Link video YouTube/Vimeo
- ✅ Informasi klien
- ✅ Deskripsi video

#### 5. FAQ
- ✅ Pertanyaan & jawaban
- ✅ Kategori FAQ
- ✅ Edit & hapus

#### 6. Galeri
- ✅ Upload gambar
- ✅ Kelola foto

#### 7. Pengaturan
- ✅ Konfigurasi website
- ✅ Informasi kontak

## 🔍 Fitur Pencarian
Setiap halaman konten dilengkapi dengan fitur pencarian untuk memudahkan menemukan item yang ingin diedit.

## 💾 Penyimpanan Data
Saat ini data disimpan di localStorage browser (untuk demo). Untuk production, integrasikan dengan backend API dan database.

## 🔐 Keamanan
- Session management dengan localStorage
- Auto-logout saat menutup browser
- Password protection

## 📱 Responsive Design
Admin panel fully responsive dan dapat diakses dari:
- Desktop
- Tablet
- Mobile

## 🎨 User Interface
- Sidebar navigation yang collapsible
- Dark sidebar dengan highlight menu aktif
- Form editor yang user-friendly
- Konfirmasi sebelum menghapus data

## 🔄 Workflow Editing
1. Klik menu di sidebar
2. Klik tombol "Tambah Baru" atau "Edit" pada item
3. Isi form yang tersedia
4. Klik "Simpan" untuk menyimpan perubahan
5. Klik "Batal" untuk membatalkan

## 📝 Tips Penggunaan

### Upload Gambar
Untuk saat ini, masukkan URL gambar. Contoh:
- `https://example.com/image.jpg`
- `/aset/image.png` (untuk gambar lokal)

### Video Testimoni
Gunakan URL embed dari YouTube atau Vimeo:
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

### Rating
Masukkan angka 1-5 untuk rating testimoni.

## 🚧 Pengembangan Selanjutnya

### Backend Integration
Untuk production, implementasikan:
- REST API atau GraphQL
- Database (MongoDB, PostgreSQL, MySQL)
- File upload ke cloud storage (AWS S3, Cloudinary)
- JWT authentication
- Role-based access control

### Fitur Tambahan
- Rich text editor (TinyMCE, Quill)
- Drag & drop file upload
- Bulk actions
- Export/import data
- Analytics dashboard
- Email notifications
- Activity logs
- Multi-language support

## 📞 Support
Untuk bantuan lebih lanjut, hubungi tim development.
