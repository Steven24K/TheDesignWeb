// Using curroed Functions for nodular filtering in a search system
// Imagine youre working on a collage library search system that helps students find books base on specific criteria.
// The system has a large list of books, and you want to let students filter books base don multiple criteria,
// such as: genre, title, author and year
// however you want each criteria to be applied independently so that students can start with one criteria and add others as neede
// For example, they could : First filter on genre, then by author. Second 

// book data structure
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



  const isGenre = (genre: string): BookPredicate => (book: Book) => book.genre === genre;
  const isAuthor = (author: string): BookPredicate => (book: Book) => book.author === author;

  const fictionBooks = library.filter(isGenre("Fiction"));
console.log(fictionBooks);