import React from "react";

const OPTIONS = ["currentlyReading", "wantToRead", "read", "none"];

function SelectMoveTo() {
  return (
    <select>
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
  const { imageLinks, title, authors, shelf } = book;

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
          <SelectMoveTo />
        </div>
      </div>
      <div className="book-title">{title}</div>
      <>
        {authors.map((author) => (
          <div className="book-authors">{author}</div>
        ))}
      </>
    </div>
  );
}

export default Book;
