// Spread Operator
// memecah iterables menjadi single element
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// // console.log(mhs);
// // console.log(...mhs);
// console.log(...mhs[0]);

// menggabungkan 2 atau lebih array
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// const dosen = ["Deza", "Daka", "Zaenal"];
// const orang = [...mhs, "Kunyuk", ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// mengcopy array
// const mhs = ["Gilang", "Aslegedes", "Geblek"];
// // const mhs1 = mhs;
// // mhs1[0] = "Kunyuk";
// const mhs1 = [...mhs];
// mhs1[0] = "Kunyuk";
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //   mhs.push(liMhs[i].textContent);
// // }

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// nama.innerHTML = huruf;

// Rest Parameter
// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function myFunc(...myArgs) {
//   return myArgs;
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function myFunc() {
//   // return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0;
//   // for (const a of angka) {
//   //   total += a;
//   // }
//   // return total;

//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["Gilang", "Aslegedes", "Geblek", "Kunyuk", "Sugi"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Daka",
//   frontend1: "Gilang",
//   frontend2: "Aslegedes",
//   backend: "Jebak",
//   ux: "Alfi",
//   devOps: "Putri",
// };
// const { pm, ...myTeam } = team;
// console.log(myTeam);

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("string", 1, 2, "Gilang", "Aslegedes", true, false, "Geblek", 20));
console.log(filterBy("number", 1, 2, "Gilang", "Aslegedes", true, false, "Geblek", 20));
console.log(filterBy("boolean", 1, 2, "Gilang", "Aslegedes", true, false, "Geblek", 20));
