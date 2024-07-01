import React from "react";
import Book from "./Book";
import { BOOKS } from "../utils/testdata";

function BookList(props) {
  const { books = BOOKS } = props;
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li>
          <Book book={book} />
        </li>
      ))}
    </ol>
  );
}

export default BookList;
