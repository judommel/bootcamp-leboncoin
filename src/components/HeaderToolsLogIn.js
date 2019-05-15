import React from "react";
import { Link } from "react-router-dom";

function HeaderToolsLogIn(props) {
  return (
    <Link className="header-tools-single" to={`/user/log-in`}>
      <svg className="header-tools-logo" viewBox="0 0 24 24">
        <path d="M12 12a5.92 5.92 0 0 0 5.86-6A5.93 5.93 0 0 0 12 0a5.93 5.93 0 0 0-5.86 6A5.92 5.92 0 0 0 12 12zm0-9a3 3 0 1 1-2.93 3A3 3 0 0 1 12 3zM22.46 22.13a10.68 10.68 0 0 0-10.46-8 10.68 10.68 0 0 0-10.46 8A1.5 1.5 0 0 0 2.61 24a1.46 1.46 0 0 0 1.78-1.08A7.72 7.72 0 0 1 12 17.09a7.72 7.72 0 0 1 7.61 5.78A1.48 1.48 0 0 0 21 24a1.12 1.12 0 0 0 .36-.05 1.5 1.5 0 0 0 1.1-1.82z" />
      </svg>
      <p>Se connecter</p>
    </Link>
  );
}

export default HeaderToolsLogIn;
