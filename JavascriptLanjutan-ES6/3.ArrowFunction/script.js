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
// let mahasiswa = ["Gilang", "Aselegedes", "Geblek"];
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function
// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Gilang";
//   this.umur = 22;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//   };
// };
// const gilang = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () { // tidak semua function bisa dijadikan arrow function
//   this.nama = "Gilang";
//   this.umur = 22;
//   this.sayHello =  () => { // kalo method bisa dijadikan arrow function
//     console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//   };
// };
// const gilang = new Mahasiswa();

// Arrow Function pada Object Literal
// const mhs1 = {
//   nama: "Gilang",
//   umur: 22,
//   sayHello: () => {
//     // console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur}`);
//     console.log(this);
//   },
// };

// Latian 1
// const Mahasiswa = function () {
//   this.nama = "Gilang";
//   this.umur = 22;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur}`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 2000);
// };
// const gilang = new Mahasiswa();

// latian 2
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
