// FUNCTION EXPRESSION
// const tampilNama = function (nama) {
//   return `Hallo, ${nama}`;
// };
// console.log(tampilNama("Gilang"));

// ARROW FUNCTION
// menggunakan 1 parameter
// const tampilNama = (nama) => {
//   return `Hallo ${nama}`;
// };
// console.log(tampilNama("Gilang"));
// implisit return
// const tampilNama = (nama) => `Hallo, ${nama}`;
// console.log(tampilNama("Gilang"));

// menggunakan 2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Hallo ${nama}, selamat ${waktu}`;
// };
// console.log(tampilNama("Gilang", "Pagi"));

// LATIAN
// Function Expression
// let mahasiswa = ["Gilang", "Aslegedes", "Geblek"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow Function
// let mahasiswa = ["Gilang", "Aslegedes", "Geblek"];
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);
// mengembalikan nilainya dalam bentuk object
let mahasiswa = ["Gilang", "Aselegedes", "Geblek"];
let jumlahHuruf = mahasiswa.map((nama) => ({
  nama,
  jmlHuruf: nama.length,
}));
console.table(jumlahHuruf);
