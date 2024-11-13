var Some = function (v) { return ({ kind: 'left', value: v }); };
var None = function () { return ({ kind: 'right', value: false }); };
// toepassing
var x = Some(42);
var y = None();
console.log(x);
console.log(y);
function printOptionValue(opt) {
    if (opt.kind === 'left') {
        console.log("Value is:", opt.value);
    }
    else {
        console.log("No value present");
    }
}
printOptionValue(x);
printOptionValue(y);
// opdracht 2
var sumupto = function (n) {
    if (n < 0) {
        return 0;
    }
    return n + sumupto(n - 1);
};
console.log(sumupto(5));
