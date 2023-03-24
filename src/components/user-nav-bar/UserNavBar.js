import { Link } from "react-router-dom";
import { RiHome2Fill, RiHeartLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { IoRocketOutline, IoCompassOutline, IoPersonCircleOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import "./UserNavBar.css";
import "./UserNavBarSmall.css";

function UserNavBar() {

  function showUserNavBarSmall(idx) {
    if (idx === 0) {
      // active tab
      let nav0 = document.getElementById("user-nav-bar-small__menu-nav-0");
      nav0.style.display = "block";
      let navTitle0 = document.getElementById("user-nav-bar-small__menu-nav-title-0");
      navTitle0.classList.remove("user-nav-bar-small__menu-nav-title--inactive-tab");
      navTitle0.classList.add("user-nav-bar-small__menu-nav-title--active-tab");

      // inactive tab
      let nav1 = document.getElementById("user-nav-bar-small__menu-nav-1");
      nav1.style.display = "none";
      let navTitle1 = document.getElementById("user-nav-bar-small__menu-nav-title-1")
      navTitle1.classList.remove("user-nav-bar-small__menu-nav-title--active-tab");
      navTitle1.classList.add("user-nav-bar-small__menu-nav-title--inactive-tab");
    }
    else if (idx === 1) {
      // active tab
      let nav1 = document.getElementById("user-nav-bar-small__menu-nav-1");
      nav1.style.display = "block";
      let navTitle1 = document.getElementById("user-nav-bar-small__menu-nav-title-1");
      navTitle1.classList.remove("user-nav-bar-small__menu-nav-title--inactive-tab");
      navTitle1.classList.add("user-nav-bar-small__menu-nav-title--active-tab");

      // inactive tab
      let nav0 = document.getElementById("user-nav-bar-small__menu-nav-0");
      nav0.style.display = "none";
      let navTitle0 = document.getElementById("user-nav-bar-small__menu-nav-title-0");
      navTitle0.classList.remove("user-nav-bar-small__menu-nav-title--active-tab");
      navTitle0.classList.add("user-nav-bar-small__menu-nav-title--inactive-tab");
    }
  }

  function openNavMenu() {
    let userNavMenu = document.getElementById("user-nav-bar-small-menu-wrapper");
    userNavMenu.style.display = "block";
    userNavMenu.classList.remove("slide-out-left-animation");
    userNavMenu.classList.add("slide-in-left-animation");
  }

  function closeNavMenu() {
    let userNavMenu = document.getElementById("user-nav-bar-small-menu-wrapper");
    userNavMenu.classList.remove("slide-in-left-animation");
    userNavMenu.classList.add("slide-out-left-animation");
  }


  return (
    <div>
      <div className="user-nav-bar-small-menu-wrapper" id="user-nav-bar-small-menu-wrapper">
        <div className="user-nav-bar-small__menu-title-wrapper">
          <label className="user-nav-bar-small__menu-nav-title user-nav-bar-small__menu-nav-title--active-tab" id="user-nav-bar-small__menu-nav-title-0" onClick={e => showUserNavBarSmall(0)}>Shop</label>
          <label className="user-nav-bar-small__menu-nav-title user-nav-bar-small__menu-nav-title--inactive-tab" id="user-nav-bar-small__menu-nav-title-1" onClick={e => showUserNavBarSmall(1)}>Account & Help</label>
          <div className="user-nav-bar-small__close-btn-wrapper">
            <button className="user-nav-bar-small__close-btn" onClick={closeNavMenu}><IoCloseSharp size={28} /></button>
          </div>
        </div>
        <div className="user-nav-bar-small__menu-nav-wrapper" id="user-nav-bar-small__menu-nav-0">
          <ul>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Home</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Categories<IoIosArrowForward size={20} /></Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Children's Age Ranges<IoIosArrowForward size={20} /></Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Top Authors<IoIosArrowForward size={20} /></Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Bestselling Series<IoIosArrowForward size={20} /></Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Books By Language<IoIosArrowForward size={20} /></Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Bestsellers</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Coming Soon</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">New Releases</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">English<MdKeyboardArrowDown size={20} /></Link></li>
          </ul>
        </div>
        <div className="user-nav-bar-small__menu-nav-wrapper" id="user-nav-bar-small__menu-nav-1">
          <ul>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Home</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Contact us</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Help</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Order Status</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Wishlist</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">Sign in/Join</Link></li>
            <li><Link className="user-nav-bar-small__menu-item-wrapper">$ SGD<MdKeyboardArrowDown size={20} /></Link></li>
          </ul>
        </div>
      </div>
      <div className="user-nav__wrapper">
        <nav className="user-nav__left-wrapper">
          <Link to='/' className="user-nav__txt" id="user-nav__home-icon"><RiHome2Fill size={24} /></Link>
          <Link className="user-nav__txt"><AiOutlineMail size={24} />Contact us</Link>
          <Link className="user-nav__txt"><AiOutlineInfoCircle size={24} />Help</Link>
        </nav>
        <nav className="user-nav__middle-wrapper user-nav__delivery-img">
          <Link className="user-nav__txt"><IoRocketOutline size={24} />FREE DELIVERY WORLDWIDE</Link>
        </nav>
        <nav className="user-nav__right-wrapper">
          <Link className="user-nav__txt"><IoCompassOutline size={24} />Order Status</Link>
          <Link className="user-nav__txt"><RiHeartLine size={24} />Wishlist</Link>
          <Link className="user-nav__txt"><IoPersonCircleOutline size={24} />Sign in/Join</Link>
        </nav>
      </div>
      <div>
        <div className="user-nav-bar-small__wrapper">
          <button className="user-nav-bar-small__menu-btn" onClick={openNavMenu}><IoMdMenu className="user-nav-bar-small__menu-icon" size={24} /></button>
          <Link to="/" className="user-nav-bar-small__brand-wrapper">
            <div className="user-nav-bar-small__brand">
              <img src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.25.75/img/logo.svg" />
            </div>
          </Link>
          <div className="user-nav-bar-small__shopping-cart-wrapper">
            <label className="user-nav-bar-small__border-rgt">$0.00</label>
            <Link className="user-nav-bar-small__cart-icon-wrapper">
              <label className="user-nav-bar-small__padding-lft">0</label>
              <RiShoppingBasket2Fill size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavBar;