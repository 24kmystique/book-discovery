import { Link } from "react-router-dom";
import { RiHome2Fill, RiHeartLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { IoRocketOutline, IoCompassOutline, IoPersonCircleOutline } from "react-icons/io5";

import "./UserNavBar.css";

function UserNavBar() {
  return (
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
  )
}

export default UserNavBar;