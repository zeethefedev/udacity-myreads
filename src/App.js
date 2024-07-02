import "./App.css";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

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
      </Routes>
    </div>
  );
}

export default App;
