import React from "react";
import BookList from "../components/BookList";
import { BOOKS } from "../utils/testdata";
import { getFilteredBooks } from "../utils/books.utils";

const allBooks = BOOKS;

function Home({ handleShowSearchPage }) {
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
          <BookList title="Currently Reading" books={currentlyReadingBooks} />
          <BookList title="Want to read" books={wantToReadBooks} />
          <BookList title="Read" books={readBooks} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={handleShowSearchPage}>Add a book</a>
      </div>
    </div>
  );
}

export default Home;
