// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// // console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan!");
    }
  });
}
// then dan catch
// const coba = cobaPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

// async await
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.error(error);
  }
}
cobaAsync();
