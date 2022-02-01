let tal = 0;
const btn = document.querySelector("button");
const img = document.querySelector("img");

let images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
];

btn.addEventListener("click", næsteBillede);

function næsteBillede() {
  if (tal < 7) {
    tal++;
    console.log(images[tal]);
    img.src = "billeder/" + images[tal];
  } else {
    tal = 0;
    img.src = "billeder/" + images[tal];
  }
}
