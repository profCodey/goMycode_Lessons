// let fruit = "apple";
// function nameOfFunction(parameter) {
//     // Code to be executed
// }

// function addTwoNumbers(priceOfCoke, priceOfGala) {
//     return priceOfCoke + priceOfGala;
// }



// let student1 = "Nifemi"
// console.log(addTwoNumbers(1500, 90));

// function calculateArea(length, breadth) {
//     let area = length * breadth;
//     return area;
// }
//     //return firstName + space + surname

// function returnFullName(firstName, surName) {
//     return firstName + " " + surName
// }

// console.log(returnFullName("Nifemi", "Adeyemi"));

// //ARITHMETIC VARIABLES
// //Adition operator
// let y = 4 + 17;
// console.log(y)
// //subtraction operator
// let z = 250 - 77;
// console.log(z)
// //multiplication operator
// let totalPrice = 150 * 2;
// console.log(totalPrice)
// //division operator
// let average = 150 / 2;
// console.log(average)
// //Exponentiation operator
// let exponent = 2 ** 3;
// console.log(exponent)
// //Modulus operator
// let result = 20 % 6
// console.log(result)




// // let ke = 0;
// //     do {
// //         console.log("hhhh")
// //         ke++;
// //     } while (ke <= 10);


// let age = 24// Number
// let name = "Nifemi"// String
// let isMarried = false// Boolean
// let middleName = null;// Null



// let solaAge;
// console.log(typeof femiAge)


//     let firstName = "Nifemi";

// function example(p) {
//     console.log(firstName);
//     var myCountry = "Nigeria";
//     return p
// }



// console.log(example(5))


// let myStreet = "Ogunlana Drive";
// let houseNumber = 22;
// let myCity = `${houseNumber} Surulere ${myStreet} Lagos`;

// console.log(myCity)


// let myAddress = houseNumber + " " + myStreet + " " + myCity;



// {
//   let myName = "Sola";
// }




//while loop
//for loop
// do while loop




//take in the interval
//take in the starting point
//take in the conditon - while the child is less than  18
// deduct 50k from parent and add 50k to child account


//declare the age of the child
//declare the parent account
//declare the child account
//declare the interval

//set condition to 18 years old
//deduct 50k from parent account
//add 50k to child account
//set the interval to 1 year




let parentAccount = 1000000;
let childAccount = 0;


let childAge = 5;
while (childAge < 18) {
    parentAccount = parentAccount - 50000
    childAccount = childAccount + 50000;
    // childAge+=3;
    childAge = childAge + 3;
}

// console.log(parentAccount)
// console.log(childAccount)



//loop through the array
//for each drawer/index, check if it contains 50 dollars
//if you see 50 dollars, stop the loop -break.



//current value of the condition
//while(condition){
//    code to be executed
//    increment
// }


//To the know the element at a given index in an array
//arrayName[index]
let drawer = [100, 70, 40, 30, 50, 67, 67, 90];
console.log(drawer[0])


// var i = 0;
// //As long a i have not moved through all the drawers
// while (i < drawer.length) {
//     //Keep checking for 50 dollars
//     //the current drawer i am on has 50 dollars
//     if (drawer[i] === 50) {
//         // console.log("I found 50 dollars at index" + " " + i)
//         console.log(`I found 50 dollars at index ${i}`);
//         break;
//     }
//     i += 1;
// }


// let i = 0;
// while (i < 11) {
//     console.log(i)
//     i +=2
// }

// let count = 1;
// while (count < 11) {
//     console.log("Halelluyah")
//     count += 1;
// }

// for (let i = 0; i < 11; i++) {
//     console.log("halleluyah")
// }


let count = 1; 
while (count < 8) {
    console.log("nifemi");
    count++;
}

for (let count = 1; count < 8; count++){
    console.log("nifemi");
}

for (let count = 0; count < 10; count++){
    console.log("sola")
}

let parentAccounts = 1000000;
let childAccounts = 0;
let childAges = 5;
for (let i = childAges; i < 18; i += 2){
    parentAccounts = parentAccounts - 75000;
    childAccounts = childAccounts + 75000;
}

console.log(parentAccounts)
console.log(childAccounts)
let sentence = "Tunde is rich";
let names = "sola"
names[1 + 1]

let counts = 0;
for (let i = 0; i <= sentence.length - 1; i += 1){
    if (sentence[i] === " " && sentence[i + 1] !== " ") {
            counts++;
    }
}

console.log(counts + 1)

//create a "count" varianble that will keep track of the number of space
//create a for loop
//if the current element is a space
//if its a space and the next element is not a space
//add the to count
//else continue

let fruits = ["mango", "orange", "banana", "apple"];
let name = "sola   is a girl"


let age = 10;
let newAge = age.toString()
newAge
 
let receptAmt = (100 / 3)
console.log(typeof receptAmt);

console.log(Number(receptAmt) + 50 + 100);

let result = receptAmt.toPrecision(4)
console.log(receptAmt);
console.log(result);

console.log(typeof age);
console.log(typeof newAge);
let myName = "sola"
let x = 10;
let square = x.toExponential(2)
console.log(x);
console.log(square);




let ten = "7.5" 

console.log(Number(ten));
console.log(parseInt(ten));
console.log(parseFloat(ten));


function getDayOfTheWeek(input) {
    let day;
    if (typeof input === String) {
        throw new Error("Input is not a number")
    }

    switch (input) {
      case 1:
        day = "Monday";
        break;

      case 2:
        day = "Tuesday";
        break;

      case 3:
        day = "Wedensday";
        break;

      case 4:
        day = "Thursday";
        break;

      case 5:
        day = "Friday";
            break;
        
      default:
        day = "Not a work day";
    }

    return day
}
console.log(getDayOfTheWeek("sola"));


function numberToString(num) {
  // Return a string of the number here!

    let result = num.toFixed(3);
    return result
}

let answer = numberToString(23.555);
console.log(answer);


let lanreFirstName = "Lanre"
let lanreLastName = "Olawunmi"
let lanreFavColor = "Black"
let lanreFavFood = "Beans"

let lanre = {
    firstName: "lanre",
    LastName: "olawunmi",
    favColor: "Black",
    favFood: "beans"
}
//TO ACCESS THE PROPERTIES OF AN OBJECT IN JAVASCRIPT
//dot notation - objName.key
//bracket notation objName['key']

let lname = lanre.LastName
let lcolor = lanre.favColor

console.log(lanre.LastName);
  console.log(lcolor);

let lanre2 = ["lanre", "olawunmi", "black", "beans"]
lanre[3]

console.log(lanre);

          

console.log(log());

function log() {
  return "I am happy";
} 
let arr = ["Keep","remove", "Keep", "Remove", "Keep"];
let newArr = ["Keep", "Keep"];
function removeEveryOther(arr) {
  let newArr = []
  //your code here
  for (let i = 0; i < arr.length; i+=2) {
    //If the current is in an even index
   newArr.push(arr[i])
  }
  return newArr;
}







let ans1 = removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])
console.log(ans1);


let classArr= [];
classArr.push("Hakeeb")
console.log(classArr);
classArr.push("Dami")
console.log(classArr);

let myDreamCar = {
  
}