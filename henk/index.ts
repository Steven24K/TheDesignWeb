"use strict"
// ==================================================
type Henk = { henk: "Henk" };
const henk : Henk = { henk: "Henk" };
console.log(typeof henk) // object, no Henk :(
// ==================================================
const sumUpTo2 = (n: number): number => {
    if (n == 1) return 1
    return sumUpTo2(n-1)+n;
}
console.log(sumUpTo2(5)); // 15
// ==================================================
// 5! = 1×2×3×4×5 = 120
const factorial = (n: number): number => {
    if (n == 1) return 1;
    return factorial(n-1)*n;
}
console.log(factorial(5)); // 120
// ==================================================
interface Book {title: string, author: string, genre: string, year: number}
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

// Predicates to find a book by key
const findBookByTitle = (title: string): BookPredicate => (book) => book.title === title
const findBookByAuthor = (author: string): BookPredicate => (book) => book.author === author
const findBookByGenre = (genre: string): BookPredicate => (book) => book.genre === genre
const findBookByYear = (year: number): BookPredicate => (book) => book.year === year

// Find by title
console.log("===FILTER ON TITLE===")
let filteredBook = library.find(findBookByTitle("Clean Code"))
console.log(filteredBook)

// Find by author
console.log("===FILTER ON AUTHOR===")
filteredBook = library.find(findBookByAuthor("Andrew Hunt"))
console.log(filteredBook)

// Find by Genre
console.log("===FILTER ON GENRE===")
filteredBook = library.find(findBookByGenre("Technology"))
console.log(filteredBook)

// Find by Year
console.log("===FILTER ON YEAR===")
filteredBook = library.find(findBookByYear(1999))
console.log(filteredBook)
// ==================================================