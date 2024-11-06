"use strict";

// console.log('Hello Workshop');

// basic types
// let string_type = "hello world";
// let some_number = 6;
// let number_5 = 5;
// let a_boolean_value = true;
// let always_false = false;

// Currying
const add = (a) => (b) => a + b;
// console.log(add(5)(4));

// identity
const identity_number = () => 0;
// const identity_string = () => "";
// const identity_bool = () => false;

// Recursion
const count_array = (arr) => {
    if (arr.length == 0) return identity_number();
    arr.pop();
    return count_array(arr) + 1;
};

// const maybe = (v) => ({kind: 'left', v: v});
// const definitely = () => ({kind: 'right', v: false});
const Some = (v) => ({
    kind: 'some',
    value: v,
    map: function (f) {
        return Some(f(this.value));
    }
});

const None = () => ({
    kind: 'none',
    map: function (f) {
        return None();
    }
});

let optional = Some(4);
let plus5 = optional.map(add(5));
// console.log(optional);
// console.log(plus5);

const ListNode = (value, tail) => ({kind: 'node', value: value, tail: tail});
const Empty = () => ({kind: 'empty'});
let list1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, Empty())))));

// 1. Build a .map function for the linked list
const map = (list, fn) => {
    if (list.kind === 'empty') return Empty(); // Return an Empty node if we reach the end
    return ListNode(fn(list.value), map(list.tail, fn)); // Apply fn to the current node's value and recurse for the tail
};
const mappedList = map(list1, (x) => x);
console.log(mappedList);

// 2. Use it to increment each item of the list
const map2 = (list, fn) => {
    if (list.kind === 'empty') return Empty(); // Return an Empty node if we reach the end
    return ListNode(fn(list.value), map2(list.tail, fn)); // Apply fn to the current node's value and recurse for the tail
};
const mappedList2 = map2(list1, (x) => x+1);
console.log(mappedList2);