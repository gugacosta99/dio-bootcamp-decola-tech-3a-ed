/* function isPositive(n){
    return !(n < 0);
} */

const isPositive = function(n){
    return !(n < 0);
}

let a = isPositive(2);
let b = isPositive(-2);
let c = isPositive(22);

console.log(a);
console.log(b);
console.log(c);

/* console.log(isPositive(2));
console.log(isPositive(-2));
console.log(isPositive(45));
console.log(isPositive(-10252)); */