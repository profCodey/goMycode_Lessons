function drinkResponsibly(age) {
  let drink = 13;
  switch (age) {
    case 13:
      drink = "drink toddy";
      break;
    case 17:
      drink = "drink coke";
      break;
    case 18:
      drink = "drink beer";
      break;
    case 20:
      drink = "drink beer";
      break;
    case 30:
      drink = "drink whisky";
      break;
    default:
      drink = "we dont know age";
  }

  return drink;
}

const drinkToSell = drinkResponsibly(90);
console.log(drinkToSell);

function checkPalindrome(word) {
  let lowerWord = word.toLowerCase();
  for (let i = 0; i < Math.ceil(lowerWord.length / 2); i++) {
    j = lowerWord.length - 1 - i;

    if (lowerWord[i] !== lowerWord[j]) {
      return "Its not a palindrome";
    }

    return "Its a palindrome";
  }
}

let name = "HaKeeB";

function checkIfPalindrome(word) {
  //Convert sola to small letters
  let smallLetters = word.toLowerCase();
  console.log(smallLetters);

  //convert the string to array
  let convertToArr = smallLetters.split("");
  console.log(convertToArr);

  //reverse the array
  let reverse = convertToArr.reverse();
  console.log(reverse);

  //convert the array back to string
  let string = reverse.join("");
  console.log(string);

  //check if the word and the reverse word are the same
  if (smallLetters === string) {
    return "Its a palindrome";
  } else return "Its not a palindrome";
}

function checkIfWordIsPalindrome(word) {
  return word === word.toLowerCase().split("").reverse("").join("")
    ? "it's a palindrome"
    : "Its not a palindrome";
}

console.log(checkIfWordIsPalindrome("hannahs"));

//the the word
//convert it to an array
//reverse the array
//convert back to string
//compare the word with the reversed word

//Tenary operator
// let studentName = "Lanre";
// if (studentName === "Lanre") {
//   return "You have just won 20 million Naira";
// } else "No student worn";

// studentName === "Lanre" ? "You have won 20 million naira" : "No student worn";

// const result = checkIfPalindrome("sola");
// console.log(result);

// let str2 = "sola";

// let arr2 = str2.split("");
// console.log(arr2.reverse());

// console.log(checkIfPalindrome("Sola"));

// console.log(name.toUpperCase());
// console.log(checkPalindrome("HanNah"));

//get word
//reverse word and store into a vairable reverdedWord
//if word equals reversed return "is a palindrome"
//else return "is not a palindrome"

let word = "Lanre";
let reversedWord = "ernaL";

let word2 = "Hannah";
let reversedWord2 = "hannaH";

// DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 -- > "drink whisky"

let hakeeb = [4, 5, 2, 3, 4, 6];


testScores = [65, 55, 70]
let newScores = testScores.splice(0, 0, 50)
let count = 50;
console.log(testScores);  


let res = hakeeb.sort();
console.log(res);
console.log(res.length);

(a,b)=> a-b

// function minusTwoNum(a, b) {
//   return a-b
// }

const minusTwoNum = (a, b) => a - b;
let res2 = minusTwoNum(3, 2)
console.log(res);



function betterThanAverage(classPoints, yourPoints) {
  // Your code here
classPoints.push(yourPoints);
console.log(classPoints);

  let totalScore = 0;
  for (let i = 0; i < classPoints; i++) {
    totalScore += classPoints[i];
  }

  console.log(totalScore);
  let averageScore = totalScore / classPoints.length;
  console.log(averageScore);

  return yourPoints > averageScore;
}

console.log(betterThanAverage([2, 3], 5));