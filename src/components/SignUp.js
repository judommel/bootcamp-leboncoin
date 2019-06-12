import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    email: null,
    username: null,
    password: null,
    passwordBis: null,
    passwordCheck: false,
    error: null
  };

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.error !== null) {
      this.setState({ error: null });
    }
    axios
      .post("http://localhost:3001/user/sign_up", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        alert(`Bienvenue ${response.data.account.username} !`);
        this.props.onSignUp({
          id: response.data._id,
          token: response.data.token,
          username: response.data.account.username
        });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="sign-up-box">
          <div className="info-box">
            <h3>Pourquoi créer un compte ?</h3>
            <img src="../assets/img/reasons-why.jpg" alt="reasons-why" />
            {this.state.error && (
              <div className="error">
                {this.state.error.response.data.error}
              </div>
            )}
          </div>
          <form className="form-box" onSubmit={e => this.handleSubmit(e)}>
            <h3 className="form-title">Créez un compte</h3>
            <div className="sign-input-info">
              <label>Pseudo</label>{" "}
              <input
                required
                name="username"
                type="text"
                className="signup-input"
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
              />
            </div>
            <div className="sign-input-info">
              <label>Adresse e-mail</label>
              <input
                required
                name="email"
                type="email"
                className="signup-input"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>
            <div className="signup-pass">
              <div className="sign-input-info">
                <label>Mot de passe </label>
                <input
                  className="signup-input"
                  required
                  minLength="6"
                  name="password"
                  type="password"
                  onChange={e => {
                    this.setState({ password: e.target.value });

                    if (this.state.passwordBis !== null) {
                      if (e.target.value === this.state.passwordBis) {
                        this.setState({ passwordCheck: true });
                      } else {
                        this.setState({ passwordCheck: false });
                      }
                    }
                  }}
                />
              </div>
              <div className="sign-input-info">
                <label>Confirmer le mot de passe</label>
                <input
                  className="signup-input"
                  required
                  name="passwordAgain"
                  type="password"
                  minLength="6"
                  onChange={e => {
                    this.setState({ passwordBis: e.target.value });

                    if (e.target.value === this.state.password) {
                      this.setState({ passwordCheck: true });
                    } else {
                      this.setState({ passwordCheck: false });
                    }
                  }}
                />
              </div>
            </div>
            <div className="password-error">
              {this.state.password &&
              this.state.passwordBis &&
              this.state.passwordCheck === false
                ? "Le mot de passe ne correspond pas."
                : ""}
            </div>
            <div>
              <input type="checkbox" id="subscribePartners" />
              <label htmlFor="subscribePartners">
                Je souhaite recevoir des offres des partenaires du site
                leboncoin susceptibles de m'intéresser
              </label>
            </div>
            <div>
              <input type="checkbox" id="acceptCGV" />
              <label htmlFor="acceptCGV">
                J'accepte les Conditions Générales de Vente
              </label>
            </div>
            <button type="submit" className="signup-button">
              Créer mon compte personnel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
