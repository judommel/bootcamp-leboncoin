import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  const { item } = props;

  console.log(item);
  return (
    <div className="item">
      <div className="item-pic">
        {item.pictures.length > 0 && (
          <img
            className="image"
            src={`${item.pictures[0].url}`}
            alt={item.title}
          />
        )}
      </div>

      <div className="item-description">
        <Link className="item-link" to={`/offer/${item._id}`}>
          {item.title}
        </Link>
        <div className="item-price">{`${item.price} €`}</div>
      </div>
    </div>
  );
}

export default Item;
