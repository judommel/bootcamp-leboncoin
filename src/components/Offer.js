import React from "react";
import axios from "axios";

class Offer extends React.Component {
  state = { data: null, isLoading: true };

  render() {
    console.log(this.props.match.params.id);

    if (this.state.isLoading === true) {
      return <div>Loading... </div>;
    }

    return (
      <div>
        <div className="offer-pic">PIC</div>
        <div>{this.state.data.title}</div>
        <div>{this.state.data.price}</div>
        <div>{this.state.data.description}</div>
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
