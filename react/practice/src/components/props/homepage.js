import React from "react";

// import Header from "../container/header";
import Form from "./form";
import Button from "./button";
import Container from "./container";

function Homepage() {
  let formStyle = { marginBottom: "100px" };

  let btnStyle = {
    fontSize: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#F68B1F",
    color: "white",
    border: "none",
  };

  let btnStyle2 = {
    fontSize: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#F68B1F",
    color: "white",
    border: "none",
    width: "500px",
  };

  // function handleButton() {
  //   console.log("HALLLOOOOOOOO")
  // }
  function handleButton() {
    console.log("HALLLOOOOOOOO");
    console.log("HOW ARE YOU");
    console.log("Today is friday");
    console.log("I am in the master branch");
    alert("You just clicked this button")
  }
  return (
    <div>
      <button onClick={handleButton}>Click me</button>

      <div>Welcome to Gomycode. Kindly register</div>

      <div style={formStyle}>
        <Form text1="First Name" text2="Last Name" />
        <Button btns="send" buttonCSS={btnStyle} />
      </div>

      <div style={formStyle}>
        <Form text1="Username" text2="Maiden Name" />
        <Button btns="finish" buttonCSS={btnStyle} />
      </div>

      <div style={formStyle}>
        <Form text1="Maths" text2="English" />
        <Button btns="submit" buttonCSS={btnStyle2} />
      </div>

      <Container>
        <div style={{ color: "#fff" }}>
          <h1>Header</h1>
          <p>Paragraph</p>
          <Button btns="Submit" buttonCSS={btnStyle} />
        </div>
      </Container>
    </div>
  );
}

export default Homepage;

// let props = {
//   text1: "Username",
//   text2: "Maiden Name",
// }

// let props = {
//   text1: "Maths",
//   text2: "English",
// }
