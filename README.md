# Simple Blog

## Cara Kerja

Simple Blog adalah website sederhana untuk mengelola artikel menggunakan HTML, CSS, dan JavaScript. Website ini memiliki fitur **tambah, tampilkan, edit, dan hapus artikel (CRUD)**.

### 1. HTML

HTML digunakan untuk membuat struktur halaman, seperti:

* Form tambah/edit artikel
* Input judul artikel
* Input isi artikel
* Daftar artikel
* Tombol Edit, Hapus, dan Mode Terang/Gelap

### 2. CSS

CSS digunakan untuk mengatur tampilan website agar rapi, modern, dan nyaman digunakan.

### 3. JavaScript

JavaScript digunakan untuk:

* Mengambil data artikel dari API JSONPlaceholder
* Menampilkan 5 artikel pertama
* Menambahkan artikel
* Mengedit artikel
* Menghapus artikel
* Mengatur ID artikel baru mulai dari 6
* Menggunakan Local Storage untuk menyimpan data
* Mengatur mode terang dan gelap
* Menampilkan loading dan pesan error
* Menggunakan DOM untuk menampilkan data tanpa reload halaman

### 4. Alur Website

1. Website dibuka.
2. JavaScript mengecek data artikel di Local Storage.
3. Jika belum ada, JavaScript mengambil 5 artikel dari API.
4. Artikel ditampilkan pada bagian **Daftar Artikel**.
5. Pengguna dapat menambahkan artikel melalui form.
6. Pengguna dapat mengedit atau menghapus artikel.
7. Perubahan data disimpan ke Local Storage.
8. Pengguna dapat mengganti mode terang atau gelap.
9. Jika terjadi kesalahan, pesan error akan ditampilkan.

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
└── .gitignore
```
