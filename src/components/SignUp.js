import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    email: null,
    username: null,
    password: null,
    passwordBis: null,
    passwordCheck: false
  };

  render() {
    const { onSignUp } = this.props;

    return (
      <div className="container">
        <div className="sign-up-box">
          <div className="info-box">Pourquoi créer un compte ?</div>
          <div className="form-box">
            <h3 className="form-title">Créez un compte</h3>

            <div className="sign-input-info">
              <div>Pseudo</div>{" "}
              <input
                required
                type="text"
                className="signup-input"
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
              />
            </div>

            <div className="sign-input-info">
              <div>Adresse e-mail</div>{" "}
              <input
                required
                type="email"
                className="signup-input"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>

            <div className="signup-pass">
              <div className="sign-input-info" type="password">
                Mot de passe
                <input
                  className="signup-input"
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
                Confirmer le mot de passe
                <input
                  className="signup-input"
                  type="password"
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

            <button
              type="submit"
              className="signup-button"
              onClick={() => {
                if (
                  this.state.passwordCheck === true &&
                  this.state.password !== null &&
                  this.state.email !== null &&
                  this.state.username !== null
                ) {
                  axios
                    .post(
                      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
                      {
                        email: this.state.email,
                        username: this.state.username,
                        password: this.state.password
                      }
                    )
                    .then(response => {
                      console.log(response.data);
                      alert(`Bienvenue ${response.data.account.username} !`);
                      onSignUp(response.data);
                    });
                } else {
                  alert("Informations invalides.");
                }
              }}
            >
              Créer mon compte personnel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
