import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import BookDetails from "./pages/BookDetails";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  const handleSetAllBooks = (books) => {
    setAllBooks(books);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home allBooks={allBooks} setAllBooks={handleSetAllBooks} />}
        />
        <Route path="search" element={<Search allBooks={allBooks} />} />
        <Route path="book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
