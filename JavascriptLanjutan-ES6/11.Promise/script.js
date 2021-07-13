// AJAX
// $.ajax({
//   url: `http://www.omdbapi.com/?apikey=9366b3bd&s=avengers`,
//   success: (movie) => console.log(movie),
// });

// VANILA JAVASCRIPT
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status == 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=9366b3bd&s=avengers");
// xhr.send();

// FETCH
// fetch(`http://www.omdbapi.com/?apikey=9366b3bd&s=avengers`)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// PROMISE
// Object yang merepresentasikan kerbhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fullfiled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar Janji");
//   }
// });
// janji1.then((response) => console.log(`OK! : ${response}`)).catch((response) => console.log(`NOT OK.. : ${response}`));

// // contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });
// console.log("mulai");
// // // Promise
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log(`OK! : ${response}`))
//   .catch((response) => console.log(`NOT OK.. : ${response}`));
// console.log("selesai");

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Aslegedes",
        pemeran: "Gilang, Indira",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta",
        temp: "27",
        kondisi: "cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
