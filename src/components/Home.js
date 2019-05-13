import React from "react";
import ItemList from "./ItemList";
import axios from "axios";

class Home extends React.Component {
  state = {
    data: null,
    isLoading: true,
    itemShown: null
  };

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading...</div>;
    }

    return (
      <div className="home-body">
        <ItemList items={this.state.data.offers} />
      </div>
    );
  }

  async componentDidMount() {
    await axios
      .get("https://leboncoin-api.herokuapp.com/api/offer/with-count")
      .then(response =>
        this.setState({ data: response.data, isLoading: false })
      );
  }
}

export default Home;
