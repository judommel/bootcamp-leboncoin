import React from "react";
import HeaderToolsLogIn from "./HeaderToolsLogIn";
import HeaderToolsMyFavorite from "./HeaderToolsMyFavorite";
import HeaderToolsMySearch from "./HeaderToolsMySearch";
import HeaderToolsSignUp from "./HeaderToolsSignUp";

function HeaderTools(props) {
  return (
    <div className="header-tools">
      <HeaderToolsMySearch />
      <HeaderToolsMyFavorite />
      <HeaderToolsSignUp />
      <HeaderToolsLogIn />
    </div>
  );
}

export default HeaderTools;
