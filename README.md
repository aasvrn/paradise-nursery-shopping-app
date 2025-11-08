# Paradise Nursery – Shopping Cart App

Aplikasi front‑end untuk toko tanaman hias rumah. Dibangun dengan React + Vite, menggunakan Redux Toolkit untuk state keranjang dan React Router untuk navigasi. Proyek ini dibuat mengikuti rubrik penilaian 50 poin (19 tugas) dan siap di‑deploy ke GitHub Pages.

- Demo: `https://aasvrn.github.io/paradise-nursery-shopping-app/`
- Repo: `https://github.com/aasvrn/paradise-nursery-shopping-app`

## Fitur Utama

- Landing page dengan gambar latar, nama perusahaan, paragraf deskripsi, dan tombol Get Started ke halaman produk.
- Header tampil di halaman produk dan keranjang, berisi navigasi dan ikon `🛒` dengan jumlah item total (dinamis dari Redux).
- Product listing berisi 6 tanaman unik, ditampilkan dalam 3 kategori: Aromatic, Medicinal, dan Succulents.
- Setiap produk memiliki thumbnail, nama, harga, dan tombol Add to Cart.
  - Setelah diklik: tombol menjadi disabled, item ditambahkan ke keranjang, dan jumlah di ikon keranjang bertambah.
- Shopping cart menampilkan: jumlah total tanaman, total biaya, kartu per tipe tanaman (thumbnail, nama, harga satuan, total per tipe), tombol `+`/`-`, `Delete`, `Checkout (Coming Soon)`, dan `Continue Shopping`.

## Teknologi

- `React` 19 + `Vite` 7
- `React Router` 7 (dengan `basename` menyesuaikan GitHub Pages)
- `Redux Toolkit` + `React Redux`
- Gambar katalog lokal (`public/plants/*.svg`) agar cepat dan stabil

## Struktur Proyek

```
src/
  components/       # Header, ProductCard, CartItem
  pages/            # Landing, Products, Cart
  store/            # cartSlice + store
  data/             # plants.js (data katalog)
  utils/            # image utils (assetUrl, isRemote, dll.)
public/
  plants/           # aset gambar lokal
```

## Menjalankan Secara Lokal

- Prasyarat: Node.js 18+ dan npm.
- Instalasi: `npm install`
- Jalankan dev server: `npm run dev`
  - Vite menggunakan `base` sehingga URL lokal biasanya: `http://localhost:5173/paradise-nursery-shopping-app/`

## Build & Deploy ke GitHub Pages

Konfigurasi sudah disiapkan.

- Build: `npm run build`
- Deploy: `npm run deploy` (menggunakan `gh-pages` untuk publish folder `dist`)
- `vite.config.js` menggunakan `base: '/paradise-nursery-shopping-app/'`.
- `BrowserRouter` memakai `basename` dari `import.meta.env.BASE_URL`.
- `public/404.html` akan me‑redirect deep‑link ke `index.html` dengan parameter `redirect`, lalu `index.html` mengembalikan path yang benar agar refresh pada URL seperti `/products` tidak 404.

## Troubleshooting

- 404 saat refresh halaman di GitHub Pages:
  - Pastikan branch `gh-pages` sudah ter‑publish dan pengaturan GitHub Pages menunjuk ke sumber yang benar (Branch: `gh-pages`, folder `/root`).
  - Tunggu propagasi 1–2 menit setelah deploy.
  - Jika masih bermasalah, alternatif aman adalah beralih ke `HashRouter` sehingga URL menjadi `/#/products` (selalu aman pada refresh). Saat ini proyek memakai `BrowserRouter` + fallback 404 agar path tetap cantik.

## Rubrik Penilaian (Pemetaan Fitur)

- GitHub: repo publik + struktur Redux.
- Landing: background, paragraf, nama, tombol Get Started.
- Product listing: 6 tanaman (thumbnail, nama, harga), 3 kategori, Add to Cart dengan state terhubung ke ikon keranjang dan disable tombol.
- Header: tampil di halaman produk & keranjang, ikon keranjang dinamis, navigasi antar halaman.
- Shopping cart: jumlah total tanaman, total biaya, kartu per tipe (thumbnail, nama, harga), tombol `+`/`-`/`Delete`, `Checkout` (Coming Soon), `Continue Shopping`.

## Kontribusi

Pull request dipersilakan. Untuk perubahan besar, buka issue terlebih dahulu untuk mendiskusikan apa yang ingin diubah.

## Lisensi Gambar

Gambar katalog saat ini berupa SVG lokal ringan di folder `public/plants/`. Jika ingin menggunakan foto asli, tambahkan file JPG/PNG ke folder tersebut dan perbarui `src/data/plants.js`.
