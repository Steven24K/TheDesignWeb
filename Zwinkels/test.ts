// implement the option type with two constructor functions that each return one side of the option.

type Sum<a, b> = {kind: "left", v:a}|{kind: "right", v:b}

type Option<a> = Sum<a, false>

// // Constructor for `Some`, which holds a value
// function Some<a>(value: a): Option<a> {
//     return { kind: "left", v: value };
// }

// // Constructor for `None`, which represents the absence of a value
// function None<a>(): Option<a> {
//     return { kind: "right", v: false };
// }

const Some = <a>(value: a): Option<a> => ({ kind: "left", v: value })
const None = <a>(): Option<a> => ({ kind: "right", v: false })

let somevalue: Option<number> = Some(15)
let nonevalue: Option<number> = None()