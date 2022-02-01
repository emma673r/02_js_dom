const h1 = document.querySelector("h1:first-child");
const h2 = document.querySelector("h2:first-child");

const h3 = document.querySelectorAll("h3:nth-child(2)");
const firstH3 = document.querySelector("#article_1 h3:nth-child(2)");
const secondH3 = document.querySelector("#article_2 h3:nth-child(2)");

const article1 = document.querySelector("article:first-child");
const article2 = document.querySelector("article:nth-child(2)");

const section = document.querySelector("section:nth-child(2)");

const img = document.querySelectorAll("img:first-child");
const img1 = document.querySelector("#article_1 img:first-child");
const img2 = document.querySelector("#article_2 img:first-child");

const p = document.querySelectorAll("p:nth-child(3)");

const footer = document.querySelector("footer:nth-child(3)");

const main = document.querySelector("main:nth-child(2)");

const header = document.querySelector("header:first-child");

console.log(h1);
console.log(h2);
console.log(firstH3);
console.log(secondH3);
console.log(h3);
console.log(article1);
console.log(article2);
console.log(img);
console.log(img1);
console.log(img2);
console.log(p);
console.log(footer);
console.log(main);
console.log(header);
console.log(section);

h1.textContent = "Noget andet";

firstH3.innerHTML = "noget andet igen til først h3";
secondH3.innerHTML = "noget andet igen til anden h3";

img1.setAttribute("src", "https://placeimg.com/640/480/arch");
img1.setAttribute("alt", "placeholder architecture");
img2.setAttribute("src", "https://placeimg.com/640/480/people");
img2.setAttribute("alt", "placeholder people");


const article3 = document.createElement("article");
section.appendChild(article3);

article3.setAttribute("id", "article_3");

const thirdH3 = document.createElement("h3");
thirdH3.innerHTML = "title til article 3"
article3.appendChild(thirdH3)

const img3 = document.createElement("img");
img3.setAttribute("src", "https://placeimg.com/640/480/arch");
article3.appendChild(img3);

const p3 = document.createElement("p");
p3.textContent = "lorem lorem lorem blabla"
article3.appendChild(p3);