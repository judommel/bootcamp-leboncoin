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
    search: {
      searched: "",
      sort: "",
      priceMin: "",
      priceMax: ""
    }
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
                `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25&title=${
                  e.itemSearch
                }&sort=${e.sort}&priceMin=${e.priceMin}&priceMax=${e.priceMax}`
              )
              .then(response =>
                this.setState({
                  data: response.data,
                  isLoading: false,
                  search: {
                    searched: e.itemSearch,
                    sort: e.sort,
                    priceMin: e.priceMin,
                    priceMax: e.priceMax
                  }
                })
              );
          }}
          onSelect={e => {
            axios
              .get(`https://leboncoin-api.herokuapp.com/api/offer/with-count`, {
                params: {
                  title: this.state.search.searched,
                  priceMin: this.state.search.priceMin,
                  priceMax: this.state.search.priceMax,
                  sort: e
                }
              })
              .then(response => {
                console.log(response.data);

                this.setState({
                  data: response.data,
                  isLoading: false,
                  search: { ...this.state.search, sort: e }
                });

                console.log(this.state.search);
              });
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
                    this.state.search.searched
                  }&sort=${this.state.search.sort}&priceMin=${
                    this.state.search.priceMin
                  }&priceMax=${this.state.search.priceMax}&skip=${25 *
                    (i - 1)}&limit=25`
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
