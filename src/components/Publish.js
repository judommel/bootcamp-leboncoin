import React from "react";
import axios from "axios";

class Publish extends React.Component {
  state = {
    title: "",
    description: "",
    price: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        {
          title: this.state.title,
          description: this.state.description,
          price: this.state.price
        },
        {
          headers: {
            authorization:
              "Bearer " +
              "IUWtZaYJNZEvqA1nDyDURjB6iJO8Yrgrj2DqccgXWXbbyIm5KpPk7QCJw5EtFDBS"
          }
        }
      );

      console.log(response.data);

      alert(
        `Merci ${
          response.data.creator.account.username
        } pour votre nouvelle annonce. Votre ${
          response.data.title
        } est en vente.`
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container publish">
        <div className="publish-title">
          <span className="publish-header">Votre annonce</span>
        </div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="publish-form">
            <div className="publish-box">
              <label>Titre de l'annonce</label>
              <input
                type="text"
                name="title"
                required
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>

            <div className="publish-box">
              <label>Texte de l'annonce</label>
              <textarea
                required
                type="text"
                rows="15"
                name="description"
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>

            <div className="publish-box">
              <label>Prix</label>
              <input
                type="text"
                name="price"
                onChange={e => this.setState({ price: e.target.value })}
              />
            </div>
          </div>

          <button className="publish-button" type="submit">
            Valider
          </button>
        </form>
      </div>
    );
  }
}

export default Publish;
