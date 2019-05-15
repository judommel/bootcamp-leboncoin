import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Offer from "./Offer";
import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Cookies from "js-cookie";

class App extends React.Component {
  constructor(props) {
    super(props);
    const userName = Cookies.get("userData");
    const token = Cookies.get("token");
    const id = Cookies.get("id");

    const userFromCookies = {
      username: userName,
      token: token,
      id: id
    };

    console.log(userFromCookies);
    /* On lit les cookies */

    /* On crée le state */
    this.state = {
      userData: token === undefined ? null : userFromCookies
    };
  }
  render() {
    if (this.state.userData !== null) {
      Cookies.set("userData", this.state.userData.username);
      Cookies.set("token", this.state.userData.token);
      Cookies.set("id", this.state.userData.id);
    }

    return (
      <Router>
        <Header
          userName={this.state.userData ? this.state.userData.username : null}
          onLogOutClick={() => {
            this.setState({ userData: null });
            Cookies.remove("userData");
            Cookies.remove("token");
            Cookies.remove("id");
          }}
        />
        <Route exact path="/" component={Home} />
        <Route path="/offer/:id" component={Offer} />
        <Route
          path="/user/log-in"
          render={props => {
            if (this.state.userData) {
              return <Redirect to="/" />;
            }
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
      </Router>
    );
  }
}

export default App;
