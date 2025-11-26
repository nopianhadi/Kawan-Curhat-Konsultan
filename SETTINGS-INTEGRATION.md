# Integrasi Pengaturan Kontak & Media Sosial

## 📋 Ringkasan

Fitur ini memungkinkan admin untuk mengedit informasi kontak dan media sosial di halaman **Settings** admin panel, dan perubahan akan otomatis terlihat di seluruh website.

## ✨ Fitur yang Terintegrasi

### Informasi yang Dapat Diedit:
1. **Informasi Website**
   - Nama Website
   - Deskripsi Website

2. **Informasi Kontak**
   - Nomor Telepon
   - Email
   - WhatsApp
   - Alamat

3. **Media Sosial**
   - Facebook
   - Instagram
   - LinkedIn
   - YouTube

## 🔄 Komponen yang Terintegrasi

### 1. **Header** (`components/Header.tsx`)
- Nama website di logo
- Tombol WhatsApp floating menggunakan nomor dari settings

### 2. **Footer** (`components/Footer.tsx`)
- Nama website
- Deskripsi website
- WhatsApp, Email, dan Alamat
- Link media sosial (Facebook, Instagram, LinkedIn, YouTube)

### 3. **CTA** (`components/CTA.tsx`)
- Nomor WhatsApp
- Email
- Link WhatsApp button

### 4. **ServiceDetail** (`components/ServiceDetail.tsx`)
- Nomor telepon di sidebar
- Email di sidebar
- Link email dan telepon di CTA card

## 🛠️ Cara Menggunakan

### Untuk Admin:
1. Login ke admin panel (`/admin`)
2. Buka menu **Pengaturan**
3. Edit informasi kontak atau media sosial
4. Klik tombol **Simpan Perubahan**
5. Perubahan akan langsung terlihat di website

### Untuk Developer:
Gunakan custom hook `useSettings()` di komponen yang membutuhkan data settings:

```tsx
import { useSettings } from '../hooks/useSettings';

const MyComponent = () => {
  const settings = useSettings();
  
  return (
    <div>
      <p>WhatsApp: {settings.whatsapp}</p>
      <p>Email: {settings.email}</p>
      <a href={settings.facebook}>Facebook</a>
    </div>
  );
};
```

## 🔧 Teknologi

- **Storage**: localStorage untuk menyimpan settings
- **Real-time Update**: 
  - Storage event untuk update antar tab
  - Custom event untuk update dalam tab yang sama
- **Type Safety**: TypeScript interface untuk data settings

## 📝 Catatan

- Data disimpan di localStorage dengan key `admin_settings`
- Perubahan akan langsung terlihat tanpa perlu refresh halaman
- Jika settings belum diatur, akan menggunakan nilai default
- Format nomor WhatsApp otomatis dikonversi untuk link WhatsApp (menghapus 0 di depan dan menambah 62)

## 🎯 Default Values

```typescript
{
  siteName: 'Kawan Curhat',
  siteDescription: 'Konsultan Hukum Bisnis Terpercaya',
  phone: '08567886251',
  email: 'info@kawancurhat.com',
  address: 'Jakarta, Indonesia',
  whatsapp: '08567886251',
  facebook: 'https://facebook.com/kawancurhat',
  instagram: 'https://instagram.com/kawancurhat',
  linkedin: 'https://linkedin.com/company/kawancurhat',
  youtube: 'https://youtube.com/@kawancurhat'
}
```
