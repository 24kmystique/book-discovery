import "./Home.css";

// import components
import Carousel from "../carousel/Carousel";
import SideBar from "../side-bar/SideBar";
import Footer from "../footer/Footer";

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
      <div className="home__wrapper">
        <div className="home__side-bar--margin">
        <SideBar />
        </div>
        

        <div className="home__carousel-wrapper">
          <div>
            <h2>4 Stars ratings and above</h2>
            <Carousel books={topRatingBooks} dataTitle="topRatingBooks" />
          </div>

          <div>
            <h2>4 Stars ratings and above</h2>
            <Carousel books={topRatingBooks} dataTitle="topRatingBooks" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;