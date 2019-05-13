import React from "react";
import Item from "./Item";

function ItemList(props) {
  const { items, onLink } = props;

  return (
    <div>
      {items.map(element => (
        <Item
          item={element}
          onLink={() => {
            onLink(element._id);
          }}
        />
      ))}
    </div>
  );
}

export default ItemList;
