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
const mhs = {
  id: 123,
  nama: "Gilang Ramadhan",
  umur: 22,
  email: "gilangramadhanhatno@gmail.com",
};
function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs));
