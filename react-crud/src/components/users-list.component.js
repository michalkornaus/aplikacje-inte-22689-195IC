import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { Link } from "react-router-dom";
import "./user-component.css";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchLastName = this.onChangeSearchLastName.bind(this);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.unsetActiveUser = this.unsetActiveUser.bind(this);
    this.removeAllUsers = this.removeAllUsers.bind(this);
    this.searchLastName = this.searchLastName.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchLastName: ""
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  onChangeSearchLastName(e) {
    const searchLastName = e.target.value;

    this.setState({
      searchLastName: searchLastName
    });
  }

  retrieveUsers() {
    UserDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }

  setActiveUser(user, index) {
    if(this.state.currentUser == user && this.state.currentIndex == index)
    { this.unsetActiveUser(); }
    else
    {
      this.setState({
        currentUser: user,
        currentIndex: index
      });
    }
  }

  unsetActiveUser()
  {
    this.setState({
      currentUser: null,
      currentIndex: -1,
    });
  }

  deleteUser() {    
    UserDataService.delete(this.state.currentUser.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/users')
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  removeAllUsers() {
    UserDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchLastName() {
    UserDataService.findByLastName(this.state.searchLastName)
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchLastName, users, currentUser, currentIndex } = this.state;
    const length = users.length;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Szukaj przez nazwisko"
              value={searchLastName}
              onChange={this.onChangeSearchLastName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchLastName}
              >
                Szukaj
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista użytkowników</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.last_name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUsers}
          >
            Usuń wszystkich
          </button>
        </div>
        <div className="col-md-6">
          {currentUser ? (
            <div>
              <h4>Użytkownik</h4>
              <div>
                <label>
                  <strong>Imię:</strong>
                </label>{" "}
                {currentUser.first_name}
              </div>
              <div>
                <label>
                  <strong>Nazwisko:</strong>
                </label>{" "}
                {currentUser.last_name}
              </div>
              <div>
                <label>
                  <strong>Opis użytkownika:</strong>
                </label>{" "}
                {currentUser.description}
              </div>
              <div>
                <label>
                  <strong>Status konta:</strong>
                </label>{" "}
                {currentUser.published ? "Aktywne" : "Nieaktywne"}
              </div>
              
              <Link
                to={"/users/" + currentUser.id}
                className="badge badge-secondary"
              ><button type="button" className="btn btn-primary">
                Edytuj
                </button>
              </Link>
              <button type="button" className="btn btn-danger"
              onClick={this.deleteUser}>
                Usuń
                </button>
              
            </div>
          ) : (
            <div>
              <br />
              {length > 0 ? (<p>Kliknij na użytkownika, aby go edytować</p>) : (<p>Nie ma obecnie żadnych użytkowników</p>)}
            </div>
          )}
        </div>
      </div>
    );
  }
}