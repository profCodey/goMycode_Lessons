import React from "react";
import "./products.css";



function Products({pics, title}) {
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={pics} alt="product" />
      </div>
      <p className="text">{title}</p>
    </div>
  );
}

export default Products;


function add (a, b) {
  return a + b
}