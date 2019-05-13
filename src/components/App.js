import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Offer from "./Offer";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={Offer} />
      </Router>
    );
  }
}

export default App;
