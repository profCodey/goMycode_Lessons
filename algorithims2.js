
//To get the element in any array, you use the nameOfArray[index]
//Example -To get the position of any element an array named Fruits = array[index]
//Last index in any array = Length of Array - 1 (i.e Total length - 1)
//To get the last element in any array = array[array.length - 1]
//To get the element at the first position - array[0]


let name = "Lnanre";
let names = ["Dami", "Lanre"]

names[2]

const fruits = ["mango", "orange", "pineapple", "banana", "pearl"];
fruits[0]
// fruits[index];
console.log(fruits.length);
const lastFruitInArray = fruits.length - 1;
console.log(fruits.length -1)




const people = ["Akeeb", "Lanre", "Nifemi", "Demilade", "Dami", "Sola", "Tobi"];
console.log(people.length);
const lastPersonInArray = people[6];

// const lastPoistionOfAnyArray = array.length - 1

//Length of an array - 1 = last position of an array


//from left to right
//open each doors and 
//check if 50 is there
//if she sees 50 
//return true
//else
//return false


//for i, from index 0 to index n-1 
//drawer[i]

//time complexity of an algorithm that multiplies two numbers


//0 7



//check the array
//if the middle is the number is 50
//return true
//else if the middle is greater than 50 or less than 50
//If the middle is less than 50
//Search the right side
//else if the middle is greater than 50
//Search the left side

//if (array[middle] === 50) 
//return true
//else if (array[middle] < 50)
//search the right side
//else if (array[middle] > 50)
//search the left side
//else array does not contain 50
//return false


//swithc case
//case 1: array[middle] === 50
//return true
//case 2: array[middle] < 50
//search the right side
//case 3: array[middle] > 50
//search the left side
//default: return false



//check index Math.min((0 + (array.length - 1))/2)

let className = ["sola", "lanre", "dami", "nifemi", "demilade", "tobi", "akeeb", "dami", "lanre", "nifemi", "demilade", "tobi", "akeeb" ];

let middleIndex = ((0 + className.length - 1) / 2)
console.log(middleIndex);
// console.log(className[result]);
console.log(className[middleIndex]);