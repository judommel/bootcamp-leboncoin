import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderAnnounce from "./HeaderAnnounce";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-body container">
      <HeaderLogo />
      <HeaderAnnounce />
      <div className="header-search">
        <i className="fas fa-search fa-1x" />
        <span>Rechercher</span>
      </div>
      <div className="header-recherche-favoris">
        <div>Mes recherches</div>
        <div>Mes favoris</div>
        <Link to={`/user/sign-up`}>
          <div>Créer un compte</div>
        </Link>
        <Link to={`/user/log-in`}>
          <div className="header-seConnecter">
            <p>
              <i className="far fa-user" />
            </p>
            <p>Se connecter</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
