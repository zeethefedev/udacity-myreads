import React from "react";
import { update } from "../utils/BooksAPI";
import { SHELVES } from "../utils/books.utils";
import { useNavigate } from "react-router-dom";

function SelectMoveTo({ value, handleMoveTo }) {
  return (
    <select onChange={handleMoveTo} value={value}>
      <option key="" value="" disabled>
        Move to...
      </option>
      {SHELVES.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

function Book({ book, handleUpdateBook, isDetailPage = false }) {
  const { id, imageLinks, title, authors, shelf } = book;

  const handleMoveTo = (e) => {
    const newShelf = e.target.value;
    update(book, newShelf).then((res) => {
      handleUpdateBook && handleUpdateBook(res);
    });
  };
  const navigate = useNavigate();
  const handleGetBook = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks?.thumbnail})`,
          }}
          onClick={!isDetailPage && handleGetBook}
        ></div>
        {!isDetailPage && (
          <div className="book-shelf-changer">
            <SelectMoveTo value={shelf} handleMoveTo={handleMoveTo} />
          </div>
        )}
      </div>
      <div className="book-title">{title}</div>
      {authors && (
        <>
          {authors.map((author, index) => (
            <div key={index} className="book-authors">
              {author}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Book;
