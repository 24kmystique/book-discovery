// import components
import Carousel from "./carousel/Carousel";
import QueryBar from "./query-bar/QueryBar";

// import libraries
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
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
    <div>
      <h1>Book Discovery</h1>
      <h2>Search for a book</h2>
      <QueryBar dataBank={topRatingBooks} title="Search for a book by name, title ..." />
      <h2>4 Stars ratings and above</h2>
      <Carousel books={topRatingBooks} dataTitle="topRatingBooks" />
    </div>
  )
}

export default Home;