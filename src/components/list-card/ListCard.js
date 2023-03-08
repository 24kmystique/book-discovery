import "./ListCard.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function ListCard(props) {
  const [firstFewList, setFirstFewList] = useState([]);
  const [lastFewList, setLastFewList] = useState([]);
  const [listAll, setListAll] = useState(false);
  const [showTxt, setShowTxt] = useState("show more");
  const previewLimit = 5;

  useEffect(() => {
    if (props.list.length > previewLimit) {
      // do something
      setFirstFewList(props.list.slice(0, previewLimit), ...firstFewList);
      setLastFewList(props.list.slice(previewLimit), ...lastFewList);
    }
    else {
      setFirstFewList(props.list, ...firstFewList);
    }
  }, [firstFewList.length]);

  function showAllInList() {
    if (!listAll) {
      setShowTxt("show less");
      setListAll(true);
    }
    else {
      setShowTxt("show more");
      setListAll(false);
    }
  }

  return (
    <div className="list-card__wrapper">
      <h4 className="list-card__border-btm">{props.title}</h4>
      <ul>
        {firstFewList.map((list) => (
          <li className="list-card__border-btm"><Link>{list}</Link></li>
        ))}
        {listAll ?
          <div>
          {lastFewList.map((list) => (
            <li className="list-card__border-btm"><Link>{list}</Link></li>
          ))}
          </div>
          :
          undefined
        }

        <li className="list-card__show-wrapper"><button className="list-card__show-btn" onClick={showAllInList}>{showTxt}</button></li>
      </ul>
    </div>
  )
}

export default ListCard;