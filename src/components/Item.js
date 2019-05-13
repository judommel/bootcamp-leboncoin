import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  const { item } = props;

  return (
    <div className="item">
      <div className="item-pic" />

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
