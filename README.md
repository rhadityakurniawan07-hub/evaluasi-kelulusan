# Simple Blog

Simple Blog adalah aplikasi web sederhana untuk mengelola artikel dengan fitur CRUD (Create, Read, Update, Delete). Project ini dibuat dengan HTML, CSS, dan JavaScript serta memanfaatkan API publik dari JSONPlaceholder untuk simulasi data artikel.

## Fitur

- Menampilkan daftar artikel
- Menambahkan artikel baru
- Mengedit artikel yang sudah ada
- Menghapus artikel
- Menyimpan data ke localStorage agar tetap tersedia setelah refresh halaman
- Toggle tema gelap/terang
- Loading state dan handling error saat mengambil data

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript ES6
- JSONPlaceholder API
- LocalStorage browser

## Struktur Project

```text
evaluasi-kelulusan/
├── Simple Blog/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── node_modules/
```

## Cara Menjalankan Project

### 1. Clone repository

```bash
git clone https://github.com/username/evaluasi-kelulusan.git
cd evaluasi-kelulusan
```

### 2. Buka file HTML langsung

Anda dapat membuka file `Simple Blog/index.html` secara langsung di browser.

Atau jalankan server lokal agar lebih aman dan stabil:

```bash
cd "Simple Blog"
python -m http.server 8000
```

Lalu buka browser ke:

```text
http://localhost:8000
```

### 3. Jika ingin memakai server Node.js

```bash
npx serve .
```

## Alur Kerja Aplikasi

1. Halaman dibuka.
2. JavaScript mengambil data artikel dari API JSONPlaceholder.
3. Data ditampilkan ke dalam daftar artikel.
4. User dapat menambah artikel baru melalui form.
5. User dapat mengedit artikel dengan tombol Edit.
6. User dapat menghapus artikel dengan tombol Hapus.
7. Data disimpan ke localStorage agar tetap ada meskipun halaman direfresh.

## Catatan

Project ini merupakan frontend statis dan tidak menggunakan database backend. Data artikel bersifat simulasi dan diambil dari API public, kemudian disimpan sementara di browser.

## Lisensi

Project ini dibuat untuk kebutuhan pembelajaran dan pengembangan frontend dasar.
