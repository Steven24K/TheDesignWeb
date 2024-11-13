"use strict";
// most used types for nothing:
let a; // a has no value
let b; // pretend b does not exist
let c; // c will never be assigned
let x = "hello"; // type wil be automatically be determined ('inferred') as 'string'
let y; // y will have the same type as x, in this case 'string'
const obj = { key: 10, value: "some-value" }; // type will be inferred as '{ key: number, value: string }'
let z = typeof obj["key"]; // z will have the same type as obj.key, in this case 'number'
// Another fun thing to do: string validation with types
// this one only allows urls starting with http:// or https:// and ending with a /
let url = "http://example.com/";
// this one only allows values like A12 or N101
let highwayCode = "A12";
