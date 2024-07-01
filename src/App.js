import "./App.css";
import { useState } from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { getAll } from "./utils/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const handleShowSearchPage = () => {
    setShowSearchpage(!showSearchPage);
  };

  return (
    <div className="App">
      <button onClick={() => getAll()}>Get all books</button>
      {showSearchPage ? (
        <Search handleShowSearchPage={handleShowSearchPage} />
      ) : (
        <Home handleShowSearchPage={handleShowSearchPage} />
      )}
    </div>
  );
}

export default App;
