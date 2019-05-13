import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Offer from "./Offer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <header>HEADER</header>
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={Offer} />
      </Router>
    );
  }
}

export default App;
