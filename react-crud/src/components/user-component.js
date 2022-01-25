import React, { Component } from "react";
import UserDataService from "../services/user.service";
import "./user-component.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      currentUser: {
        id: null,
        first_name: "",
        last_name: "",
        birth_date: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.id);
  }

  onChangeFirstName(e) {
    const first_name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          first_name: first_name
        }
      };
    });
  }

  onChangeLastName(e) {
    const last_name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          last_name: last_name
        }
      };
    });
  }

  onChangeBirthDate(e) {
    const birth_date = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          birth_date: birth_date
        }
      };
    });
  }


  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        description: description
      }
    }));
  }

  getUser(id) {
    UserDataService.get(id)
      .then(response => {
        this.setState({
          currentUser: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentUser.id,
      first_name: this.state.currentUser.first_name,
      last_name: this.state.currentUser.last_name,
      birth_date: this.state.currentUser.birth_date,
      description: this.state.currentUser.description,
      published: status
    };

    UserDataService.update(this.state.currentUser.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentUser: {
            ...prevState.currentUser,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateUser() {
    UserDataService.update(
      this.state.currentUser.id,
      this.state.currentUser
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "Dane użytkownika zostały poprawnie zaktualizowane!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUser() {    
    UserDataService.delete(this.state.currentUser.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/users')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        {currentUser ? (
          <div className="edit-form">
            <h4>Użytkownik</h4>
            <form>

            <div className="form-group">
                <label htmlFor="first_name">Imię</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={currentUser.first_name}
                  onChange={this.onChangeFirstName}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="last_name">Nazwisko</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={currentUser.last_name}
                  onChange={this.onChangeLastName}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="birth_date">Data urodzin</label>
                <input
                  type="text"
                  className="form-control"
                  id="birth_date"
                  value={currentUser.birth_date}
                  onChange={this.onChangeBirthDate}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="description">Opis użytkownika</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentUser.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group mt-2">
                <label>
                  <strong>Status konta:</strong>
                </label>
                {currentUser.published ? " Aktywne" : " Nieaktywne"}
              </div>
            </form>
            <div className="mt-2">
            {currentUser.published ? (
              <button
                className="btn btn-primary me-3"
                onClick={() => this.updatePublished(false)}
              >
                Deaktywuj
              </button>
            ) : (
              <button
                className="btn btn-primary me-3"
                onClick={() => this.updatePublished(true)}
              >
                Aktywuj
              </button>
            )}
            
            <button
              className="btn btn-danger me-3"
              onClick={this.deleteUser}
            >
              Usuń
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateUser}
            >
              Zaktualizuj
            </button>
            <p>{this.state.message}</p>
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Kliknij na użytkownika, aby go edytować</p>
          </div>
        )}
      </div>
    );
  }
}
