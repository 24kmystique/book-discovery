import "./AdCard.css";

function AdCard(props) {
  return (
    <div className="ad-card__wrapper">
      <img className="ad-card__img" src={props.imgSrc} alt={props.imgAlt} />
      <p className="ad-card__txt">{props.imgAlt}</p>
    </div>
  )
}

export default AdCard;