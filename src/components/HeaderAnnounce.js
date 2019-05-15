import React from "react";
import { Link } from "react-router-dom";

function HeaderAnnounce(props) {
  return (
    <Link className="headerAnnounce-body" to="/publish">
      <div className="header-announce">
        <i className="far fa-plus-square fa-2x" />
        <span className="header-announce-text">Déposer une annonce</span>
      </div>
    </Link>
  );
}
export default HeaderAnnounce;
