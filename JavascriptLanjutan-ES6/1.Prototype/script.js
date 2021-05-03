//  Cara untuk membuat Object pada JavaScript
// 1. OBJECT LITERAL // PROBLEM: tidak efektif untuk object yg banyak
// let mahasiswa1 = {
//   nama: "Gilang",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Aslegedes",
//   energi: 8,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan.`);
//   },
// };

// 2. FUNCTION DECLARATION
const methodMahasiwa = {
  makan: function (porsi) {
    this.energi += porsi; // === this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiwa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let gilang = Mahasiswa("Gilang", 10);
let aslegedes = Mahasiswa("Aslegedes", 16);
