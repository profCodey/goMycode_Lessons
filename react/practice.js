console.log('Halleluyah');
console.log("Halleluyah");
console.log("Halleluyah");
console.log("Halleluyah");
console.log("Halleluyah");



// let c = 5;


// function addNumbers(a, b) {
//     if (c % 2 === 1) {
// return a + b +c
//     } return a + b;
// }




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


let newProducts = products.map((value) => {
 return JSON.stringify(value)
})

export default newProducts;

console.log(newProducts);

// console.log(addNumbers(2, 3));


  // accum("abcd") -> "A-Bb-Ccc-Dddd"
  // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  // accum("cwAt") -> "C-Ww-Aaa-Tttt"
//a-> A + aa
//R -> R

function accum(s) {
  console.log(s);
  // your code
  let result =  [...s]
    .map((value, index) => {
      return value.toUpperCase() + value.toLowerCase().repeat(index);
    })
    .join("-");
  
  return result
}


console.log(accum("ZpglnRxqenU"));

//convert the input string to an array
//Loop through the array
//Capitalize the first letter of each value
//return the value with occurence same as its index
//Join the array with a dash


//Each character is seperated by a daash
//The occurence of each character is based on the index of the character
//The beginning of each character is capitalized



let sample2 = [0, 1, 2, 3]
// console.log(s.split(''));
let myName = "Sola";
let newArr = [...myName]
console.log(newArr);
let sample3 = [...sample2]
console.log(sample2.join('-'));
console.log(sample3);




// myName = "Abiodun";
// console.log(myName);

// myName = "Adeshina";
// console.log(myName);



// let gomycode = 88;



// let fruit1 = "mango"
// let fruits2 = "banana"
// let fruit3 = "orange"


// let fruitlLoop = ['mango', 'banana', 'orange', 'apple', 'pineapple'];

// let answer = fruitlLoop.map(function(value) { return value })
// console.log(answer);



// for (let i = 0; i < 10; i++) {
//     console.log('Hello World!');
// }


// let props = {
//     firstName: 'Abiodun',
//     food: 'Pounded Yam'
// }

// let { firstName } = props


// let result = props['name']
// console.log(result);
// console.log(firstName);

// let arr = [3, 4, 3, 2, 3, 1, 3, 3];
// let halfLength = arr.length / 2;
// const obj = {};
// for (let value of arr) {
//     console.log(value);
//     if (obj[value]) { //check if the particular element is a key in the obj object
//         obj[value]+=1; // if the key exist, add one to the value
//     } else {
//         obj[value] = 1; // if the key does not exist, create the key and assign 1 to it
//     }
// }

// console.log(obj);

// for (let key in obj) {
//     console.log(key);
//     if (obj[key] > halfLength) {
//         return key;
//     } else return -1
// }



// ress['food'] = "Pounded Yam"
// console.log(ress);



    








