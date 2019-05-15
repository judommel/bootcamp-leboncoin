import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderAnnounce from "./HeaderAnnounce";
import HeaderSearch from "./HeaderSearch";
import HeaderTools from "./HeaderTools";
import HeaderUserName from "./HeaderUserName";

function Header(props) {
  const { userName, onLogOutClick } = props;
  return (
    <header>
      <div className="header-body container">
        <HeaderLogo />
        <HeaderAnnounce />
        <HeaderSearch />
        <HeaderUserName userName={userName} />
        <HeaderTools
          userName={userName}
          onLogOutClick={() => onLogOutClick()}
        />
      </div>
    </header>
  );
}

export default Header;
