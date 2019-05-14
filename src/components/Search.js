import React from "react";
import axios from "axios";

class Search extends React.Component {
  state = {
    itemSearch: null
  };

  render() {
    return (
      <div className="search-box">
        <div className="container">
          <div className="search-inline">
            <input
              type="text"
              onChange={e => this.setState({ itemSearch: e.target.value })}
              placeholder="Que recherchez-vous ?"
            />
            <button
              className="search-button"
              onClick={() => console.log("search")}
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
