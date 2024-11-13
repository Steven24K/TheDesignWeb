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