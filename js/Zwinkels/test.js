"use strict";
// implement the option type with two constructor functions that each return one side of the option.
// // Constructor for `Some`, which holds a value
// function Some<a>(value: a): Option<a> {
//     return { kind: "left", v: value };
// }
// // Constructor for `None`, which represents the absence of a value
// function None<a>(): Option<a> {
//     return { kind: "right", v: false };
// }
const Some = (value) => ({ kind: "left", v: value });
const None = () => ({ kind: "right", v: false });
let somevalue = Some(15);
let nonevalue = None();
