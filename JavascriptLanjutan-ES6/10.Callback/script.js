// Callback

// // Synchronous Callback
// function halo(nama) {
//   alert(`Halloo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama: ");
//   callback(nama);
// }
// tampilkanPesan(halo);

// // Anonymous function
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama: ");
//   callback(nama);
// }
// tampilkanPesan((nama) => alert(`Halloo, ${nama}`));

// const mhs = [
//   {
//     nama: "Gilang Ramadhan Hatno",
//     npm: "10416142",
//     email: "gilangramadhanhatno@gmail.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Ngale",
//     npm: "10416111",
//     email: "ngale@gmail.com",
//     jurusan: "Sistem Komputer",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Aslegedes",
//     npm: "10416222",
//     email: "aslegedes@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 3,
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// // End Synchronous Callback

// // Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// Jquery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
// // End Asynchronous Callback
