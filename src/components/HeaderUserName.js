import React from "react";

function HeaderUserName(props) {
  const { userName } = props;
  return (
    <div className="header-userName">
      {userName ? `Welcome, ${userName}` : ""}
    </div>
  );
}

export default HeaderUserName;
