import React from "react";
import { Link } from "react-router-dom";

function HeadToolsMyAccount(props) {
  return (
    <Link className="header-tools-single" to={`/user/user-info`}>
      <i className="fas fa-user-secret fa-3x header-tools-logo-signUp" />
      <div>Mes informations</div>
    </Link>
  );
}

export default HeadToolsMyAccount;
