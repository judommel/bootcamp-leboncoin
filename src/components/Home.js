import React from "react";
import ItemList from "./ItemList";
import Pages from "./Pages";
import axios from "axios";
import Search from "./Search";

class Home extends React.Component {
  state = {
    data: null,
    isLoading: true,
    itemShown: null,
    current: 1,
    search: false,
    searched: ""
  };

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {" "}
        <Search
          onSearch={e => {
            axios
              .get(
                `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25&title=${e}`
              )
              .then(response =>
                this.setState({
                  data: response.data,
                  isLoading: false,
                  search: true,
                  searched: e
                })
              );
          }}
        />
        <div className="home-body">
          <ItemList items={this.state.data.offers} />
          <Pages
            current={this.state.current}
            count={this.state.data.count}
            onPageClick={i => {
              axios
                .get(
                  `https://leboncoin-api.herokuapp.com/api/offer/with-count?title=${
                    this.state.searched
                  }&skip=${25 * (i - 1)}&limit=25`
                )
                .then(response =>
                  this.setState({
                    data: response.data,
                    isLoading: false,
                    current: i
                  })
                );
            }}
          />
        </div>
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
