import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderAnnounce from "./HeaderAnnounce";

function Header(props) {
  return (
    <div className="header-body container">
      <HeaderLogo />
      <HeaderAnnounce />
      <div className="header-search">
        <i class="fas fa-search fa-1x" />
        <span>Rechercher</span>
      </div>
      <div className="header-recherche-favoris">
        <div>Mes recherches</div>
        <div>Mes favoris</div>
        <div>Messages</div>
        <div className="header-seConnecter">
          <p>
            <i class="far fa-user" />
          </p>
          <p>Se connecter</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
