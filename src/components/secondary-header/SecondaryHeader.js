import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";

import "./SecondaryHeader.css";
import "./SecondaryHeaderSmall.css";
import CategoryDropdown from "../category-dropdown/CategoryDropdown";
import LanguageDropdown from "../language-dropdown/LanguageDropdown";

function SecondaryHeader() {
  return (
    <div>
      <div className="sec-header__wrapper">
        <nav className="sec-header__left-wrapper">
          <div className="sec-header__link-wrapper">
            <Link className="sec-header__link">
                <label className="sec-header__title">Shop by category</label>
                <MdKeyboardArrowDown size={24} className="sec-header__arrow-down-icon" />
                <MdKeyboardArrowUp size={24} className="sec-header__arrow-up-icon" />
            </Link>
            <div className="sec-header__dropdown-wrapper">
              <CategoryDropdown />
            </div>
          </div>
          <Link className="sec-header__link sec-header--disable-pointer">Bestsellers</Link>
          <Link className="sec-header__link sec-header--disable-pointer">Coming Soon</Link>
          <Link className="sec-header__link sec-header--disable-pointer">New Releases</Link>
        </nav>
        <nav className="sec-header__right-wrapper">
          <div className="sec-header__link-wrapper">
            <Link className="sec-header__link">
              <label className="sec-header__title">English</label>
              <MdKeyboardArrowDown size={24} className="sec-header__arrow-down-icon" />
              <MdKeyboardArrowUp size={24} className="sec-header__arrow-up-icon" />
            </Link>
            <div className="sec-header__dropdown-wrapper">
              <LanguageDropdown />
            </div>
          </div>
          <Link className="sec-header__link sec-header--disable-pointer">
            <label>$ SGD</label>
            <MdKeyboardArrowDown size={24} className="sec-header__arrow-down-icon" />
            <MdKeyboardArrowUp size={24} className="sec-header__arrow-up-icon" />
          </Link>
          <Link className="sec-header__link sec-header__link--pink sec-header--disable-pointer">
            <label className="sec-header__link-label--padding-right--border">$0.00</label>
            <label className="sec-header__link-label--padding">0</label>
            <RiShoppingBasket2Fill size={24} />
          </Link>
        </nav>
      </div>

      <div className="sec-header-small__wrapper">
        <IoRocketOutline size={24} />
        <label>FREE DELIVERY WORDLWIDE</label>
      </div>

    </div>
  )
}

export default SecondaryHeader;