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
// const methodMahasiwa = {
//   makan: function (porsi) {
//     this.energi += porsi; // === this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiwa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let gilang = Mahasiswa("Gilang", 10);
// let aslegedes = Mahasiswa("Aslegedes", 16);

// 2.1 Object.create() pada Function Declaration
// const methodMahasiwa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiwa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let gilang = Mahasiswa("Gilang", 24);
// let gugun = Mahasiswa("Gugun", 12);

// 3. CONSTRUCTOR FUNCTION
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi; // === this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };
// }
// let gilang = new Mahasiswa("Gilang", 10);

// 3.1 PROTOTYPE PADA CONSTRUCTOR FUNCTION
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
//   };

//   Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
//   };

//   Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur  `;
//   };
// }

// let gilang = new Mahasiswa("Gilang", 10);

// 3.2 Versi Class nya PROTOTYPE
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
  }
}

let gilang = new Mahasiswa("Gilang", 10);
