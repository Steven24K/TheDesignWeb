console.log('Hello Workshop')


// basic types 

let string_type: string = "hello world"

let some_number: number = 6

let number_5: 5 = 5

let a_boolean_value: boolean = true

let always_false: false = false

// Currying 
const add = (a: number) => (b: number): number => a + b
console.log(add(5)(4))

// identity 

const identity_number = () => 0
const identity_string = () => ""
const identity_bool = () => false


// Recursion
const count_array = <a>(arr: a[]): number => {
    // base case 
    if (arr.length == 0) {
        return identity_number()
    }
    // action
    arr.pop()
    return count_array(arr) + 1
}





// A first datastructure the Option type

type Sum<a, b> = { kind: 'left', value: a } | { kind: 'right', value: b }

type Option<a> = Sum<a, false> & {
    map: <b>(f: (_: a) => b) => Option<b>
}

const Some = <a>(v: a): Option<a> => ({
    kind: 'left',
    value: v,
    map: function <b>(f: (_: a) => b): Option<b> {
        return Some<b>(f(this.value))
    }
})
const None = <a>(): Option<a> => ({
    kind: 'right',
    value: false,
    map: function <b>(f: (_: a) => b): Option<b> {
        return None<b>()
    }
})

let optional1: Option<number> = Some(4)
console.log("Option 1 value: ", optional1.value)

let optional2: Option<number> = None()
console.log("Option 2 value: ", optional2.value)


let plus5 = optional1.map(add(5))
console.log("When we increment option 1 we have value: ", plus5.value)

let plus1 = optional1.map(add(1))
console.log("When we try to increment option 2 nothing happens, because it is None() and value is:  ", plus1.value)


// Adding a .map function to transform Option<a> into Option<b>


// Getting the hang of functional programming? 

// Let's build an immutable linked list from scratch

// Node(1, Node(2, Empty()))


type ListNode<a> = {
    kind: 'node',
    value: a
    tail: LinkedList<a>
}

type Empty<a> = {
    kind: 'empty'
}

export type LinkedList<a> = ListNode<a> | Empty<a>


export const ListNode = <a>(value: a, tail: LinkedList<a>): LinkedList<a> => ({ kind: 'node', value: value, tail: tail })

export const Empty = <a>(): LinkedList<a> => ({ kind: 'empty' })

let list1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, Empty())))))


// 1. Build a .map function for the linked list

// 2. Use it to increment each item of the list




































/*
// 1. Build a .map function for the linked list


// map takes a linked list + function f => new linked list with f applied to each element
const map = <a, b>(list: LinkedList<a>, f: (value: a) => b): LinkedList<b> => {
    // base case
    if (list.kind === 'empty') {
        return Empty<b>()
    }
    return ListNode(f(list.value), map(list.tail, f))
}

// 2. Use it to increment each item of the list


// Create a function that increments a number
const increment = (x: number): number => x + 1

// Apply the function to the list
let incrementedList = map(list1, increment)

// Print the result
console.log(incrementedList)
*/


// 3. Make a transform function using map to create a list of booleans. True for even values and false for odd values. 
//    i.e. list1.map(isEven) should give the following result [false, true, false, true, false] where the array is the linked list


// 4. Make a method list1.reduce<b>(f: (acc: b, x: a) => b, init: b): b where f is a function with 2 parameters 
//    acc which is the accumulator of type b and x of type a for every element in the list the value is merged with 
//    the accumulator. The init parameter is of type b and represents the starting point of the accumulator. Init can
//    be considred the Identity of the return type. 

// 5. Make a .filter() method that takes a predicate function as input. Every element is checked against the predicate and 
//    and if the element matches the condition it is added to a new list. 
//    Hint: Use the reduce() function to implement the filter method.

// 6. Make a .toString() method using the .reduce() function. The function transforms the list insto a single formatted string 
//    Where every value is divided by a comma.

// 7. Go back to the .map function from question 1 and use reduce to implement map().
