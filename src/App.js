import "./App.css";
import { useState } from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { getAll } from "./utils/BooksAPI";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const handleShowSearchPage = () => {
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className="App">
      <button onClick={() => getAll()}>Get all books</button>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
