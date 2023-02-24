import "./Book.css";
import { OldPriceExists, CalculateAmtSaved } from "../../helper/BookHelper";
import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { TiSocialFacebook, TiSocialTwitter, TiSocialPinterest } from "react-icons/ti";

// import libraries
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";


function Book() {
  const [book, setBook] = useState([]);
  const location = useLocation();
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  useEffect(() => {
    axios.get('http://localhost:5000' + location.pathname)
      .then(function (response) {
        setBook(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [book.length]);
  
  if (book) {
    return (
      <div>
        {book.map((book) => 
          <div key={book.isbn}>
            <div className="book-page--grid-wrapper">
              <div className="book-page__bookcover-img-wrapper">
                <img className="book-page__bookcover-img" alt="bookcover" src={book.image}/>
              </div>
              <div>
                <h2>{book.name}</h2>
                <div>
                  <StarRatings rating={book.book_depository_stars} starRatedColor="rgb(255,255,0)" starEmptyColor="rgb(211,211,211)" starDimension="15px" starSpacing="1px" />
                  {book. book_depository_stars}
                </div>
                <p>{book.format}</p>
                <p>By (author) {book.author}</p>
                <div className="book-page__socials-icon-wrapper">
                  <span>Share</span>
                  <div className="book-page__socials-icon book-page__socials-mail-icon">
                    <AiOutlineMail size={22}/>
                  </div>
                  <div className="book-page__socials-icon book-page__socials-fb-icon">
                    <TiSocialFacebook size={22}/>
                  </div>
                  <div className="book-page__socials-icon book-page__socials-twitter-icon">
                    <TiSocialTwitter size={22}/>
                  </div>
                  <div className="book-page__socials-icon book-page__socials-pinterest-icon">
                    <TiSocialPinterest size={22}/>
                  </div>
                </div>
                <div>{description}</div>
              </div>
              
              <div>
                <div className="book-page__price-wrapper">
                  <span className="book-page__price">{book.price}</span>
                  {OldPriceExists(book.old_price) ? 
                    <div className="book-page__old-price book-page__old-price--strikethrough">{book.old_price}</div>
                    :
                    undefined
                  }
                </div>
                

                {OldPriceExists(book.old_price) ? 
                  <div className="book-page__old-price">You save {CalculateAmtSaved(book.price, book.old_price)}</div>
                  :
                  undefined
                }
                
                <div className="book-page__shipping-info-wrapper">
                  <div className="book-page__shipping-info-item">
                    <IoRocketOutline size={35} />
                    <p>Free delivery worldwide</p>
                  </div>
                  <div className="book-page__shipping-info-item">
                    <IoRocketOutline size={35} />
                    <p>Free delivery worldwide</p>
                  </div>
                  <div className="book-page__shipping-info-item">
                    <IoRocketOutline size={35} />
                    <p>Available. Expected delivery to Singapore in 11-16 business days.</p>
                  </div>
                  <div className="book-page__shipping-info-item">
                    <span></span>
                    <p>Not ordering to Singapore? Click here.</p>
                  </div>
                </div>
                
                <button className="btn__primary">Add to basket</button>

                <button className="btn__light">Add to wishlist</button>
                
              </div>
            </div>
          

            <h3>Product details</h3>
            <h4>Format:</h4>
            <h4>Dimensions:</h4>
            <h4>Publication date:</h4>
            <h4>Publisher:</h4>
            <h4>Publication City/Country:</h4>
            <h4>Language:</h4>
            <h4>ISBN10:</h4>
            <h4>ISBN13:</h4>
            <h4>Bestsellers rank:</h4>

            <h2>People who bought this also bought</h2>
          </div>
        )}
      </div>
    )
  }


}

export default Book;