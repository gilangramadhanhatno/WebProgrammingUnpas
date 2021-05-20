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

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
