import React from "react";
import ReactFileReader from "react-file-reader";
import axios from "axios";

class Publish extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    files: []
  };

  handleFiles = files => {
    const newFiles = [...this.state.files, ...files.base64];

    this.setState({ files: newFiles });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/offer/publish",
        {
          title: this.state.title,
          description: this.state.description,
          price: Number(this.state.price),
          files: this.state.files
        },
        {
          headers: {
            authorization: "Bearer " + this.props.token
          }
        }
      );

      console.log(this.state);

      alert(
        `Merci ${
          response.data.creator.account.username
        } pour votre nouvelle annonce. Votre ${
          response.data.title
        } est en vente.`
      );
    } catch (error) {
      alert("Une erreur est survenue. Veuillez rentrer des données valides.");
      console.log(error);
    }
  };

  renderFiles() {
    const filesArray = [];
    for (let i = 0; i < this.state.files.length; i++) {
      filesArray.push(
        <img
          key={i}
          className="upload-img"
          onClick={() => {
            const newFiles = [...this.state.files];
            newFiles.splice(i, 1);
            this.setState({ files: newFiles });
          }}
          src={this.state.files[i]}
          alt="annonce"
        />
      );
    }
    console.log(filesArray);
    return filesArray;
  }

  render() {
    console.log(this.state.files);

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
            <div>
              <ReactFileReader
                fileTypes={[".png", ".jpg"]}
                base64={true}
                multipleFiles={true} // `false si une seule image`
                handleFiles={files => this.handleFiles(files)}
              >
                <div className="file-button">Choisir des images</div>
              </ReactFileReader>
            </div>
            {this.state.files && (
              <div className="file-box">{this.renderFiles()}</div>
            )}
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
