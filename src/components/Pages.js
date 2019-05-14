import React from "react";

function Pages(props) {
  const { count, onPageClick, onNextPage, onPreviousPage, current } = props;

  const pages = Math.ceil(count / 25);

  let pageLinks = [];

  for (let i = 1; i <= pages; i++) {
    pageLinks.push(i);
  }

  return (
    <div className="container page-flex">
      <i className="fas fa-chevron-left" onClick={() => onPreviousPage()} />
      <ul className="page-links">
        {pageLinks.map(element => {
          return (
            <li
              key={element}
              className={current === element ? "current-page" : "page-li"}
              onClick={toto => onPageClick(element)}
            >
              {element}
            </li>
          );
        })}
      </ul>{" "}
      <i className="fas fa-chevron-right" onClick={() => onNextPage()} />
    </div>
  );
}

export default Pages;
