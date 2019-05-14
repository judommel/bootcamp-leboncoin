import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Offer from "./Offer";
import Header from "./Header";
import LogIn from "./LogIn";

class App extends React.Component {
  state = {
    userData: null
  };

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={Offer} />
        <Route
          path="/user/log-in"
          render={props => {
            const page = parseInt(props.match.params.pagenum, 10);
            return (
              <LogIn
                key={page}
                onLogIn={toto => {
                  this.setState({ userData: toto });
                }}
              />
            );
          }}
        />
      </Router>
    );
  }
}

export default App;
