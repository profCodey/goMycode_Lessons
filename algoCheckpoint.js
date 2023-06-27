

let sentence = "I am coming to Abuja next year february.";
let arr = [20, 30, 56]
console.log(sentence.length);


let age = 15;
age++;
age = age + 4;
age += 4;

age--;
age = age - 1;
age -= 1;


let amt = 50;
amt /= 2;
// amt = amt / 2;
console.log(amt)

let bGift = "Venza";
let cashGift = "3 million"
// check  if birthday gift is venza
console.log(bGift == "Kia") 




if (bGift == "Venza" || cashGift == "1 million") {
    console.log("You are correct!")
}

let salary = "49000";

if (typeof salary === "number") {
    console.log("i am a string")
}

phoneNumber = "0802345678"

function checkIfValideNumber(phoneNumber){
    if (phoneNumber.length != 11) {
        return "Please enter a valid phone number"
    }
    if (phoneNumber[0] != 0) {
        return "Please enter a valid phone number"
    }
    return "Number is valid"
}
//receive the input
//if student score is 70 and above
//return excellent
//else if student score is 60-69 and above
//return good
//else if student score is 50-59
//return fair
//else if student score is 40-49
//return fail



// if (hakeebsColor === "blue" || hakeebsFood == "pounded yam") {
//     console.log("You are correct")
// } else {
//     console.log("You are wrong")
// }







function markScript(score) {
    if (typeof score === "number") {
        return "Please, input a number"
    }
   if (score > 100 || score < 0) {
        return "Please input a valid score"
    }
    if (score >= 70) {
        return "Excellent"
    }
   else if (score >= 60 && score <= 69) {
        return "Good"
    }
   else if (score >= 50 && score <= 56) {
        return "Fair"
    }
   
    else return "Fail"
}

let hakeebsFood = "pounded yam";
let hakeebsColor = "red";

function verify(color) {
    if (hakeebsColor === "red") {
        console.log("You are correct")
    }
   if (hakeebsColor === "red") {
      console.log("You are correct");
    }
   if (hakeebsColor === "red") {
       console.log("You are correct");
    }
}
console.log(verify(hakeebsColor));


let a = "Abe"
let b = "okuta"
console.log(a+= b)

console.log(checkIfValideNumber(phoneNumber));

console.log(typeof salary)
'4' == 4

console.log("4" === 4);



let l = [2, 3, 5, 4];
let r = l;
l[0] = 8; 

console.log(r);

let k = 5;
let i = k;
k = 8;

console.log(i);









