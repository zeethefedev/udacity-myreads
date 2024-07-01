import React, { useState } from "react";
import { search } from "../utils/BooksAPI";
import BookList from "../components/BookList";

function Search() {
  const [searchText, setSearchText] = useState();
  const [bookResult, setBookResult] = useState();
  const handleSetSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    search(searchText).then((res) => {
      const error = res.error;
      if (!error) {
        setBookResult(res);
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* <a className="close-search" onClick={handleShowSearchPage}>
          Close
        </a> */}
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchText}
            onChange={handleSetSearch}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-books-results">
        {bookResult ? (
          <BookList books={bookResult} />
        ) : (
          <div>We cannot find what your are looking for</div>
        )}
      </div>
    </div>
  );
}

export default Search;
