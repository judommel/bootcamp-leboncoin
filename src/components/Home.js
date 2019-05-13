import React from "react";
import ItemList from "./ItemList";
import Pages from "./Pages";
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
        <Pages
          count={this.state.data.count}
          onPageClick={i => {
            console.log(i);

            axios
              .get(
                `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${25 *
                  (i - 1)}&limit=25`
              )
              .then(response =>
                this.setState({ data: response.data, isLoading: false })
              );
          }}
        />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25`
      )
      .then(response =>
        this.setState({ data: response.data, isLoading: false })
      );
  }
}

export default Home;
