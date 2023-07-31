// import "./App.css";

// import React from "react";
// import Container from "./components/container/container";
// const products = [
//   {
//     productId: 1,
//     name: "Men Sneaker Sport",
//     src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/0836241/1.jpg?1218",
//     price: 9300,
//   },
//   {
//     productId: 2,
//     name: "Mens Casual Shoes",
//     src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/629476/1.jpg?3550",
//     price: 5900,
//   },
//   {
//     productId: 1,
//     name: "Women Casual Socks",
//     src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/5690261/1.jpg?6837",
//     price: 3100,
//   },
//   {
//     productId: 3,
//     name: "Suded Ankle Sneakers",
//     src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/086877/1.jpg?8017",
//     price: 4800,
//   },
//   {
//     productId: 4,
//     name: "Trendy Mens Casual Shoes",
//     src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/0283522/1.jpg?2106",
//     price: 5500,
//   },
// ];

// function App() {
//   return (
//     <div className="text">
//       {/* <Container /> */}

//       {products.map((value) => (
//         <div>
//           <p>{value.productId}</p>
//           <p>{value.name}</p>
//           <img src={value.src} alt="" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import "./App.css";
import React from 'react'
import Homepage from "./components/props/homepage";
import UseState from "./components/hooks/useState";

function App() {
  return (
    <div>
      <div>App</div>
      {/* <Homepage /> */}
      <UseState />

    </div>
  )
}

export default App