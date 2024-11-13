var Some = function (v) { return ({ kind: 'left', value: v }); };
/*
const Some = <a>(v: a): Option<a> => {
    return {kind: 'left', value: v}
}
*/
var None = function () { return ({ kind: 'right', value: false }); };
/*
const None = <a>(): Option<a> => {
    return {kind: 'right', value: false}
}
*/
var x = None();
var y = null;
y + 1;
if (x.kind == 'left') {
    x.value + 1;
}
// 2.
// Iterative function
var sumUpTo = function (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
// Recursive function
var sumUpToRec = function (n) {
    if (n == 0) {
        return 0;
    }
    return n + sumUpToRec(n - 1);
};
// Checks if the two functions are equal for all n from 0 to n
var checkRecWithRec = function (n) {
    if (sumUpTo(n) == sumUpToRec(n)) {
        return true;
    }
    else if (n == 0) {
        return false;
    }
    else {
        return checkRecWithRec(n - 1);
    }
};
// Checks if the two functions are equal for all n from 0 to n
console.log(sumUpTo(5) == sumUpToRec(5));
