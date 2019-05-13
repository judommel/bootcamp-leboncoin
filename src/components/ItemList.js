import React from "react";
import Item from "./Item";

function ItemList(props) {
  const { items } = props;

  return (
    <div className="container itemList">
      {items.map(element => (
        <Item item={element} />
      ))}
    </div>
  );
}

export default ItemList;
