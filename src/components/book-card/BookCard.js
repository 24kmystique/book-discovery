import "./BookCard.css";
import { UriEncoder } from "../../helper/UriEncoder";
import { OldPriceExists, CalculateAmtSaved } from "../../helper/BookHelper";

// import libraries
import StarRatings from "react-star-ratings";
import { Link, Outlet } from "react-router-dom";

// parameters:
// author, rating, category, currency, format, image, img_paths, isbn, name, oldPrice, price
function BookCard(props) {
  
  /**
   * Given a book name, return a book name that fits into two rows.
   * 
   * @param {string} bookname Full book name
   * @returns {string} Book name that fits into two rows
   */
  function getBookName (bookname) {
    const MAX_LENGTH_PER_ROW = 18;
    const MAX_ROW = 2;
    var rowCounter = 1;
    var lengthCounter = 0;
    const wordsArr = bookname.trim().split(/\s+/);
    for (let i=0; i<wordsArr.length; i++) {
      if (rowCounter <= MAX_ROW && (lengthCounter+wordsArr[i].length) <= MAX_LENGTH_PER_ROW) {
        lengthCounter += wordsArr[i].length;
      }
      else if (rowCounter < MAX_ROW && (lengthCounter+wordsArr[i].length) >= MAX_LENGTH_PER_ROW) {
        lengthCounter = 0;
        rowCounter += 1;
        lengthCounter += wordsArr[i].length;
      }
      else {
        // Shorter version of the book name to fit into 2 rows
        // Trailing '...' added to indicate this is not the full book name
        var shortBookname = wordsArr.slice(0,i).join(' ');
        return shortBookname+"...";
      }
    }
    // Actual book name
    return bookname;
  }

  return (
    <div className="book-card book-card--regular" key={props.isbn}>
      <div className="book-card__bookcover-wrapper">
        <img className="book-card__bookcover-img" alt="bookcover" src={props.image}/>
      </div>
      <Link to={UriEncoder(props.name) + `/${props.isbn}`}>
        <h3 className="book-card__title">{getBookName(props.name)}</h3>
      </Link>
      <p className="book-card__author">{props.author}</p>
      <div><StarRatings rating={props.rating} starRatedColor="rgb(255,255,0)" starEmptyColor="rgb(211,211,211)" starDimension="15px" starSpacing="1px" /></div>
      <div>
        <div className="book-card__price">{props.price}</div>
        {OldPriceExists(props.oldPrice) ? 
          <div className="book-card__old-price book-card__old-price--strikethrough">{props.oldPrice}</div>
          :
          undefined
        }
      </div>
      {OldPriceExists(props.oldPrice) ? 
        <div className="book-card__old-price">Save {CalculateAmtSaved(props.price, props.oldPrice)}</div>
        :
        undefined
      }
      
      
      <button>Add to basket</button>

    </div>
  )
}

export default BookCard;
