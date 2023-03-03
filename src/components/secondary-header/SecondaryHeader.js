import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";

import "./SecondaryHeader.css";
import CategoryDropdown from "../category-dropdown/CategoryDropdown";

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
            <div className="sec-header__cat-dropdown-wrapper">
              <CategoryDropdown />
            </div>
          </div>
          <Link className="sec-header__link">Bestsellers</Link>
          <Link className="sec-header__link">Coming Soon</Link>
          <Link className="sec-header__link">New Releases</Link>
        </nav>
        <nav className="sec-header__right-wrapper">
          <Link className="sec-header__link">
            <label className="sec-header__title">English</label>
            <MdKeyboardArrowDown size={24} className="sec-header__arrow-down-icon" />
            <MdKeyboardArrowUp size={24} className="sec-header__arrow-up-icon" />
          </Link>
          <Link className="sec-header__link">
            <label className="sec-header__title">$ SGD</label>
            <MdKeyboardArrowDown size={24} className="sec-header__arrow-down-icon" />
            <MdKeyboardArrowUp size={24} className="sec-header__arrow-up-icon" />
          </Link>
          <Link className="sec-header__link sec-header__link--pink">
            <label className="sec-header__title sec-header__link-label--padding-right--border">$0.00</label>
            <label className="sec-header__title sec-header__link-label--padding">0</label>
            <RiShoppingBasket2Fill size={24} />
          </Link>
        </nav>
      </div>

    </div>
  )
}

export default SecondaryHeader;