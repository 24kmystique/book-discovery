import "./Header.css";

import QueryBar from "../query-bar/QueryBar";

import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
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
    <div className="header__wrapper">
      <div className="header__brand-wrapper">
        <img src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.75/img/logo.svg" />
      </div>
      <QueryBar dataBank={topRatingBooks} title="Search for a book by name, title ..." />
      <div className="header__search-btn-wrapper header__btn-wrapper">
        <button className="btn__primary">Search</button>
      </div>
      <div className="header__btn-wrapper">
        <button className="btn__light-outline">Advanced Search</button>
      </div>   
    </div>
  )
}

export default Header;