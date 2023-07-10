// let para = document.getElementsByClassName("paragraph");

// console.log("CLASS NAME", para);

// let para2 = document.getElementById("para2");
// console.log("para2", para2.textContent);

// let para3 = document.getElementsByTagName("p");
// console.log("Tag Name", para3[1]);

// const para4 = document.querySelector("p");

// console.log(para4, "query selector");

// const para5 = document.querySelectorAll("p");

// console.log(para5[0], "query selector all");

let intro = document.querySelector("#welcome");

let text = intro.textContent;
intro.textContent = "Hello everybody.This is Intro to Javascript bootcamp";

intro.innerHTML = `<h2>Hello everybody.This is Intro to Javascript bootcamp</h2>`;

let image = document.querySelector("img");

image.setAttribute("width", "700px");

let width = image.getAttribute("width");

console.log(image);

console.log(width);

image.setAttribute(
  "src",
  "data:image/jpeg;base64,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"
);
console.log(intro);

// image.removeAttribute("src");

console.log(image.hasAttribute("src"));

image.style.borderRadius = "50%";

intro.style.fontSize = "40px";

intro.style.color = "red";
