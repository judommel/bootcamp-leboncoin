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
      sort: "price-asc",
      priceMin: "",
      priceMax: ""
    }
  };

  onSearch(e) {
    axios
      .get(
        `http://localhost:3001/with-count?skip=0&limit=25&title=${
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
  }

  onSelect(e) {
    axios
      .get(`http://localhost:3001/with-count`, {
        params: {
          title: this.state.search.searched,
          priceMin: this.state.search.priceMin,
          priceMax: this.state.search.priceMax,
          sort: e
        }
      })
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: false,
          search: { ...this.state.search, sort: e }
        });
      });
  }

  onPriceMin(e) {
    axios
      .get(`http://localhost:3001/with-count`, {
        params: {
          title: this.state.search.searched,
          priceMin: e,
          priceMax: this.state.search.priceMax,
          sort: this.state.search.sort
        }
      })
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: false,
          search: { ...this.state.search, priceMin: e }
        });
      });
  }

  onPriceMax(e) {
    axios
      .get(`http://localhost:3001/with-count`, {
        params: {
          title: this.state.search.searched,
          priceMax: e,
          priceMin: this.state.search.priceMin,
          sort: this.state.search.sort
        }
      })
      .then(response => {
        this.setState({
          data: response.data,
          isLoading: false,
          search: { ...this.state.search, priceMax: e }
        });
      });
  }

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {" "}
        <Search
          onSearch={e => this.onSearch(e)}
          onSelect={e => this.onSelect(e)}
          onPriceMax={e => this.onPriceMax(e)}
          onPriceMin={e => this.onPriceMin(e)}
        />
        <div className="home-body">
          <ItemList items={this.state.data.offers} />
          <Pages
            current={this.state.current}
            count={this.state.data.count}
            onPageClick={i => {
              axios
                .get(
                  `http://localhost:3001/with-count?title=${
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
      .get(`http://localhost:3001/with-count?skip=0&limit=25&sort=price-asc`)
      .then(response =>
        this.setState({ data: response.data, isLoading: false })
      );
  }
}

export default Home;
