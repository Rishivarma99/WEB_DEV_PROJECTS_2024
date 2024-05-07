
// SRC MUST BE IN ''

const backgroundImgDiv = document.getElementById("my-element");
const imgTag = document.querySelector("img[src='./img_2.jpeg']");
console.log(backgroundImgDiv);
console.log(imgTag);
// console.log(imgTag.src);
backgroundImgDiv.style.backgroundImage = `url(${imgTag.src})`;