import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  const { item, onLink } = props;

  return (
    <div className="item">
      <div className="item-pic" />
      <div>
        <Link to={`/offer/${item._id}`}>{item.title}</Link>
        <div>{item.price}</div>
      </div>
    </div>
  );
}

export default Item;
