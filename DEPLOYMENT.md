# 🚀 Deployment Guide - Kawan Curhat Konsultan

## Netlify Deployment

### Automatic Deployment
Setiap push ke branch `main` akan otomatis trigger deployment baru di Netlify.

### Manual Deployment
Jika perlu deploy manual:

1. Build project:
```bash
npm run build
```

2. Deploy folder `dist` ke Netlify

### Setelah Deployment Baru

Setelah deployment baru dengan perubahan gambar:

1. **Otomatis**: Website akan otomatis clear cache pengunjung saat mereka refresh halaman
2. **Manual**: Pengunjung bisa visit `/clear-cache.html` untuk clear cache secara manual

## 🖼️ Image Management

### Lokasi Gambar
- Source: `public/aset/`
- Build output: `dist/aset/`

### Aturan Penamaan File
- ❌ JANGAN gunakan spasi dalam nama file: `image (1).jpg`
- ✅ GUNAKAN dash atau underscore: `image-1.jpg` atau `image_1.jpg`

### Menambah Gambar Baru

1. Tambahkan gambar ke folder `public/aset/`
2. Update path di component atau `admin/sampleData.ts`
3. Build dan deploy

## 🔧 Troubleshooting

### Gambar Tidak Muncul di Netlify

1. Pastikan gambar ada di folder `public/aset/`
2. Check nama file tidak ada spasi
3. Rebuild project: `npm run build`
4. Check folder `dist/aset/` ada gambarnya
5. Push ke GitHub untuk trigger deployment baru
6. Clear browser cache atau visit `/clear-cache.html`

### Cache Issues

Jika pengunjung masih lihat gambar lama:
- Website akan otomatis clear cache saat data version berubah
- Atau arahkan ke: `https://kawancurhatkonultan.netlify.app/clear-cache.html`

## 📝 Data Version System

File `admin/sampleData.ts` memiliki `DATA_VERSION` constant:
```typescript
export const DATA_VERSION = 2;
```

Increment version ini setiap kali ada perubahan struktur data atau path gambar untuk force clear cache pengunjung.

## 🌐 Live URLs

- Production: https://kawancurhatkonultan.netlify.app/
- Cache Clear: https://kawancurhatkonultan.netlify.app/clear-cache.html
- GitHub Repo: https://github.com/nopianhadi/Kawan-Curhat-Konsultan

## ✅ Checklist Deployment

- [ ] Build berhasil tanpa error
- [ ] Semua gambar ada di `dist/aset/`
- [ ] Tidak ada nama file dengan spasi
- [ ] Test di local: `npm run build && npm run preview`
- [ ] Push ke GitHub
- [ ] Tunggu Netlify deployment selesai
- [ ] Test website di production URL
- [ ] Clear cache jika perlu
