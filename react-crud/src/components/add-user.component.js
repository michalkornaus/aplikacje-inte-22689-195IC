import React, { Component } from "react";
import UserDataService from "../services/user.service";
import "./user-component.css";

export default class UserTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      first_name: "",
      last_name: "",
      birth_date: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  onChangeBirthDate(e) {
    this.setState({
      birth_date: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveUser() {
    var data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      birth_date: this.state.birth_date,
      description: this.state.description
    };

    UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          birth_date: response.data.birth_date,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        document.getElementById("alert-p").innerHTML = "";
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        document.getElementById("alert-p").innerHTML = "Podaj poprawne dane użytkownika!";
      });
  }

  newUser() {
    this.setState({
      id: null,
      first_name: "",
      last_name: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        <div>
              <p id="alert-p" className="alert-p"></p>
            </div>
        {this.state.submitted ? (
          <div>
            <h4>Poprawnie utworzyłeś użytkownika!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Dodaj nowego użytkownika
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="first_name">Imię</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                required
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
                name="first_name"
              />
            </div>

            <div className="form-group mt-1">
              <label htmlFor="last_name">Nazwisko</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                required
                value={this.state.last_name}
                onChange={this.onChangeLastName}
                name="last_name"
              />
            </div>

            <div className="form-group mt-1">
              <label htmlFor="birth_date">Data urodzin</label>
              <input
                type="date"
                className="form-control"
                id="birth_date"
                required
                min="1900-01-01"
                max="2022-01-25"
                onChange={this.onChangeBirthDate}
                name="birth_date"
              />
            </div>

            <div className="form-group mt-1">
              <label htmlFor="description">Opis użytkownika</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success mt-3">
              Zapisz użytkownika
            </button>
          </div>
        )}
      </div>
    );
  }
}