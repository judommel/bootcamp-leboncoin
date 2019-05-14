import React from "react";
import axios from "axios";

class Search extends React.Component {
  state = {
    itemSearch: null
  };

  render() {
    const { onSearch } = this.props;

    return (
      <div className="search-box">
        <div className="container">
          <div className="search-inline">
            <input
              className="main-search-input"
              type="text"
              onChange={e => this.setState({ itemSearch: e.target.value })}
              placeholder="  Que recherchez-vous ?"
            />
            <button
              className="search-button"
              onClick={() => {
                if (this.state.itemSearch !== null) {
                  onSearch(this.state.itemSearch);
                }
              }}
            >
              Rechercher
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
