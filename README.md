# Website Profil Masjid Al-Ikhsan

Website profil masjid modern, elegan, responsif, dan profesional dengan nuansa Islami.

## Teknologi

- HTML5
- CSS3 + Bootstrap 5.3
- JavaScript (Vanilla)
- Google Fonts (Poppins + Amiri)
- Font Awesome 6
- Aladhan Prayer Times API (gratis)

## Struktur File

```
masjid-al-ikhsan/
├── index.html          # Beranda
├── agenda.html         # Agenda kegiatan
├── jadwal.html         # Jadwal sholat
├── tausiyah.html       # Artikel tausiyah
├── laporan.html        # Laporan keuangan (demo)
├── berita.html         # Daftar berita
├── berita-detail.html  # Detail berita
├── galeri.html         # Galeri foto
├── login.html          # Halaman login (demo)
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Cara Menjalankan

### Opsi 1: Langsung buka file
Cukup buka `index.html` di browser modern (Chrome, Firefox, Edge, Safari).

### Opsi 2: Local Server (direkomendasikan)
Agar fitur API jadwal sholat dan beberapa resource berjalan optimal:

```bash
# Menggunakan Python
cd masjid-al-ikhsan
python -m http.server 8080

# Atau menggunakan Node.js (npx)
npx serve .
```

Kemudian buka: http://localhost:8080

## Fitur Utama

- **Top Bar**: Kontak WhatsApp, email, dan ikon media sosial
- **Navbar**: Menu lengkap + tombol Masuk, responsif hamburger di mobile
- **Hero Banner**: Gambar masjid + teks Arab + sambutan
- **Berita**: Kartu horizontal dengan tanggal & waktu
- **Jadwal Sholat**: Real-time dari Aladhan API (Bandar Lampung) + fallback demo
- **Halaman**: Agenda, Jadwal, Tausiyah, Laporan, Berita, Galeri, Login
- **Galeri**: Lightbox untuk melihat foto lebih besar
- **Desain**: Warna hijau tua, sage, putih, krem + ornamen Islami
- **Responsif**: Desktop, tablet, dan smartphone

## Catatan

- Jadwal sholat menggunakan API Aladhan (method Kemenag). Jika gagal, data demo otomatis ditampilkan.
- Login dan laporan bersifat **demo** — siap diganti dengan backend asli.
- Gambar menggunakan Unsplash (internet diperlukan untuk menampilkan gambar).

## Warna Tema

| Nama          | Hex       |
|---------------|-----------|
| Primary Green | `#1a5f4a` |
| Dark Green    | `#0d3d2e` |
| Sage Green    | `#7a9e8e` |
| Cream         | `#f8f4ec` |
| Light Green   | `#e8f0eb` |

---
© 2026 Masjid Al-Ikhsan
