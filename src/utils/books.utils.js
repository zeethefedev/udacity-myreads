export const getFilteredBooks = (books, shelf) => {
  const filteredBooks = books.filter((book) => book.shelf === shelf);
  return filteredBooks;
};

export const updateBooks = (booksArray, newShelf) => {
  const newBooks = booksArray.map((book) =>
    newShelf.currentlyReading.includes(book.id)
      ? { ...book, shelf: "currentlyReading" }
      : newShelf.wantToRead.includes(book.id)
      ? { ...book, shelf: "wantToRead" }
      : { ...book, shelf: "read" }
  );
  return newBooks;
};
