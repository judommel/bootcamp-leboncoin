import React from "react";
import axios from "axios";
import OfferProfile from "./OfferProfile";

class Offer extends React.Component {
  state = { data: null, isLoading: true };

  render() {
    console.log(this.props.match.params.id);

    if (this.state.isLoading === true) {
      return <div>Loading... </div>;
    }

    return (
      <div className="container">
        <div className="offer">
          <div className="offer-details">
            <div className="offer-info">
              <div className="offer-pic">
                {this.state.data.pictures.length > 0 && (
                  <img
                    className="image"
                    src={`${this.state.data.pictures[0].url}`}
                    alt={this.state.data.title}
                  />
                )}
              </div>
              <div className="offer-title-price">
                <h2>{this.state.data.title}</h2>
                <div className="offer-price">{this.state.data.price} €</div>
              </div>
            </div>
            <div className="space-offer" />
            <div className="description">
              <h3>Description</h3>
              <div>{this.state.data.description}</div>
            </div>
          </div>
          <OfferProfile profile={this.state.data.creator.account.username} />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    await axios
      .get(
        `https://leboncoin-api.herokuapp.com/api/offer/${
          this.props.match.params.id
        }`
      )
      .then(response =>
        this.setState({ data: response.data, isLoading: false })
      );
  }
}

export default Offer;
