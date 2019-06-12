import React from "react";

function HeaderUserName(props) {
  const { userName } = props;
  return (
    <div className="header-userName">
      {userName ? `Bienvenue, ${userName}` : ""}
    </div>
  );
}

export default HeaderUserName;
