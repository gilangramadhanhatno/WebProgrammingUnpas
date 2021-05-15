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
const angka = [3, 2, -2, 8, 5, -6, 9, 0, 2, -3];
// cari angka >= 5
const hasil = angka
  .filter((a) => a >= 5) // 8, 5, 9

  // kalikan 3
  .map((a) => a * 3) // 24, 15, 27

  // jumlahkan
  .reduce((acc, currVal) => acc + currVal); // 

console.log(hasil);
