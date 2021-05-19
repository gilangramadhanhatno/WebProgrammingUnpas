// Desctructuring Variable / Assigment

// Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Gilang Ramadhan"];
// const [salam, satu, dua, nama] = perkenalan;
// console.log(nama);

// skipping items
// const perkenalan = ["Halo", "nama", "saya", "Gilang Ramadhan"];
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);
// console.log(values[2]);

// Desctructuring Object
// const mhs = {
//   nama: "Gilang Ramadhan",
//   umur: 22,
// };
// const { nama, umur } = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// ({ nama, umur } = { nama: "Gilang Ramadhan", umur: 22 });
// console.log(nama);

// Assigment ke Variabel baru
// const mhs = {
//   nama: "Gilang Ramadhan",
//   umur: 22,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan default value + assigment ke variabel baru
// const mhs = {
//   nama: "Gilang Ramadhan",
//   umur: 22,
//   // email: "gilangramadhanhatno@gmail.com",
// };
// const { nama: n, umur: u, email: e = "default@email.com" } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: "Gilang Ramadhan",
//   umur: 22,
//   email: "gilangramadhanhatno@gmail.com",
// };
// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);
// console.log(values.email);

// Mengambil field pada object, setelah dikirm sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "Gilang Ramadhan",
//   umur: 22,
//   email: "gilangramadhanhatno@gmail.com",
// };
// function getIdMhs({ id }) {
//   return id;
// }
// console.log(getIdMhs(mhs));

// Destructuring
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);
// console.log(kali);

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// array destructuring
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }
// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3); // return value harus berurutan
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// object destructuring
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { bagi, kali, kurang, tambah } = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(bagi);
// console.log(kali);

// Destructuring Function arguments
// const mhs1 = {
//   nama: "Gilang Ramadhan",
//   umur: 22,
//   email: "gilangramadhanhatno@gmail.com",
// };
// function cetakMhs(mhs) { // tanpa destructuring
//   return `Halo nama saya ${mhs.nama} dan saya ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));

// const mhs1 = {
//   nama: "Gilang Ramadhan",
//   umur: 22,
//   email: "gilangramadhanhatno@gmail.com",
// };
// function cetakMhs({nama, umur}) { // dengan destructuring
//   return `Halo nama saya ${nama} dan saya ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1));

const mhs1 = {
  nama: "Gilang Ramadhan",
  umur: 22,
  email: "gilangramadhanhatno@gmail.com",
  nilai: {
    tugas: 78,
    uts: 86,
    uas: 90,
  },
};
function cetakMhs({ nama, umur, email, nilai: { tugas, uts, uas } }) {
  // dengan destructuring
  return `Halo nama saya ${nama}, saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
