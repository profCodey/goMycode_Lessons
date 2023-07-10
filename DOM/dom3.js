// const box = document.querySelector('#box');
// const btn = document.querySelector('#btn')

// box.style.width = "150px";
// box.style.height = "150px";
// box.style.backgroundColor = 'red'

// btn.addEventListener("click", function changeColor() {
//   box.style.backgroundColor = "blue";
// });

const container = document.querySelector("#container");

const counter = document.querySelector("#counter");

const decreaseBtn = document.querySelector("#decrease");

const increaseBtn = document.querySelector("#increase");

const parent = document.getElementById("btnParent");

const resetBtn = document.createElement("button");

parent.appendChild(resetBtn);

resetBtn.textContent = "Reset";
console.log(resetBtn);

increaseBtn.style.backgroundColor = "red";

container.style.textAlign = "center";
counter.style.fontSize = "100px";

decreaseBtn.addEventListener("click", function () {
  if (Number(counter.textContent) > 0)
    counter.textContent = Number(counter.textContent) - 1;
});

increaseBtn.addEventListener("click", function () {
  counter.textContent = Number(counter.textContent) + 1;
});

// resetBtn.onclick = reset

resetBtn.addEventListener("click", reset);

function reset() {
  counter.textContent = 0;
}

const text = document.querySelector("#text");

text.style.fontSize = "60px";

text.addEventListener("mouseenter", () => mouseover1());
text.addEventListener("mouseleave", () => mouseleave());

function mouseover1() {
  text.style.color = "green";
}

function mouseleave() {
  text.style.color = "blue";
}
