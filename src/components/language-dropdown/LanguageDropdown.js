import "./LanguageDropdown.css";
import "../category-dropdown/CategoryDropdown.css";

import { AiOutlineClose } from "react-icons/ai";

function LanguageDropdown() {

  function hideDropdown() {
    let dropdown = document.getElementById("lang-dropdown__wrapper");
    dropdown.style.display = "none";
  }

  return (
    <div className="lang-dropdown__wrapper" id="lang-dropdown__wrapper">
      <button className="cat-dropdown__btn" onClick={hideDropdown}><AiOutlineClose size={24} /></button>
      <label className="lang-dropdown__title">Languages</label>
      <ul className="lang-dropdown__list">
        <li>English</li>
        <li>Spanish (Espa&#241;ol)</li>
      </ul>
    </div>
  )
}

export default LanguageDropdown;