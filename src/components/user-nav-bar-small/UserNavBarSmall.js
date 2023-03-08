import "./UserNavBarSmall.css";
import "../secondary-header/SecondaryHeader.css";

import { IoMdMenu } from "react-icons/io";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function UserNavBarSmall() {
  return (
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
  )
}

export default UserNavBarSmall;