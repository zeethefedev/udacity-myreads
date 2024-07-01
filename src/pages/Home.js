import React from "react";
import BookList from "../components/BookList";
import { BOOKS } from "../utils/testdata";
import { getFilteredBooks } from "../utils/books.utils";

const allBooks = BOOKS;

function BookShelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} />
      </div>
    </div>
  );
}

function Home() {
  const currentlyReadingBooks = getFilteredBooks(allBooks, "currentlyReading");
  const wantToReadBooks = getFilteredBooks(allBooks, "wantToRead");
  const readBooks = getFilteredBooks(allBooks, "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" books={currentlyReadingBooks} />
          <BookShelf title="Want to read" books={wantToReadBooks} />
          <BookShelf title="Read" books={readBooks} />
        </div>
      </div>
      {/* <div className="open-search">
        <a onClick={handleShowSearchPage}>Add a book</a>
      </div> */}
    </div>
  );
}

export default Home;
