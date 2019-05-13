import React from "react";

function Pages(props) {
  const { count, onPageClick } = props;

  const pages = Math.ceil(count / 25);

  let pageLinks = [];

  for (let i = 1; i <= pages; i++) {
    pageLinks.push(i);
  }

  return (
    <ul className="page-links">
      {pageLinks.map(element => {
        return (
          <li key={element} onClick={toto => onPageClick(element)}>
            {element}
          </li>
        );
      })}
    </ul>
  );
}

export default Pages;
