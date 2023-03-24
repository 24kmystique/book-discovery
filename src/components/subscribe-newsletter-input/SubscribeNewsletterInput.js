import "./SubscribeNewsletterInput.css";
import "../button/Button.css";

function SubscribeNewsletterInput() {
  return (
    <div className="sub-news-input__wrapper">
      <div className="sub-news-input__img-txt-wrapper">
        <img className="sub-news-input__img" src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.81/img/newsletter-icon.svg" alt="Learn about new offers and get more deals by joining our newsletter" />
        <p className="sub-news-input__txt">Learn about new offers and get more deals by joining our newsletter</p>
      </div>

      <div className="sub-news-input__input-wrapper">
        <input className="sub-news-input__input" placeholder="Email address" />
      </div>

      <div className="sub-news-input__btn-wrapper">
        <button>Sign up now</button>
      </div>

      
    </div>
  )
}

export default SubscribeNewsletterInput;