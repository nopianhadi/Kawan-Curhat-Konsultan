# 🔐 Cara Akses Admin Panel

## 3 Cara Mengakses Admin Panel

### 1️⃣ Melalui Tombol Login di Header (Paling Mudah)

#### Desktop:
1. Buka website utama
2. Lihat di bagian kanan atas header
3. Klik tombol **"Login"** (tombol dengan border)
4. Anda akan diarahkan ke halaman login admin

#### Mobile:
1. Buka website utama
2. Klik icon hamburger (☰) di kanan atas
3. Menu akan terbuka
4. Scroll ke bawah
5. Klik tombol **"Login"**
6. Anda akan diarahkan ke halaman login admin

### 2️⃣ Melalui URL Langsung

Ketik atau copy-paste URL ini di browser:
```
http://localhost:5173/admin
```

Untuk production:
```
https://kawancurhat.com/admin
```

### 3️⃣ Melalui Link di Footer

1. Scroll ke paling bawah website
2. Di bagian copyright, ada link kecil bertuliskan **"Admin"**
3. Klik link tersebut
4. Anda akan diarahkan ke halaman login

---

## 🔑 Kredensial Login

Setelah masuk ke halaman login, gunakan:

```
Email: admin@kawancurhat.com
Password: admin123
```

---

## 📱 Tampilan Tombol Login

### Desktop Header:
```
[Tentang Kami] [Layanan] [Blog] [Hubungi Kami] [Login]
                                    (biru)      (border)
```

### Mobile Menu:
```
☰ Menu
├─ Tentang Kami
├─ Layanan
├─ Blog
├─ Hubungi Kami (tombol biru)
└─ Login (tombol border)
```

---

## ✅ Checklist Akses

- [x] Tombol login di desktop header
- [x] Tombol login di mobile menu
- [x] Link admin di footer
- [x] Direct URL access
- [x] Auto-redirect ke halaman login
- [x] Session management

---

## 🎯 Flow Lengkap

```
Website Utama
    ↓
Klik Tombol "Login"
    ↓
Halaman Login Admin (/admin)
    ↓
Masukkan Email & Password
    ↓
Dashboard Admin
    ↓
Kelola Konten
```

---

## 🔒 Keamanan

- Halaman admin dilindungi dengan autentikasi
- Session tersimpan di localStorage
- Auto-logout saat clear cache
- Password protected

---

## 💡 Tips

1. **Bookmark halaman admin** untuk akses cepat
2. **Gunakan "Remember me"** agar tidak perlu login berulang
3. **Logout** setelah selesai mengelola konten
4. **Jangan share kredensial** dengan orang yang tidak berwenang

---

## 🆘 Troubleshooting

### Tombol Login Tidak Muncul?
- Refresh halaman (F5)
- Clear browser cache
- Pastikan JavaScript enabled

### Tidak Bisa Akses /admin?
- Pastikan development server running
- Cek URL: `http://localhost:5173/admin`
- Coba hard refresh (Ctrl+Shift+R)

### Lupa Password?
- Untuk demo: gunakan `admin123`
- Untuk production: hubungi administrator

---

## 📞 Bantuan

Jika masih ada masalah, lihat dokumentasi lengkap:
- `QUICK-START-ADMIN.md` - Panduan cepat
- `ADMIN-GUIDE.md` - Panduan lengkap
- `ADMIN-IMPLEMENTATION.md` - Detail teknis

---

**Selamat mengelola konten! 🚀**
