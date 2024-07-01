import React from "react";
import { update } from "../utils/BooksAPI";

const OPTIONS = ["currentlyReading", "wantToRead", "read", "none"];

function SelectMoveTo({ handleMoveTo }) {
  return (
    <select onChange={handleMoveTo}>
      <option value="none" disabled>
        Move to...
      </option>
      {OPTIONS.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
}

function Book({ book }) {
  const { id, imageLinks, title, authors, shelf } = book;

  const handleMoveTo = (e) => {
    const newShelf = e.target.value;
    update(book, newShelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <SelectMoveTo handleMoveTo={handleMoveTo} />
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && (
        <>
          {authors.map((author) => (
            <div className="book-authors">{author}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default Book;
