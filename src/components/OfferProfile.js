import React from "react";

class OfferProfile extends React.Component {
  state = {
    displayNb: false
  };

  render() {
    const { profile } = this.props;

    return (
      <div className="offer-profile">
        <div className="user-profile">{profile}</div>
        <button
          className="tel-button"
          onClick={() => this.setState({ displayNb: !this.state.displayNb })}
        >
          {this.state.displayNb === false ? "Voir le numéro" : "09 99 89 99 89"}
        </button>
      </div>
    );
  }
}

export default OfferProfile;
