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
  const maxBookSummaryLength = 500;
  const [description, setDescription] = useState("");
  const [moreTxt, setMoreTxt] = useState("");
  const fakeTxt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  useEffect(() => {
    axios.get('http://localhost:5000' + location.pathname)
      .then(function (response) {
        setBook(response.data);

        if (fakeTxt.length > maxBookSummaryLength) {
          setDescription(fakeTxt.slice(0, maxBookSummaryLength));
          setMoreTxt(fakeTxt.slice(maxBookSummaryLength));
          let btnTxt = document.getElementById("book-page__show-more-btn");
          let ellipsisTxt = document.getElementById("book-page__ellipsis-txt");
          btnTxt.style.display = "inline";
          ellipsisTxt.style.display = "inline";
        } else return setDescription(fakeTxt);

        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [book.length]);

  function handleShowRemainingTxt(e) {
    let btnTxt = document.getElementById("book-page__show-more-btn");
    let ellipsisTxt = document.getElementById("book-page__ellipsis-txt");
    let moreTxt = document.getElementById("book-page__show-more-txt");
    btnTxt.style.display = "none";
    ellipsisTxt.style.display = "none";
    moreTxt.style.display = "inline";
  }
  
  if (book) {
    return (
      <div>
        {book.map((book) => 
          <div key={book.isbn}>
            <div className="book-page--grid-wrapper">
              
              <div className="book-page__preview-wrapper">
                <div className="book-page__bookcover-img-wrapper">
                  <img className="book-page__bookcover-img" alt="bookcover" src={book.image}/>
                </div>
                <div className="book-page__desc-wrapper">
                  <h2 className="book-page__desc-title">{book.name}</h2>
                  <div className="book-page__desc-rating-format-author-wrapper">
                    <div>
                      <StarRatings rating={book.book_depository_stars} starRatedColor="rgb(254,210,33)" starEmptyColor="rgb(211,211,211)" starDimension="15px" starSpacing="0.5px" />
                      <p className="book-page__desc-txt book-page__desc-rating-txt">{book.book_depository_stars}</p>
                    </div>
                    <p className="book-page__desc-txt">{book.format}</p>
                    <p className="book-page__desc-txt">By (author) {book.author}</p>
                  </div>
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
                  <div className="book-page__desc-summary-wrapper">
                    {description}
                    <span id="book-page__ellipsis-txt">...</span>
                    <button id="book-page__show-more-btn" onClick={handleShowRemainingTxt}>show more</button>
                    <p id="book-page__show-more-txt">{moreTxt}</p>
                  </div>
                  
                </div>
              </div>
              
              <div className="book-page__right-col-wrapper">
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
                
                <div className="btn-wrapper">
                  <button className="btn__primary">Add to basket</button>
                  <button className="btn__light">Add to wishlist</button>
                </div>
              </div>
            </div>
          
            <div className="book-page__product-details-wrapper">
              <h3>Product details</h3>
              <div className="book-page__product-details-list-col-wrapper">
                <ul className="book-page__product-details-list">
                  <li>
                    <label>Format:</label>
                    <span>Hardback | 416 pages</span>
                  </li>
                  <li>
                    <label>Dimensions:</label>
                    <span>156 x 240 x 30mm | 641g</span>
                  </li>
                  <li>
                    <label>Publication date:</label>
                    <span>10 Jan 2023</span>
                  </li>
                  <li>
                    <label>Publisher:</label>
                    <span>Penguin Random House</span>
                  </li>
                  <li>
                    <label>Imprint:</label>
                    <span>Bantam</span>
                  </li>
                </ul>
                <ul className="book-page__product-details-list">
                  <li>
                      <label>Publication City/Country:</label>
                      <span>London, United Kingdom</span>
                    </li>
                    <li>
                      <label>Language:</label>
                      <span>English</span>
                    </li>
                    <li>
                      <label>ISBN13:</label>
                      <span>1234567</span>
                    </li>
                    <li>
                      <label>Bestsellers rank:</label>
                      <span>14</span>
                    </li>
                </ul>
              </div>
            </div>


            <h2>People who bought this also bought</h2>
          </div>
        )}
      </div>
    )
  }


}

export default Book;