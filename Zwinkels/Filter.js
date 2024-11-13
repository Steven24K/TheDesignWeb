// Using curroed Functions for nodular filtering in a search system
// Imagine youre working on a collage library search system that helps students find books base on specific criteria.
// The system has a large list of books, and you want to let students filter books base don multiple criteria,
// such as: genre, title, author and year
// however you want each criteria to be applied independently so that students can start with one criteria and add others as neede
// For example, they could : First filter on genre, then by author. Second 
var library = [
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Technology", year: 1999 },
    { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", year: 2008 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
    { title: "1984", author: "George Orwell", genre: "Fiction", year: 1949 },
    { title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", year: 2011 },
];
var isGenre = function (genre) { return function (book) { return book.genre === genre; }; };
var isAuthor = function (author) { return function (book) { return book.author === author; }; };

var fictionBooks = library.filter(isGenre("Fiction"));
var HerperLeeBooks = fictionBooks.filter(isAuthor("Harper Lee"))

console.log(HerperLeeBooks);
