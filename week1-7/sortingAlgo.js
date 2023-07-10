function fibonnaci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}

console.log(fibonnaci(10));

function recursive(n) {
    if (n > 10) {
        console.log("Recursion has ended")
        return;
    }
console.log(n);
    recursive(n+1);
}

console.log(recursive(1));

function sumNumbers(n, total = 0) {
   
    if (n === 0) {
        return total;
    }
    return sumNumbers(n-1, total + n);

}


console.log(sumNumbers(15));

