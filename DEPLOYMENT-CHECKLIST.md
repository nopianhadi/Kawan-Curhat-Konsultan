# Checklist Deployment Netlify

## ✅ Yang Sudah Dilakukan

1. ✅ Push code ke GitHub repository
2. ✅ Trigger deployment dengan empty commit
3. ✅ Update cache headers di netlify.toml

## 🔍 Cara Cek Status Deployment

### 1. Cek di Netlify Dashboard
1. Buka https://app.netlify.com
2. Login dengan akun Anda
3. Pilih site "Kawan Curhat Konsultan"
4. Lihat tab **Deploys** untuk status deployment terbaru
5. Pastikan status **Published** (hijau)

### 2. Cek Build Log
Jika deployment gagal:
- Klik pada deployment yang failed
- Baca error message di build log
- Biasanya error terkait:
  - Missing dependencies
  - Build command error
  - Environment variables

## 🚀 Cara Manual Trigger Deployment

### Opsi A: Dari Netlify Dashboard
1. Buka site di Netlify
2. Klik tab **Deploys**
3. Klik tombol **Trigger deploy**
4. Pilih **Deploy site**
5. Tunggu proses build selesai (biasanya 2-5 menit)

### Opsi B: Clear Cache & Deploy
1. Buka site di Netlify
2. Klik tab **Deploys**
3. Klik tombol **Trigger deploy**
4. Pilih **Clear cache and deploy site**
5. Ini akan memaksa rebuild dari awal

## 🔄 Jika Perubahan Belum Terlihat

### 1. Clear Browser Cache
```
Chrome/Edge: Ctrl + Shift + Delete
Firefox: Ctrl + Shift + Delete
Safari: Cmd + Option + E
```

### 2. Hard Refresh Browser
```
Windows: Ctrl + F5 atau Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### 3. Buka Incognito/Private Mode
- Chrome: Ctrl + Shift + N
- Firefox: Ctrl + Shift + P
- Safari: Cmd + Shift + N

### 4. Cek URL dengan Cache Buster
Tambahkan `?v=timestamp` di akhir URL:
```
https://your-site.netlify.app/?v=20241126
```

## 📋 Verifikasi Deployment Berhasil

### Cek Fitur Baru:
1. ✅ Buka halaman admin `/admin`
2. ✅ Login ke admin panel
3. ✅ Buka menu **Pengaturan**
4. ✅ Edit nomor WhatsApp atau email
5. ✅ Klik **Simpan Perubahan**
6. ✅ Buka website utama di tab baru
7. ✅ Cek Footer - apakah kontak berubah?
8. ✅ Cek Header - apakah WhatsApp button berubah?
9. ✅ Cek halaman CTA - apakah kontak berubah?

## 🐛 Troubleshooting

### Build Gagal
**Error: "Command failed with exit code 1"**
- Cek apakah semua dependencies terinstall
- Pastikan `package.json` tidak ada error
- Cek Node version di netlify.toml (sekarang: 18)

**Error: "Module not found"**
- Pastikan semua import path benar
- Cek case sensitivity (Linux case-sensitive)
- Pastikan file ada di repository

### Deployment Berhasil Tapi Perubahan Tidak Terlihat
1. Clear browser cache (Ctrl + Shift + Delete)
2. Hard refresh (Ctrl + F5)
3. Buka incognito mode
4. Tunggu 5-10 menit untuk CDN propagation
5. Cek dengan tools: https://www.whatsmydns.net/

### localStorage Tidak Berfungsi
- localStorage hanya bekerja di browser yang sama
- Data tidak sync antar device
- Jika ingin data persistent, perlu backend/database

## 📞 Kontak Support

Jika masih ada masalah:
1. Cek Netlify Status: https://www.netlifystatus.com/
2. Netlify Support: https://answers.netlify.com/
3. Netlify Docs: https://docs.netlify.com/

## 🎯 Next Steps

Setelah deployment berhasil:
1. Test semua fitur di production
2. Test di berbagai browser (Chrome, Firefox, Safari, Edge)
3. Test di mobile device
4. Monitor error logs di Netlify
5. Setup custom domain jika belum
6. Setup SSL certificate (otomatis di Netlify)
7. Setup form notifications jika ada
8. Setup analytics jika diperlukan

## 📝 Catatan Penting

- Netlify auto-deploy setiap kali ada push ke branch master
- Build time biasanya 2-5 menit
- CDN propagation bisa memakan waktu 5-10 menit
- Cache headers sudah dioptimasi di netlify.toml
- localStorage data tidak akan hilang saat deployment baru
