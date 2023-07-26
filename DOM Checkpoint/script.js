// let container = document.getElementById("container");

// let cart = [
//   {
//     name: "Modern White Chair",
//     category: "chair",
//     quantity: 1,
//     price: 7000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhwyRuqttNlrhpQ5Rksq8aQ1zDnKbZNeZKg&usqp=CAU",
//   },
//   {
//     name: "Wooden Bench",
//     category: "chair",
//     quantity: 1,
//     price: 9500,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwotJwOGl9eM-mzxyOP3KNCuiXtLYZSlf3w&usqp=CAU",
//   },
//   {
//     name: "Wooden White Stool",
//     category: "chair",
//     quantity: 2,
//     price: 9500,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwotJwOGl9eM-mzxyOP3KNCuiXtLYZSlf3w&usqp=CAU",
//   },
// ];

// for (let obj of cart) {
//   let product = document.createElement("div");
//   container.appendChild(product);
//   product.className = "product";

//   let image = document.createElement("img");

//   product.appendChild(image);

//   image.setAttribute("src", obj.img);

//   let category = document.createElement("p");
//   let price = document.createElement("p");
//   let name = document.createElement("p");
//   let quantity = document.createElement("p");

//   let details = document.createElement("div");

//   category.textContent = obj.category;
//   price.textContent = obj.price;
//   name.textContent = obj.name;
//   quantity.textContent = obj.quantity;

//   category.className = "category";
//   price.className = "price";
//   name.className = "name";
//   quantity.className = "quantity";

//   product.append(category, price, name, quantity);

//   product.appendChild(details);
//   details.append(category, price, name, quantity);

//   details.id = "details";

//   let imageDiv = document.createElement("div");
//   product.appendChild(imageDiv);
//   imageDiv.appendChild(image);
//   imageDiv.id = "imageDiv";
// }




let incrementBtn = document.querySelectorAll(".increment");
let decrementBtn = document.querySelectorAll(".decrement");
let quantity = document.querySelectorAll(".quantity");
console.log("quantity", quantity);
let newTotalPrice = document.querySelectorAll(".product-price");
let cartTotal = document.querySelector(".cart-total");

// incrementBtn.addEventListener();

let incrementSinglePrice;
incrementBtn.forEach((value, i) => {
  value.addEventListener("click", function () {
    if (!incrementSinglePrice)
      incrementSinglePrice = newTotalPrice[i].textContent;
    quantity[i].textContent = Number(quantity[i].textContent) + 1;
    let total = Number(quantity[i].textContent) * incrementSinglePrice;
    newTotalPrice[i].textContent = total;

    console.log(newTotalPrice, "newTotalPrice");
    let sumArr = [...newTotalPrice];
    let sum = sumArr.reduce((acc, value) => acc + Number(value.textContent), 0);
    cartTotal.textContent = "#" + sum;
  });
});

let decrementSinglePrice;
decrementBtn.forEach((value, i) => {
  value.addEventListener("click", function () {
    if (quantity[i].textContent >= 1) {
      quantity[i].textContent = Number(quantity[i].textContent) - 1;
      if (!decrementSinglePrice)
        decrementSinglePrice = newTotalPrice[i].textContent;
      let total = Number(quantity[i].textContent) * decrementSinglePrice;
      console.log("total", decrementSinglePrice);
      newTotalPrice[i].textContent = total;
    }
  });
});

let total = 0;
allPrice.forEach((value) => (total += value));
