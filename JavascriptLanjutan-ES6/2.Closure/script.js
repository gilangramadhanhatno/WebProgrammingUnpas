// 2.1 EXECUTIN CONTEXT, HOISTING & SCOPE
// console.log(nama);
// var nama = "Gilang";
// hal ini disebut creation phase pada Global Context
// var nama = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// executin phase

// console.log(sayHello());
// var nama = "Gilang";
// var umur = 22;
// function sayHello() {
//   return `Hello nama saya ${this.nama}, saya ${this.umur} tahun`;
// }

// Function membuat local Execution Context
// yang didalamnya terdapat creation dan execution phase
// windows
// arguments
// hoisting

// var nama = "Gilang Ramadhan Hatno";
// var username = "@gilangrmdhn13";

// function cetakURL(username) {
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username;
// }
// console.log(cetakURL("aslegedes"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

// latian
function satu() {
  var nama = "Gilang";
  console.log(nama);
}
function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "aslegedes";
satu();
dua("geblek");
console.log(nama);
