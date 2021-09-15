
import "./RateItem.css";

function RateItem(props) {
  return (
    <div className="rate-item">
      <div className="rate-item__description">
        <h2>{props.title}</h2>
        <div className="rate-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default RateItem;
