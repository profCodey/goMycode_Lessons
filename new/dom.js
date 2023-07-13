// // Get DOM elements
// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const counterSpan = document.getElementById("counter");

// // Initial counter value
// let counter = 0;

// // Update the counter value and display it
// function updateCounter(value) {
//   counter += value;
//   counterSpan.textContent = counter;
// }

// // Event listener for the increase button
// increaseBtn.addEventListener("click", function () {
//   updateCounter(1);
// });

// // Event listener for the decrease button
// decreaseBtn.addEventListener("click", function () {
//   updateCounter(-1);
// });

//create your element
//append it to HTML
//add your text content

let body = document.querySelector("body");

let parent = document.createElement("div");
body.appendChild(parent);

let counter = document.createElement("span");
parent.appendChild(counter);
counter.textContent = 0;
counter.style.fontSize = "70px";

let incrementBtn = document.createElement("button");
parent.appendChild(incrementBtn);
incrementBtn.id = "increase";
incrementBtn.textContent = "Increase";

let decrementBtn = document.createElement("button");
parent.appendChild(decrementBtn);
decrementBtn.id = "decrease";
decrementBtn.textContent = "Decrease";

let btnParent = document.createElement("div");
parent.appendChild(btnParent);

let reset = document.createElement("button");

btnParent.append(incrementBtn, decrementBtn, reset);

reset.textContent = 'reset'

// btnParent.appendChild(incrementBtn)
// btnParent.appendChild(decrementBtn)

incrementBtn.addEventListener("click", () => {
 counter.textContent = Number(counter.textContent)+1;
});


decrementBtn.onclick = decreseCount
// decrementBtn.addEventListener("click", decreseCount);

// reset.addEventListener('click', function () {
//   counter.textContent = 0;
// })


function decreseCount(){
  counter.textContent > 0
    ? (counter.textContent = Number(counter.textContent) - 1)
    : "";
}