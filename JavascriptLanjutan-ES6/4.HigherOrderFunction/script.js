// mencari angka >= 3
// for
// const angka = [3, 2, -2, 8, 5, -6, 9, 0, 2, -3];
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter
// const angka = [3, 2, -2, 8, 5, -6, 9, 0, 2, -3];
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// const angka = [3, 2, -2, 8, 5, -6, 9, 0, 2, -3]; // kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// const angka = [3, 2, -2, 8, 5, -6, 9, 0, 2, -3]; // jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// method chaining
// const angka = [3, 2, -2, 8, 5, -6, 9, 0, 2, -3];
// // cari angka >= 5
// const hasil = angka
//   .filter((a) => a >= 5) // 8, 5, 9

//   // kalikan 3
//   .map((a) => a * 3) // 24, 15, 27

//   // jumlahkan
//   .reduce((acc, currVal) => acc + currVal); //

// console.log(hasil);

// LATIAN
// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam, menit, detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;
