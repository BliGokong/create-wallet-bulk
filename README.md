# Bulk Ethereum Wallet Generator

Script ini menghasilkan banyak wallet Ethereum sekaligus, lalu menyimpan alamat dan private key ke file `results.txt` dalam format `address:private key` untuk setiap baris.

## Fitur

- Membuat beberapa wallet Ethereum sekaligus.
- Menyimpan alamat dan private key ke `results.txt` dalam format `address:private key`.
- Meminta pengguna untuk menentukan jumlah wallet yang ingin dibuat.

## Prasyarat

- [Node.js](https://nodejs.org/) harus sudah terpasang.
- Beberapa package npm tambahan diperlukan, yaitu `ethers` untuk membuat wallet dan `prompt-sync` untuk mengambil input pengguna.

## Instalasi

1. Clone atau unduh repository ini.
2. Buka terminal di dalam folder proyek dan jalankan perintah berikut untuk menginstal semua dependency yang dibutuhkan:

   ```bash
   npm install ethers prompt-sync
3. Start

    ```bash
   node main.js