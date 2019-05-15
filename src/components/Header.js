import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderAnnounce from "./HeaderAnnounce";
import HeaderSearch from "./HeaderSearch";
import HeaderTools from "./HeaderTools";
import HeaderUserName from "./HeaderUserName";

function Header(props) {
  const { userName } = props;
  return (
    <header>
      <div className="header-body container">
        <HeaderLogo />
        <HeaderAnnounce />
        <HeaderSearch />
        <HeaderUserName userName={userName} />
        <HeaderTools />
      </div>
    </header>
  );
}

export default Header;
