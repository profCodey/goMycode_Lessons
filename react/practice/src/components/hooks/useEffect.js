import React from "react";
import { useEffect, useState, useRef } from "react";

let api = {
  products: [
    {
      productId: 1,
      name: "Men Sneaker Sport",
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/0836241/1.jpg?1218",
      price: 9300,
    },
    {
      productId: 2,
      name: "Mens Casual Shoes",
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/629476/1.jpg?3550",
      price: 5900,
    },
    {
      productId: 1,
      name: "Women Casual Socks",
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/5690261/1.jpg?6837",
      price: 3100,
    },
    {
      productId: 3,
      name: "Suded Ankle Sneakers",
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/086877/1.jpg?8017",
      price: 4800,
    },
    {
      productId: 4,
      name: "Trendy Mens Casual Shoes",
      src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/0283522/1.jpg?2106",
      price: 5500,
    },
  ],
};

function SideEffects() {
  const [pageTitle, setPageTitle] = useState("Gomycode Class");
  const [homeAppliance, setHomeAppliance] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let myName = useRef("");

  useEffect(() => {
    setHomeAppliance(api);
  }, [homeAppliance]);

  function handleChangeTitle() {
    setPageTitle("Welcome To Gomycode");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName(myName.current.value);
    console.log(myName.current.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            ref={myName}
          />
        </label>
        <label>
          email:
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h1>Side Effects</h1>
      <p>Today we will be discussing on creating side effects</p>

      <button onClick={handleChangeTitle}>Change Page Title</button>
    </div>
  );
}

export default SideEffects;
