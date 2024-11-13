"use strict";
const sumUpTo = (n) => {
    if (n == 1) {
        return 1;
    }
    return sumUpTo(n - 1) + n;
};
const factorial = (n) => {
    if (n == 1) {
        return 1;
    }
    return factorial(n - 1) * n;
};
const exponential = (n) => {
    if (n == 1) {
        return 1;
    }
    return Math.pow(exponential(n - 1), n);
};
