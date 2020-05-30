import React from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/cardList";

class App extends React.Component {
  state = {
    myInput: "",
    monsters: [],
    films: [
      {
        id: 1,
        name: "Superman",
      },
      {
        id: 2,
        name: "Batman",
      },
      {
        id: 3,
        name: "Avenger",
      },
      {
        id: 4,
        name: "Harry Potter",
      },
    ],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({
      monsters: response.data,
    });
  };

  handleClick = () => {
    const filmName = this.state.myInput;
    const filmId = new Date().getTime();
    const films = {
      id: filmId,
      name: filmName,
    };
    const newfilm = [...this.state.films];
    newfilm.push(films);
    this.setState({ films: newfilm });
  };

  handleChange = (event) => {
    const myInputValue = event.currentTarget.value;
    this.setState({ myInput: myInputValue });
  };

  handleDelete = (id) => {
    const myfilms = [...this.state.films];
    const index = myfilms.findIndex((film) => {
      return film.id === id;
    });

    myfilms.splice(index, 1);
    this.setState({ films: myfilms });
  };

  render = () => {
    return (
      <div className="App">
        <div>
          <input
            onChange={this.handleChange}
            value={this.state.myInput}
            type={Text}
            placeholder="Ajoutez un nouvel élément"
            style={{ height: "50px", width: "300px", fontSize: 20 }}
          ></input>
          <button
            style={{ height: "50px", width: "300px" }}
            onClick={this.handleClick}
          >
            Ajouter
          </button>
          {this.state.films.map((film) => {
            return (
              <h1>
                {film.name}{" "}
                <button
                  onClick={() => this.handleDelete(film.id)}
                  style={{ width: "50px", height: "30px" }}
                >
                  X
                </button>{" "}
              </h1>
            );
          })}
        </div>
      </div>
    );
  };
}

export default App;
