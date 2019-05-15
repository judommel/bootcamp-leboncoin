import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Offer from "./Offer";
import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Publish from "./Publish";
import Cookies from "js-cookie";

class App extends React.Component {
  state = {
    userData: null
  };

  render() {
    if (this.state.userData !== null) {
      Cookies.set("token", this.state.userData.token);
    }

    return (
      <Router>
        <Header
          userName={
            this.state.userData ? this.state.userData.account.username : null
          }
        />
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={Offer} />
        <Route
          path="/user/log-in"
          render={props => {
            return (
              <LogIn
                onLogIn={toto => {
                  this.setState({ userData: toto });
                }}
              />
            );
          }}
        />
        <Route
          path="/user/sign-up"
          render={() => (
            <SignUp onSignUp={user => this.setState({ userData: user })} />
          )}
        />
        <Route path="/publish" component={Publish} />
      </Router>
    );
  }
}

export default App;
