import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { getFilteredBooks } from "../utils/books.utils";
import { getAll } from "../utils/BooksAPI";
import { Link } from "react-router-dom";

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
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      const error = res.error;
      if (!error) {
        setAllBooks(res);
      }
    });
  }, []);

  const currentlyReadingBooks = getFilteredBooks(allBooks, "currentlyReading");
  const wantToReadBooks = getFilteredBooks(allBooks, "wantToRead");
  const readBooks = getFilteredBooks(allBooks, "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {allBooks.length > 0 && (
        <div className="list-books-content">
          <BookShelf title="Currently Reading" books={currentlyReadingBooks} />
          <BookShelf title="Want to read" books={wantToReadBooks} />
          <BookShelf title="Read" books={readBooks} />
        </div>
      )}
      <div className="open-search">
        <Link to="search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home;
