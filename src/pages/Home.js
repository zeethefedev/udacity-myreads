import React, { useEffect } from "react";
import BookList from "../components/BookList";
import {
  SHELVES,
  getFilteredBooks,
  reformatString,
  updateBooks,
} from "../utils/books.utils";
import { getAll } from "../utils/BooksAPI";
import { Link } from "react-router-dom";

const shelves = SHELVES.filter((shelf) => shelf !== "none");

function BookShelf({ title, books, handleUpdateBook }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} handleUpdateBook={handleUpdateBook} />
      </div>
    </div>
  );
}

function Home({ allBooks, setAllBooks }) {
  useEffect(() => {
    handleGetAllBooks();
  }, []);

  const handleGetAllBooks = () => {
    getAll().then((res) => {
      const error = res.error;
      if (!error) {
        setAllBooks(res);
      }
    });
  };

  const handleUpdateBook = (newShelf) => {
    const newBooks = updateBooks(allBooks, newShelf);
    setAllBooks(newBooks);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {allBooks.length > 0 && (
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <BookShelf
              title={reformatString(shelf)}
              books={getFilteredBooks(allBooks, shelf)}
              handleUpdateBook={handleUpdateBook}
            />
          ))}
        </div>
      )}
      <div className="open-search">
        <Link to="search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home;
