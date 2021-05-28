import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?5c45f1f3bb7d0e4e25fc0c62f00013ca=5c45f1f3bb7d0e4e25fc0c62f00013ca`,
        { withCredentials: true }
      )
      .then((response) => {
        // console.log(response.data);
        this.setState({
          movies: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>heres the page</h1>
      </div>
    );
  }
}
export default App;
