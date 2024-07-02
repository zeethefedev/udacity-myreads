export const SHELVES = ["currentlyReading", "wantToRead", "read", "none"];

export const getFilteredBooks = (books, shelf) => {
  const filteredBooks = books.filter((book) => book.shelf === shelf);
  return filteredBooks;
};

export const reformatString = (string) => {
  const newString = string?.replace(/([A-Z])/g, " $1");
  return newString;
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

export const updateBookSearch = (availableBooks, foundBooks) => {
  const newFoundBooks = foundBooks.map((book) =>
    replaceBookInShelf(availableBooks, book)
  );

  return newFoundBooks;
};

const replaceBookInShelf = (availableBooks, book) => {
  const availableBooksId = availableBooks.map((book) => book.id);
  const bookInShelf = availableBooks.find(
    (availableBook) => availableBook.id === book.id
  );
  return availableBooksId.includes(book.id) ? bookInShelf : book;
};
