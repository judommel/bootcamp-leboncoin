import React from "react";

function OfferProfile(props) {
  const { profile } = props;

  return (
    <div className="offer-profile">
      <div className="user-profile">{profile}</div>
      <button
        className="tel-button"
        onClick={() => console.log("changer le numéro")}
      >
        Voir le numéro
      </button>
    </div>
  );
}

export default OfferProfile;
