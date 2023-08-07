import React from 'react'

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

export default function Practice({image, text}) {
    const bg = {
        backgroundColor: 'grey',
        width: '130px',
        height: '130px',
}

    return (
      <div className="contain">
        <div style={bg}>
          <img style={{width: '100px', height: '100px'}}
            src={image}
            alt=""
          />
        </div>
       {text}
      </div>
    );
}

