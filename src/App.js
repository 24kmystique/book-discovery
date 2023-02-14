import "./App.css";

// import components
import Carousel from "./components/carousel/Carousel";
import QueryBar from "./components/query-bar/QueryBar";

// import libraries
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // Set initial value for state variables
  const [topRatingBooks, setTopRatingBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/top-20-books')
      .then(function (response) {
        setTopRatingBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [topRatingBooks.length]);

  return (
    <div className="app">
      <h1>Book Discovery</h1>
      <h2>Search for a book</h2>
      <QueryBar dataBank={topRatingBooks} title="Search for a book by name, title ..." />
  
      <h2>4 Stars ratings and above</h2>
      <Carousel books={topRatingBooks} dataTitle="topRatingBooks" />
    </div>
  );
}

export default App;
