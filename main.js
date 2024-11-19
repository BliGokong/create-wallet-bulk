const fs = require('fs');
const { ethers } = require('ethers');
const prompt = require('prompt-sync')();

// Tanyakan jumlah wallet yang ingin dibuat
const walletCount = parseInt(prompt('Masukkan jumlah wallet yang ingin dibuat: '));

// Fungsi untuk membuat wallet dan menyimpan private key ke results.txt
const generateWallets = async () => {
  let data = '';

  for (let i = 0; i < walletCount; i++) {
    const wallet = ethers.Wallet.createRandom();
    data += `${wallet.address}:${wallet.privateKey}\n`;
  }

  // Tulis hasil ke file results.txt
  fs.writeFileSync('results.txt', data);
  console.log(`Berhasil membuat ${walletCount} wallet dan menyimpan private key di results.txt`);
};

// Jalankan fungsi generateWallets
generateWallets();
