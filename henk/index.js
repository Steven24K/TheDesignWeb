"use strict";
const henk = { henk: "Henk" };
console.log(typeof henk); // object, no Henk :(
// ==================================================
const sumUpTo2 = (n) => {
    if (n == 1)
        return 1;
    return sumUpTo2(n - 1) + n;
};
console.log(sumUpTo2(5)); // 15
// ==================================================
// 5! = 1×2×3×4×5 = 120
const factorial = (n) => {
    if (n == 1)
        return 1;
    return factorial(n - 1) * n;
};
console.log(factorial(5)); // 120
const library = [
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Technology", year: 1999 },
    { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", year: 2008 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Fiction", year: 1949 },
    { title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", year: 2011 },
];
const filteredBook = library.map(book => book.title);
console.log(filteredBook);
