// 1.
type Sum<a,b> = { kind: 'left', value: a } | { kind: 'right', value: b }

type Option<a> = Sum<a, false>
const Some = <a>(v: a): Option<a> => ({kind: 'left', value: v})

/*
const Some = <a>(v: a): Option<a> => {
    return {kind: 'left', value: v}
}
*/

const None = <a>(): Option<a> => ({kind: 'right', value: false})

/*
const None = <a>(): Option<a> => {
    return {kind: 'right', value: false}
}
*/

let x: Option<number> = None()
let y: number = null!

y + 1

if (x.kind == 'left') {
    x.value + 1
}


// 2.
// Iterative function
const sumUpTo = (n: number): number => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Recursive function
const sumUpToRec = (n: number): number => {
    if (n == 0) {
        return 0
    }
    return n + sumUpToRec(n-1)
};

// Checks if the two functions are equal for all n from 0 to n
const checkRecWithRec = (n: number): boolean => {
    if (sumUpTo(n) == sumUpToRec(n)) {
        return true
    } else if (n == 0) {
        return false
    } else {
        return checkRecWithRec(n-1)
    }
};

// Checks if the two functions are equal for all n from 0 to n
console.log(sumUpTo(5) == sumUpToRec(5))

// 3.

const add = (a: number, b: number): number => a + b
const add_curried = (a: number) => (b: number) => a + b

interface Book {
    title: string
    author: string
    genre: string
    year: number
}
  
type BookProps = keyof Book // "title" | "author" | ...

type Library = Book[]

const library: Library = [
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Technology", year: 1999 },
    { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", year: 2008 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Fiction", year: 1949 },
    { title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", year: 2011 },
]

type Func<a, b> = (_: a) => b

type BookPredicate = Func<Book, boolean>

