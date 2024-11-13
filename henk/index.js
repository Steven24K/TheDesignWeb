"use strict";
const henk = { henk: "Henk" };
console.log(typeof henk); // object, no Henk :(
// ================================
const sumUpTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumUpTo(5));
