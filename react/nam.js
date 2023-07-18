function squareDigits(num){
    console.log(num);
    let count = '';
    let string = num.toString()
    for (let char of string) {
        let square = Math.pow(Number(char), 2)
    let str = square.toString()
        count += str
}
console.log(count);
  
}


console.log(squareDigits(959));