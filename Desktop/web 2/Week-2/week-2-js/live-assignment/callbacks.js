function multiply (a, b) {
    return a*b;
}
function add(a, b){
    return a + b; 
}
function subtract(a, b){
    return a - b;
}
function divide(a, b){
    return a / b;
}
function allInOne(a, b, operator){
    return operator(a, b);
}

console.log(allInOne(2, 3, multiply));
console.log(allInOne(2, 3, add));
console.log(allInOne(2, 3, subtract));

