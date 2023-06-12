

// Put a list of all positions in an array
//When the there is a request for the position
//Return the a response of all INEC position
//Check the position field of the candidate
//Check if position is either President, Vice President or Secretary
//IF its any of the above, BREAK
//IT it is any of the above, Store the age in a variable
//If the position is president, store the age in a variable called presidentAge
//If the position is vice president, store the age in a variable called vicePresidentAge
//If the position is secretary, store the age in a variable called secretaryAge
//IF its a number, CONTINUE
//ELSE RETURN AN ERROR - Kindly input a number
//Make a request to NIN API to confirm the age of the candidate
//IF response is true, CONTINUE
//SUM the ages of the candidates together
//SUM = presidentAge + vicePresidentAge + secretaryAge
//IF SUM of their ages is greater than 160 
// Return "NOT QUALIFIED"
//IF SUM OF AGES IS LESS THAN OR EQUAL TO 160
//Return "QUALIFIED"

//Integer/Number
let myAge = 10;
console.log(typeof myAge);
//String
let myName = "Lanre";
console.log(typeof myName);
//Boolean
let nifemi = "female";
console.log(nifemi == "female")
//Array

//Object
//Null
//Undefined
//Float
let mySchoolFees = 10325.76





// console.log(noOfCandidates)



// const lanresFavouriteFood = "Rice"
// lanresFavouriteFood = "Beans";



// let lanresFavouriteFood;
// lanresFavouriteFood = "Rice"



//let presdenteAge = 77
//var presidentAge = 77
//const presidentAge = 77

//var presidentAge = 88


// take in the first input
//check if first input is [ '*', '/']
//Throw an error - Kindly input a number

//CREATE AN APPLICATION THAT STORES TWO NUMBERS
//TAKE IN THE FIRST NUMBER
//STORE IN A VARIABLE CALLED FIRST NUMBER
//TAKE IN THE SECOND NUMBER
//STORE IN A VARIABLE CALLED SECOND NUMBER
//ADD FIRST NO. WITH SECOND NUMBER TOGETHER
//STORE THE RESULT IN A VARIABLE CALLED SUM
//RETURN SUM

function add(a, b) {
    let firstNumber = a;
    let secondNumber = b;
    let summation;
    summation = firstNumber + secondNumber;
  return summation;
}

console.log(add(344, 599));   

//take in the score as input
//check if score is greater 100
//if so, throw an error "OGA, YOU WAN CARRY OUT MARK AWAY"
//if it is not a number, throw an error "Kindly input a number"
//store the score into a variable called "studentMark"
//check if the score is between 71 - 100
//if it is, return "EXCELLENT"
//check if the score is between 51 - 70
//if it is, return "GOOD"
//check if the score is between 41 - 50
//if it is, return "FAIR"
//check if the score is between 0 - 40
//if it is, return "FAILED"

function grade(score) {
    let studentMark = score;
    if (typeof studentMark !== "number") {
    return "Kindly input a number";
    }
    if (studentMark > 100) {
    return  "Invalid score, a student cannot score more than 100%"
    }
    if (studentMark >= 71 && studentMark <= 100) {
        return "EXCELLENT";
    }
    if (studentMark >= 51 && studentMark <= 70) {
        return "GOOD";
    }
    if (studentMark >= 41 && studentMark <= 50) {
        return "FAIR";
    }
    else return "FAILED";
}

console.log(grade("1O"));