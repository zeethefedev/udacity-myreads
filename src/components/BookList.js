import React from "react";
import Book from "./Book";

function BookList(props) {
  const { books, handleUpdateBook } = props;
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li>
          <Book book={book} handleUpdateBook={handleUpdateBook} />
        </li>
      ))}
    </ol>
  );
}

export default BookList;
