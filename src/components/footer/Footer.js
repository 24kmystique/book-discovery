import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__grid-col-wrapper">
        <h4>Explore</h4>
        <ul>
          <li><Link>About us</Link></li>
          <li><Link>Sitemap</Link></li>
          <li><Link>Bookmarks</Link></li>
          <li><Link>Book Blog</Link></li>
          <li><Link>Sign in/Join</Link></li>
        </ul>
      </div>
      <div className="footer__grid-col-wrapper">
        <h4>How can we help?</h4>
        <ul>
          <li><Link>Help</Link></li>
          <li><Link>Contact us</Link></li>
          <li><Link>Where's my stuff?</Link></li>
          <li><Link>Where do you deliver?</Link></li>
          <li><Link>Cancel my order</Link></li>
          <li><Link>Return my order</Link></li>
        </ul>
      </div>
      <div className="footer__grid-col-wrapper">
        <h4>Join us</h4>
        <ul>
          <li><Link>Affiliates</Link></li>
          <li><Link>Jobs</Link></li>
        </ul>
      </div>
      <div className="footer__grid-col-wrapper">
        <h4>Important stuff</h4>
        <ul>
          <li><Link>Complaints</Link></li>
          <li><Link>Cookies</Link></li>
          <li><Link>Privacy policy</Link></li>
          <li><Link>Terms & Conditions</Link></li>
        </ul>
      </div>
      <div className="footer__grid-col-wrapper">
        <p>We accept these payment methods</p>
      </div>
    </div>
  )
}

export default Footer;