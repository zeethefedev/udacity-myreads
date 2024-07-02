import React, { useState } from "react";
import { search } from "../utils/BooksAPI";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";
import { updateBookSearch } from "../utils/books.utils";

function Search({ allBooks }) {
  const [searchText, setSearchText] = useState("");
  const [bookResult, setBookResult] = useState();
  const [notFoundMessage, setNotFoundMessage] = useState();

  const handleSetSearch = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    if (!newSearchText) {
      setBookResult();
      setNotFoundMessage();
    }
  };

  const handleSearch = (e) => {
    if (searchText && e.key === "Enter") {
      search(searchText).then((res) => {
        const error = res.error;
        if (!error) {
          const newBooks = updateBookSearch(allBooks, res);
          setBookResult(newBooks);
        } else {
          setBookResult();
          setNotFoundMessage("We cannot find what your are looking for");
        }
      });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchText}
            onChange={handleSetSearch}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        {bookResult ? (
          <BookList books={bookResult} />
        ) : (
          <div>{notFoundMessage}</div>
        )}
      </div>
    </div>
  );
}

export default Search;
