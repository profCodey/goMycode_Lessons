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


container.style.textAlign = "center";
counter.style.fontSize = "100px";

decreaseBtn.addEventListener("click", function () {
    counter.textContent = Number(counter.textContent) - 1

});

increaseBtn.addEventListener("click", function () {
counter.textContent = Number(counter.textContent) +1
});
