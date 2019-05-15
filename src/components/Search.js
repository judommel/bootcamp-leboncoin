import React from "react";

class Search extends React.Component {
  state = {
    itemSearch: null,
    sort: "price-asc",
    priceMin: "",
    priceMax: ""
  };

  render() {
    const { onSearch, onSelect } = this.props;

    return (
      <div className="search-box">
        <div className="container">
          <div className="search-inline">
            <input
              className="main-search-input"
              type="text"
              value={this.state.itemSearch}
              onChange={e => this.setState({ itemSearch: e.target.value })}
              placeholder="  Que recherchez-vous ?"
            />
            <button
              className="search-button"
              onClick={() => {
                if (this.state.itemSearch !== null) {
                  onSearch(this.state);
                }
              }}
            >
              Rechercher
            </button>
          </div>
          <div className="search-inline">
            <div>
              {"Prix entre : "}
              <input
                type="texte"
                onChange={e => {
                  if (typeof parseInt(e.target.value) === "number") {
                    this.setState({ priceMin: e.target.value });
                  }
                }}
              />
              {" et : "}
              <input
                type="texte"
                onChange={e => this.setState({ priceMax: e.target.value })}
              />
            </div>
            <select
              className="search-select"
              onChange={e => {
                this.setState({ sort: e.target.value });
                onSelect(e.target.value);
              }}
              value={this.state.sort}
            >
              <option value="price-asc">Tri : Prix croissants</option>
              <option value="price-desc">Tri : Prix décroissants</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
