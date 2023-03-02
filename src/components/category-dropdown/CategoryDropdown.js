import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import "./CategoryDropdown.css";

function CategoryDropdown() {

  function hideDropdown() {
    let dropdown = document.getElementById("cat-dropdown__wrapper");
    dropdown.style.display = "none";
  }

  return (
    <div className="cat-dropdown__wrapper" id="cat-dropdown__wrapper">
      <button className="cat-dropdown__btn" onClick={hideDropdown}><AiOutlineClose size={24} /></button>
      <div className="cat-dropdown__cat-wrapper">
        <div>
          <header className="cat-dropdown__cat-title">Top Categories</header>
          <ul>
            <li><Link>Art & Photography</Link></li>
            <li><Link>Biography</Link></li>
            <li><Link>Children's Books</Link></li>
            <li><Link>Crafts & Hobbies</Link></li>
            <li><Link>Crime & Thriller</Link></li>
            <li><Link>Fiction</Link></li>
            <li><Link>Food & Drink</Link></li>
            <li><Link>Graphic Novels, Anime & Manga</Link></li>
            <li><Link>History & Archaeology</Link></li>
            <li><Link>Mind, Body & Spirit</Link></li>
            <li><Link>Science Fiction, Fantasy & Horror</Link></li>
          </ul>
        </div>
        <div className="cat-dropdown__left-border">
          <header className="cat-dropdown__cat-title">More Categories</header>
          <div className="cat-dropdown__more-cat-grid-wrapper">
            <ul>
              <li><Link>Audio Books</Link></li>
              <li><Link>Business, Finance & Law</Link></li>
              <li><Link>Computing</Link></li>
              <li><Link>Dictionaries & Languages</Link></li>
              <li><Link>Entertainment</Link></li>
              <li><Link>Health</Link></li>
              <li><Link>Home & Garden</Link></li>
              <li><Link>Humour</Link></li>
              <li><Link>Medical</Link></li>
              <li><Link>Natural History</Link></li>
              <li><Link>Personal Development</Link></li>
              <li><Link>Poetry & Drama</Link></li>
            </ul>
            <ul>
              <li><Link>Reference</Link></li>
              <li><Link>Religion</Link></li>
              <li><Link>Romance</Link></li>
              <li><Link>Science & Geography</Link></li>
              <li><Link>Society & Social Sciences</Link></li>
              <li><Link>Sport</Link></li>
              <li><Link>Stationery</Link></li>
              <li><Link>Teaching Resources & Education</Link></li>
              <li><Link>Technology & Engineering</Link></li>
              <li><Link>Tenn & Young Adult</Link></li>
              <li><Link>Transport</Link></li>
              <li><Link>Travel & Holiday Guides</Link></li>
            </ul>
          </div>
        </div>
        <div className="cat-dropdown__third-col-wrapper cat-dropdown__left-border">
          <div>
            <header className="cat-dropdown__cat-title">Top Authors</header>
            <ul>
              <li><Link>J.K. Rowling</Link></li>
              <li><Link>Roald Dahl</Link></li>
              <li><Link>Julia Donaldson</Link></li>
              <li><Link>Stephen King</Link></li>
              <li><Link>David Walliams</Link></li>
              <li><Link>Dr. Seuss</Link></li>
              <li><Link>Andy Griffiths</Link></li>
              <li><Link>James Patterson</Link></li>
              <li><Link>Sarah J. Maas</Link></li>
              <li><Link>Enid Blyton</Link></li>
              <li><Link>John Green</Link></li>
              <li><Link>Brandon Sanderson</Link></li>
              <li><Link>See all</Link></li>
            </ul>
          </div>
          <div>
            <header className="cat-dropdown__cat-title">Bestselling Series</header>
            <ul>
              <li><Link>Harry Potter</Link></li>
              <li><Link>Game of Thrones</Link></li>
              <li><Link>Lego</Link></li>
              <li><Link>Divergent</Link></li>
              <li><Link>Throne of Glass</Link></li>
              <li><Link>Star Wars</Link></li>
            </ul>
            <header className="cat-dropdown__cat-title">Books By Language</header>
            <ul>
              <li><Link>Books in Spanish</Link></li>
              <li><Link>Books in Polish</Link></li>
              <li><Link>Books in German</Link></li>
              <li><Link>Books in French</Link></li>
              <li><Link>Languages Bookshop</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cat-dropdown__age-range-wrapper">
        <header className="cat-dropdown__cat-title">Children's books by age range</header>
        <div className="cat-dropdown__age-range-list">
          <Link className="cat-dropdown__age-range-item">Ages 0-2</Link>
          <Link className="cat-dropdown__age-range-item cat-dropdown__left-border">Ages 3-5</Link>
          <Link className="cat-dropdown__age-range-item cat-dropdown__left-border">Ages 6-8</Link>
          <Link className="cat-dropdown__age-range-item cat-dropdown__left-border">Ages 9-11</Link>
          <Link className="cat-dropdown__age-range-item cat-dropdown__left-border">Teen & Young Adult</Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryDropdown;