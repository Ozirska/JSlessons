// const addImage = (imgSrc) => {
//   const p = new Promise((resolve, reject) => {
//     const imgElem = document.createElement("img");
//     imgElem.setAttribute("alt", "my photo");
//     imgElem.src = imgSrc;
//     const containerElem = document.querySelector(".page");
//     containerElem.append(imgElem);

//     const onImageLoaded = () => {
//       const { width, height } = imgElem;
//       resolve({ width, height });
//     };

//     imgElem.addEventListener("load", onImageLoaded);

//     imgElem.addEventListener("error", () =>
//       reject(new Error("Image load is failed"))
//     );
//   });
//   return p;
// };

// const onImageLoaded = (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
// };

// const result = addImage(
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
// );
// console.log(result);

const addImage = (imgSrc, callback) => {
  // put your code here
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "my photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener("load", onImageLoaded);

  imgElem.addEventListener("error", () => callback("Image load is failed"));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector(".image-size");

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
  onImageLoaded
);

// const addImageV2 = (url) => {
//   // put your code here
//   const addImage = new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.setAttribute("alt", "User avatar");
//     img.src = url;

//     const pageElem = document.querySelector(".page");
//     pageElem.append(img);

//     const onImageLoaded = () => {
//       const { width, height } = img;
//       resolve({ width, height });
//     };

//     img.addEventListener("load", onImageLoaded);

//     img.addEventListener("error", () => reject(new Error("Image load failed")));
//   });
//   return addImage;
// };

// // examples

// addImageV2(
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
// );
//   .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch((error) => console.log(error)); // ==> 'Image load failed'
