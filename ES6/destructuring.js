const student = {
    name: "nifemi",
    gender: 'female',
    age: 40,
    maritalStatus: 'single',
    city: 'Lagos'
}

console.log(student['name']);

const { city, maritalStatus } = student

console.log(city);
console.log(maritalStatus);


const profile = ["Lagos", "Hakeeb", "Nigerian"];
let index = profile.indexOf("Nigeria")
profile[index]
const [state, name, citizen] = profile;
console.log(state);
// console.log(ctitizen);

let studentScore = [45, 23, 54, 65, 76, 43]
let studentName = ['Lanre', 'Hakeeb', 'Dami', 'Tofunmi']
let copy = studentScore.slice()
console.log(copy);

let copy2 = [...studentScore, ...studentName]
console.log(copy2);

