// FOR..OF

// Array
// for biasa
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// forEach()
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// mhs.forEach((m) => console.log(m));

// for..of
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// for (const m of mhs) {
//   console.log(m);
// }

// String
// for..of
// const nama = "Gilang";
// for (const n of nama) {
//   console.log(n);
// }

// forEach() - tidak bisa
// const nama = "Gilang";
// nama.forEach((n) => console.log(n));

// forEach()
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for..of
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// Nodelist
// forEach()
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => n.textContent);

// for..of
// const liNama = document.querySelectorAll(".nama");
// for (const n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() { // tidak bisa
//   return arguments.reduce((a, i) => a + 1);
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// function jumlahkanAngka() {
//   let jumlah = 0;
//   // forEach()
//   // arguments.forEach((a) => (jumlah += a));

//   // for..of
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: "Gilang Ramadhan",
  umur: 22,
  email: "gilangramadhanhatno@gmail.com",
};
for (const m in mhs) {
  console.log(mhs[m]);
}
