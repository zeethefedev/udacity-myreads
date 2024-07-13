import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/BooksAPI";
import Book from "../components/Book";

function BookDescription({ book }) {
  const {
    title,
    subtitle,
    averageRating,
    categories,
    description,
    previewLink,
  } = book;
  return (
    <div className="book-description">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {averageRating && <div>Rating: {averageRating}</div>}
      {categories && (
        <div>
          Catergories:{" "}
          {categories.map((category) => (
            <span>{category}</span>
          ))}
        </div>
      )}
      <div>{description}</div>
      <a href={previewLink}>Check preview</a>
    </div>
  );
}

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    get(id).then((res) => {
      console.log(res);
      setBook(res);
    });
  }, []);

  return book ? (
    <div className="book-details">
      <Book book={book} isDetailPage={true} />
      <BookDescription book={book} />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default BookDetails;
