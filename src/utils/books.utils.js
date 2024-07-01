export const getFilteredBooks = (books, shelf) => {
  const filteredBooks = books.filter((book) => book.shelf === shelf);
  return filteredBooks;
};
