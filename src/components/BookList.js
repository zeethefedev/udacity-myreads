import React from "react";
import Book from "./Book";
import { BOOKS } from "../utils/testdata";

function BookList(props) {
  const { title, books = BOOKS } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookList;
