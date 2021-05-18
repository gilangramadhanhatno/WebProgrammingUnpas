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
// const mhs = {
//   nama: "Gilang Ramadhan Hatno",
//   umur: 22,
//   npm: 10416142,
//   email: "gilangramadhanhatno@gmail.com",
// };
// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="npm">${mhs.npm}</span>
// </div>`;
// console.log(el);

// Latian
// 1. HTML Fragments
// const mhs = {
//   nama: "Gilang Ramadhan Hatno",
//   umur: 22,
//   npm: 10416142,
//   email: "gilangramadhanhatno@gmail.com",
// };
// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span>${mhs.npm}</span>
// </div>`;
// document.body.innerHTML = el;

// 2. Looping
// const mhs = [
//   {
//     nama: "Gilang Ramadhan Hatno",
//     email: "gilangramadhanhatno@gmail.com",
//   },
//   {
//     nama: "Aslegedes",
//     email: "aslegedes@gmail.com",
//   },
//   {
//     nama: "Geblek",
//     email: "geblek@gmail.com",
//   },
// ];
// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//     )
//     .join("")}
// </div>`;
// document.body.innerHTML = el;

// 3. Conditional - Ternary
// const lagu = [
//   {
//     judul: "Tetap Dalam Jiwa",
//     penyanyi: "Isyana Sarasvati",
//   },
//   {
//     judul: "Kau Adalah",
//     penyanyi: "Isyana Sarasvati",
//     feat: "Rayi Putra",
//   },
// ];
// const el = `<div class="lagu">
//   ${lagu
//     .map(
//       (l) => `<ul>
//     <li>${l.judul}</li>
//     <li>${l.penyanyi} ${l.feat ? `(feat. ${l.feat})` : ``}</li>
//   </ul>`
//     )
//     .join("")}
// </div>`;
// document.body.innerHTML = el;

// 4. Nested - HTML Fragments bersarang
// const mhs = {
//   nama: "Gilang Ramadhan Hatno",
//   semester: 6,
//   mataKuliah: ["Pemrograman Web", "Perancangan Sistem Informasi", "Sistem Informasi Akuntansi", "Sistem Informasi Management"],
// };
// function cetakMataKuliah(matakuliah) {
//   return `<ol>
//     ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
//   </ol>`;
// }
// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="semester">Semester : ${mhs.semester}</span>
//   <h4>Mata Kuliah :</h4>
//   ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;

// Tagged Template
// const nama = "Gilang Ramadhan Hatno";
// const umur = 22;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ``}`;
//   // });
//   // return result;

//   // menggunakan reduce
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ``}`, "");
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

// Highlight
const nama = "Gilang Ramadhan Hatno";
const umur = 22;
const hobi = "Futsal";

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur}tahun, dan hobi saya adalah ${hobi}`;
document.body.innerHTML = str;
