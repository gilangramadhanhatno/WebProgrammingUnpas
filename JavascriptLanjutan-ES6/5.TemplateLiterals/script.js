// Template Literals / Template String
// Template Literals sederhana
// const nama = "Gilang";
// let umur = 22;
// console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert("Hallo")}`);
// const x = 10;
// console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Gilang Ramadhan Hatno",
  umur: 22,
  npm: 10416142,
  email: "gilangramadhanhatno@gmail.com",
};
const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="npm">${mhs.npm}</span>
</div>`;

console.log(el);
