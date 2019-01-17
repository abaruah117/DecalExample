import React, { Component } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherForm />
          <br />
        </header>
      </div>
    );
  }
}

export default App;
