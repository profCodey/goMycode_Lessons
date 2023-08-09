import React, { useEffect } from "react";
import { useState } from "react";

const products = [
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
    name: "Sued Ankle Sneakers",
    src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/086877/1.jpg?8017",
    price: 4800,
  },
  {
    productId: 4,
    name: "Trendy Mens Casual Shoes",
    src: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/0283522/1.jpg?2106",
    price: 10500,
  },
];

function Practice2() {
  const [myName, setMyName] = useState("Lanre");
  const [apiResult, setApiResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("Abiodun");
  // const [secondName, setSecondName] = useState("Lanre");
  // let myName = "Adeshina";
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(
    function () {
      setApiResult(products);
    },
    [apiResult]
  );

  console.log(apiResult);
  function handle() {
    if (myName === "Adeshina") {
      setMyName("Abiodun");
    } else if (myName === "Abiodun") {
      setMyName("Lanre");
    } else setMyName("Adeshina");
  }

  function handleChangeName() {
    handle();
    window.alert("My name is " + myName);
    document.title = "My name is " + myName;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let userLogin = {
      email: email,
      password: password,
    };
    console.log(userLogin);
  }

  return (
    <div>
      <div>
        <h1>My name is {myName}</h1>
      </div>
      <button onClick={handleChangeName}>Click here</button>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            value={setEmail((e) => e.target.value)}
            onChange={(e) => e.target.value}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => e.target.value}
            value={setPassword((e) => e.target?.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Hello {myName ? myName : "there"}</h2>

      {myName ? (
        <img
          src="https://cdn.punchng.com/wp-content/uploads/2022/06/30203106/png_20220630_203000_0000-313x179.png"
          alt=""
        />
      ) : null}
    </div>
  );
}

export default Practice2;
