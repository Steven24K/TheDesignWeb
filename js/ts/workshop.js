"use strict";
console.log('Hello Workshop');
// basic types 
let string_type = "hello world";
let some_number = 6;
let number_5 = 5;
let a_boolean_value = true;
let always_false = false;
// Currying 
const add = (a) => (b) => a + b;
console.log(add(5)(4));
// identity 
const identity_number = () => 0;
const identity_string = () => "";
const identity_bool = () => false;
// Recursion
const count_array = (arr) => {
    // base case 
    if (arr.length == 0) {
        return identity_number();
    }
    // action
    arr.pop();
    return count_array(arr) + 1;
};
const ListNode = (value, tail) => ({ kind: 'node', value: value, tail: tail });
const Empty = () => ({ kind: 'empty' });
let list1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, Empty())))));
// 1. Build a .map function for the linked lis
const map = (list, f) => {
    if (list.kind == 'empty') {
        return Empty();
    }
    else {
        return ListNode(f(list.value), map(list, f));
    }
};
// 2. Use it to increment each item of the list
const Increment = (x) => x + 1;
let incrementedList = map(list1, Increment);
console.log(incrementedList);
