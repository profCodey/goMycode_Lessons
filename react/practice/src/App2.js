import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import jsonObj from "./components/checkpointJSX/product";
import Image from "./components/checkpointJSX/Image";
import Name from "./components/checkpointJSX/Name";
import Price from "./components/checkpointJSX/Price";
import Description from "./components/checkpointJSX/Description";
let plainObj = JSON.parse(jsonObj);

function App() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={plainObj.image} />
        <Card.Body>
          <Card.Title><Name name={plainObj.name} /></Card.Title>
          <Card.Text>
            <Description description={plainObj.description} />
          </Card.Text>
          <Card.Text>
            <Price price={plainObj.price} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
