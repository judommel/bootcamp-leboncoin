import React from "react";
import HeaderToolsLogIn from "./HeaderToolsLogIn";
import HeaderToolsMyFavorite from "./HeaderToolsMyFavorite";
import HeaderToolsMySearch from "./HeaderToolsMySearch";
import HeaderToolsSignUp from "./HeaderToolsSignUp";
import HeaderToolsLogOut from "./HeaderToolsLogOut";
import HeaderToolsMyAccount from "./HeaderToolsMyAccount";

function HeaderTools(props) {
  const { userName, onLogOutClick } = props;
  return (
    <div className="header-tools">
      <HeaderToolsMySearch />
      <HeaderToolsMyFavorite />
      {userName === null ? (
        <HeaderToolsSignUp />
      ) : (
        <HeaderToolsMyAccount onLogOutClick={() => onLogOutClick()} />
      )}
      {userName === null ? (
        <HeaderToolsLogIn />
      ) : (
        <HeaderToolsLogOut
          onLogOutClick={() => {
            onLogOutClick();
          }}
        />
      )}
    </div>
  );
}

export default HeaderTools;
