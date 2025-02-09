# Template Kejutan Valentine 💝

Website kejutan Valentine yang interaktif dan cantik, dibangun dengan React, TypeScript, dan Tailwind CSS. Fitur-fitur yang tersedia:
- Pertanyaan interaktif dengan GIF lucu
- Pemilihan lokasi kencan
- Koordinasi outfir
- Deklarasi cinta dengan animasi hati
- Desain yang responsif

## 🚀 Memulai

1. Clone atau fork template ini
2. Install dependensi:
```bash
npm install
```
3. Jalankan server development:
```bash
npm run dev
```

## 📝 Panduan Kustomisasi

### 1. Mengubah Pertanyaan (`src/data/questions.ts`)

Perbarui array pertanyaan dengan pertanyaan Anda sendiri:

```typescript
export const questions: Question[] = [
  {
    id: 1,
    text: "Pertanyaan Anda di sini?",
    acceptText: "Teks tombol Ya",
    rejectionText: "Teks tombol Tidak",
    imageUrl: "/images/question/gambar-anda.gif"
  },
  // Tambahkan pertanyaan lainnya...
];
```

Catatan penting untuk questions:
1. Untuk pertanyaan terakhir, kosongkan rejectionText menjadi string kosong ("")
2. Untuk GIF anda bisa mendownloadnya melalui https://tenor.com/id/

### 2. Mengubah Lokasi Kencan (`src/data/dateLocations.ts`)

Modifikasi lokasi kencan sesuai preferensi Anda:

```typescript
export const dateLocations: DateLocation[] = [
  {
    id: 1,
    name: "Nama Lokasi Anda",
    description: "Deskripsi lokasi Anda",
    icon: "nama-icon" // Menggunakan icon Lucide
  },
  // Tambahkan lokasi lainnya...
];
```

### 3. Memperbarui Pakaian (`src/data/outfits.ts`)

Sesuaikan pilihan pakaian:

```typescript
export const outfits: Outfit[] = [
  {
    id: 1,
    name: "Nama Pakaian Anda",
    imageUrl: "/images/outfit/gambar-pakaian-anda.jpg",
    description: "Deskripsi pakaian Anda"
  },
  // Tambahkan pakaian lainnya...
];
```

### 4. Panduan Gambar

#### GIF Pertanyaan
- Letakkan file GIF Anda di: `/public/images/question/`
- Penamaan yang disarankan: `question-1.gif`, `question-2.gif`, dll
- Ukuran yang disarankan: 300x300px
- Format: GIF

#### Gambar Pakaian
- Letakkan gambar pakaian di: `/public/images/outfit/`
- Penamaan yang disarankan: `nama-pakaian.jpg`
- Ukuran yang disarankan: 1000x945px
- Format: JPG atau PNG

### 5. Struktur File untuk Gambar

```
public/
└── images/
    ├── question/
    │   ├── question-1.gif
    │   ├── question-2.gif
    │   └── ...
    └── outfit/
        ├── outfit-1.jpg
        ├── outfit-2.jpg
        └── ...
```

## 🎨 Mengubah Warna

Template ini menggunakan Tailwind CSS untuk styling. Untuk mengubah skema warna:

1. Warna utama yang digunakan:
- Primer: `pink-500`, `pink-600`
- Latar belakang: `pink-50`, `pink-100`
- Teks: `gray-600`, `gray-700`

2. Untuk mengubah warna, cari dan ganti kelas warna ini di file komponen atau sesuaikan konfigurasi Tailwind.

## 📱 Desain Responsif

Template ini sepenuhnya responsif dan berfungsi di:
- Perangkat mobile
- Tablet
- Browser desktop