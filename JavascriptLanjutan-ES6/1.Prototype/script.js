//  Cara untuk membuat Object pada JavaScript
// 1. OBJECT LITERAL // PROBLEM: tidak efektif untuk object yg banyak
let mahasiswa1 = {
  nama: "Gilang",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan.`);
  },
};

let mahasiswa2 = {
  nama: "Aslegedes",
  energi: 8,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan.`);
  },
};
