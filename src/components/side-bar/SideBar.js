import "./SideBar.css";

import AdCard from "../ad-card/AdCard";
import ListCard from "../list-card/ListCard";

function SideBar() {
  const tempBestEverBookList = ["LGBTQIA", "Best Books Ever", "Best Cookbooks Ever", "Best Crime & Thriller Books", "Best Romance Books", "Best YA Books", "Best Bedtime Reading Books", "Best Autobiographies", "Best History Books", " Best Graphic Novels", "Classic Fantasy Books", "Best Fairytales and Folktales"];
  const tempPopularPagesList = ["Ask the Author", "Star Wars", "Literary Prizes", "New Releases", "Books by Language", "Textbooks", "Harry Potter Book Series", "Game of Thrones", "Book CLub Classics", "Books on Screen", "Fantasy Books", "Business Books", "War History Books"];

  return (
    <div className="side-bar__wrapper">
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Deals_Store_sidebar.jpg" imgAlt="Enoy great discounts at the deals store" />
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Maame_SB.jpg" imgAlt="The bestselling debut of 2023" />
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/emerald_book-depot_496x496px.png" imgAlt="Discover a whole new world with Emerald" />
      <AdCard imgSrc="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/TOG_BD_246.jpeg" imgAlt="New editions of your favourite Sarah J Maas books" />
      <ListCard title="Best Ever Book Lists" list={tempBestEverBookList} />
      <ListCard title="Popular Pages" list={tempPopularPagesList} />
    </div>
  )
}

export default SideBar;