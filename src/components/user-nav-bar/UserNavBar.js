import { Link } from "react-router-dom";
import { RiHome2Fill, RiHeartLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { IoRocketOutline, IoCompassOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { RiShoppingBasket2Fill } from "react-icons/ri";

import "./UserNavBar.css";
import "./UserNavBarSmall.css";

function UserNavBar() {
  return (
    <div>
      <div className="user-nav__wrapper">
        <nav className="user-nav__left-wrapper">
          <Link to='/' className="user-nav__txt"><RiHome2Fill size={24} /></Link>
          <Link to='/' className="user-nav__txt"><AiOutlineMail size={24} />Contact us</Link>
          <Link to='/' className="user-nav__txt"><AiOutlineInfoCircle size={24} />Help</Link>
        </nav>
        <nav className="user-nav__middle-wrapper user-nav__delivery-img">
          <Link to='/' className="user-nav__txt"><IoRocketOutline size={24} />FREE DELIVERY WORLDWIDE</Link>
        </nav>
        <nav className="user-nav__right-wrapper">
          <Link to='/' className="user-nav__txt"><IoCompassOutline size={24} />Order Status</Link>
          <Link to='/' className="user-nav__txt"><RiHeartLine size={24} />Wishlist</Link>
          <Link to='/' className="user-nav__txt"><IoPersonCircleOutline size={24} />Sign in/Join</Link>
        </nav>
      </div>
      <div>
        <div className="user-nav-bar-small__wrapper">
          <IoMdMenu className="user-nav-bar-small__menu-icon" size={28} />
          <div className="user-nav-bar-small__brand-wrapper">
            <img src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.75/img/logo.svg" />
          </div>
          <div className="user-nav-bar-small__shopping-cart-wrapper">
            <label className="sec-header__title sec-header__link-label--padding-right--border">$0.00</label>
            <Link className="user-nav-bar-small__cart-icon-wrapper">
              <label className="sec-header__title sec-header__link-label--padding">0</label>
              <RiShoppingBasket2Fill size={28} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavBar;