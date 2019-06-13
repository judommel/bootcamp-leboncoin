import React from "react";
import { Link } from "react-router-dom";

function HeaderToolSignUp(props) {
  return (
    <Link className="header-tools-single tools-orange" to={`/user/sign-up`}>
      <i className="fas fa-sign-in-alt fa-3x header-tools-logo-signUp" />
      <div>Créer un compte</div>
    </Link>
  );
}

export default HeaderToolSignUp;
