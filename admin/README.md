# Admin Panel - Kawan Curhat

## Akses Admin Panel

Untuk mengakses admin panel, buka URL:
```
http://localhost:5173/admin
```

## Kredensial Login (Demo)

- **Email**: admin@kawancurhat.com
- **Password**: admin123

## Fitur Admin Panel

### 1. Dashboard
- Statistik overview website
- Aktivitas terbaru
- Quick actions

### 2. Kelola Blog
- Tambah artikel blog baru
- Edit artikel yang ada
- Hapus artikel
- Kategori dan tag
- Upload gambar

### 3. Kelola Layanan
- Tambah layanan baru
- Edit deskripsi layanan
- Upload gambar layanan
- Atur urutan tampilan

### 4. Kelola Testimoni
- Tambah testimoni klien
- Edit testimoni
- Rating bintang
- Upload foto klien

### 5. Kelola Video Testimoni
- Tambah video testimoni
- Link YouTube/Vimeo
- Deskripsi video
- Informasi klien

### 6. Kelola FAQ
- Tambah pertanyaan & jawaban
- Kategori FAQ
- Edit FAQ yang ada
- Hapus FAQ

### 7. Kelola Galeri
- Upload gambar
- Kelola galeri foto
- Tambah deskripsi foto
- Hapus gambar

### 8. Pengaturan
- Konfigurasi website
- Informasi kontak (telepon, email, WhatsApp, alamat)
- Social media links (Facebook, Instagram, LinkedIn, YouTube)
- Nama dan deskripsi website

## Struktur File

```
admin/
├── AdminApp.tsx          # Main admin application
├── Login.tsx             # Login page
├── Dashboard.tsx         # Dashboard dengan sidebar
├── ContentManager.tsx    # Universal content manager
├── Settings.tsx          # Pengaturan website
├── sampleData.ts         # Sample data untuk demo
└── README.md            # Dokumentasi ini
```

## Pengembangan Lebih Lanjut

### Integrasi Backend
Untuk production, ganti localStorage dengan API backend:

```typescript
// Contoh integrasi API
const handleLogin = async (email: string, password: string) => {
  try {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('adminToken', data.token);
      return true;
    }
  } catch (error) {
    console.error('Login error:', error);
  }
  return false;
};
```

### Database Integration
Simpan konten ke database (MongoDB, PostgreSQL, dll):

```typescript
// Contoh save content
const saveContent = async (contentType: string, data: any) => {
  const token = localStorage.getItem('adminToken');
  const response = await fetch(`/api/admin/${contentType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
```

### Upload Gambar
Implementasi upload gambar ke cloud storage:

```typescript
// Contoh upload ke Cloudinary/AWS S3
const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/admin/upload', {
    method: 'POST',
    body: formData
  });
  
  const data = await response.json();
  return data.url;
};
```

## Security Best Practices

1. **Autentikasi**: Gunakan JWT atau session-based auth
2. **Authorization**: Implementasi role-based access control (RBAC)
3. **HTTPS**: Selalu gunakan HTTPS di production
4. **CSRF Protection**: Implementasi CSRF tokens
5. **Rate Limiting**: Batasi login attempts
6. **Input Validation**: Validasi semua input dari user
7. **XSS Protection**: Sanitize HTML content

## Deployment

### Build untuk Production
```bash
npm run build
```

### Environment Variables
Buat file `.env.production`:
```
VITE_API_URL=https://api.kawancurhat.com
VITE_ADMIN_PATH=/admin
```

## Support

Untuk pertanyaan atau bantuan, hubungi tim development.
