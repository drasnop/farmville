import React, { Component } from "react";
import "./App.css";
import farms from "../data/farms.json";
import sites from "../data/sites.json";

class App extends Component {
  constructor(props) {
    super(props);
    // In a real app we would load these from API
    this.state = {
      farms: farms,
      sites: sites
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.farms[Object.keys(this.state.farms)[0]].name}
      </div>
    );
  }
}

export default App;
