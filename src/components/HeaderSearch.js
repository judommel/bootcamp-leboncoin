import React from "react";
import { Link } from "react-router-dom";

function HeaderSearch(props) {
  return (
    <Link className="header-search" to={`/`}>
      <svg height="25" width="25" viewBox="0 0 24 24">
        <path d="M23.58 21.45l-7-7a9.42 9.42 0 0 0 1.62-6.87A9.13 9.13 0 0 0 10.34.07a9.25 9.25 0 0 0-2.81 18.27 9.25 9.25 0 0 0 7-1.76l7 7a1.54 1.54 0 0 0 2.11 0 1.56 1.56 0 0 0-.06-2.13zM9.22 15.5a6.37 6.37 0 1 1 6.33-6.37 6.33 6.33 0 0 1-6.33 6.37z" />
      </svg>
      <span className="header-search-text">Rechercher</span>
    </Link>
  );
}

export default HeaderSearch;
