import "./SideBar.css";

import AdCard from "../ad-card/AdCard";

function SideBar() {
  return (
    <div className="side-bar__wrapper">
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Deals_Store_sidebar.jpg" imgAlt="Enoy great discounts at the deals store" />
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Maame_SB.jpg" imgAlt="The bestselling debut of 2023" />
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/emerald_book-depot_496x496px.png" imgAlt="Discover a whole new world with Emerald" />
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/TOG_BD_246.jpeg" imgAlt="New editions of your favourite Sarah J Maas books" />
    </div>
  )
}

export default SideBar;