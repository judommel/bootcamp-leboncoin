import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
    errorStatut: false
  };

  render() {
    const { onLogIn } = this.props;
    return (
      <div className="container logIn-padding">
        <div className="logIn-form-container">
          <div className="logIn-connexion-container">
            <span className="logIn-connexion">Connexion</span>
          </div>
          <p>Adresse e-mail</p>
          <input
            className="logIn-form-email"
            type="text"
            name="nom"
            id="nom"
            value={this.state.email}
            onChange={event => {
              this.setState({ email: event.target.value });
            }}
          />
          <p>Mot de Passe</p>
          <input
            className="logIn-form-password"
            type="password"
            name="nom"
            id="nom"
            value={this.state.password}
            onChange={event => {
              this.setState({ password: event.target.value });
            }}
          />
          {this.state.errorStatut === true && (
            <div className="logIn-error">E-mail or password incorrect !</div>
          )}
          <button
            className="logIn-submit"
            type="submit"
            value="Se connecter"
            onClick={() => {
              this.setState({ errorStatut: false });
              axios
                .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
                  email: this.state.email,
                  password: this.state.password
                })
                .then(function(response) {
                  onLogIn({
                    id: response.data._id,
                    username: response.data.account.username,
                    token: response.data.token
                  });
                })
                .catch(error => {
                  this.setState({ errorStatut: true });
                });
              this.setState({ email: "", password: "" });
            }}
          >
            Se connecter
          </button>
          <div className="logIn-signIn">
            <p className="logIn-noAccount">Vous n'avez pas de compte ?</p>
            <Link className="logIn-signIn-link" to={`/user/SignIn`}>
              <div className="logIn-createAccount">Créer un compte</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
