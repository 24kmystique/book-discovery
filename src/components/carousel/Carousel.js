import BookCard from "../book-card/BookCard";
import "./Carousel.css";

import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

/**
 * Given a dictionary of `carouselItems`, create a carousel with these items. The carousel includes a previous and next button to scroll the carousel. 
 * 
 * 
 * @param {Object} carouselItems Represented as `props.books`. A dictionary of books. For each book, a `BookCard` is produced. Each `BookCard` is displayed in the Carousel.
 * @param {string} dataTile Represented as `props.dataTitle`. Used to uniquely identify carousel.
 * @returns Carousel containing `carouselItems`
 */
function Carousel (props) {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const MAX_ITEMS = 20;
  const SIZE_OF_ITEM = 200;
  const SIZE_OF_ITEM_GAP = 10;
  const CAROUSEL_ITEMS_ID = props.dataTitle + "-carouselItems";
  const CAROUSEL_PREV_BTN_ID = props.dataTitle + "-carouselPrevBtn";
  const CAROUSEL_NEXT_BTN_ID = props.dataTitle + "-carouselNextBtn";

  /**
   * Given the occupied size of the Carousel on the display screen, divide it with the total size of the Carousel Item including any padding. Take the ceiling value of the result.
   * 
   * @returns Maximum number of slides in the Carousel
   */
  function getMaxSlide() {
    let sizeOfCarouselItemsPerScreen = document.getElementById(CAROUSEL_ITEMS_ID).clientWidth;
    let numItemPerScreen = sizeOfCarouselItemsPerScreen / (SIZE_OF_ITEM + SIZE_OF_ITEM_GAP);
    let maxSlide = Math.ceil(MAX_ITEMS/numItemPerScreen);
    return maxSlide;
  }

  /**
   * Move the carousel backwards.
   * At the beginning of the carousel, the prevBtn is hidden.
   * It is only valid to click prevBtn when there is still more content to see (i.e. `currentSlideIdx` !== 0). 
   * The prevBtn is hidden when the `currentSlideIdx` === 0.
   */
  function handleCarouselPrev() {
    let maxSlide = getMaxSlide();
    setMaxSlide(maxSlide);

    if (currentSlideIdx-1 === 0) {
      setCurrentSlideIdx(0);
      document.getElementById(CAROUSEL_PREV_BTN_ID).style.visibility = "hidden";
    }
    else {
      setCurrentSlideIdx(currentSlideIdx-1);
      document.getElementById(CAROUSEL_PREV_BTN_ID).style.visibility = "visible";
      document.getElementById(CAROUSEL_NEXT_BTN_ID).style.visibility = "visible";
    }
    
  }

  /**
   * Move the carousel forward.
   * At the end of the carousel, the nextBtn is hidden.
   * It is only valid to click nextBtn when there is still more content to see (i.e. `currentSlideIdx`+1 < `maxSlide`-1). 
   * The nextBtn is hidden when the `currentSlideIdx`+1 === maxSlide.
   */
  function handleCarouselNext() {
    let maxSlide = getMaxSlide();
    setMaxSlide(maxSlide);

    if (currentSlideIdx+1 < maxSlide-1) {
      setCurrentSlideIdx(currentSlideIdx+1);
      document.getElementById(CAROUSEL_PREV_BTN_ID).style.visibility = "visible";
      document.getElementById(CAROUSEL_NEXT_BTN_ID).style.visibility = "visible";
    }
    else {
      setCurrentSlideIdx(maxSlide-1);
      document.getElementById(CAROUSEL_NEXT_BTN_ID).style.visibility = "hidden";
    }
    
  }

  
  return (
    <div className="carousel__wrapper">
      <div className="carousel__controls__wrapper carousel__controls__prev__btn" id={CAROUSEL_PREV_BTN_ID} onClick={handleCarouselPrev}>
        <i className="carousel__controls__img"><IoIosArrowBack size={34} /></i>
      </div>

      <div style={{transform: `translateX(${-currentSlideIdx * 100}%)`}}>
        <div className="carousel__book-card" id={CAROUSEL_ITEMS_ID}>
          {props.books.map( (book) => 
            <BookCard key={book.isbn} author={book.author} rating={book.book_depository_stars} category={book.category} currency={book.currency} format={book.format} image={book.image} img_paths={book.img_paths} isbn={book.isbn} name={book.name} oldPrice={book.old_price} price={book.price} />
          )}
        </div>
      </div>

      <div className="carousel__controls__wrapper carousel__controls__next__btn" id={CAROUSEL_NEXT_BTN_ID} onClick={handleCarouselNext}>
        <i className="carousel__controls__img"><IoIosArrowForward size={34} /></i>
      </div>
    </div>

  )
}

export default Carousel;