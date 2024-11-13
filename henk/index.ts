"use strict"
// ==================================================
type Henk = { henk: "Henk" };
const henk : Henk = { henk: "Henk" };
console.log(typeof henk) // object, no Henk :(
// ==================================================
const sumUpTo2 = (n: number): number => {
    if (n == 1) return 1
    return sumUpTo2(n-1)+n;
}
console.log(sumUpTo2(5)); // 15
// ==================================================
// 5! = 1×2×3×4×5 = 120
const factorial = (n: number): number => {
    if (n == 1) return 1;
    return factorial(n-1)*n;
}
console.log(factorial(5)); // 120