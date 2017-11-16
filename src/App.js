import React, { Component } from "react";
import Clock from "./Clock.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> {this.props.text} </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code> src / App.js </code> and save to reload.
        </p>
        <h1> Hello, {formatName(user)}! </h1>
        <Clock />
      </div>
    );
  }
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

export default App;
