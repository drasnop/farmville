import React, { Component } from "react";
import "./App.css";
import farms from "../data/farms.json";
import sites from "../data/sites.json";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FarmPage from "../FarmPage/FarmPage";

class App extends Component {
  constructor(props) {
    super(props);
    // In a real app we would load these from API
    this.state = {
      farms: farms,
      sites: sites
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
  }

  onNameChange(name) {
    const farm0Id = Object.keys(this.state.farms)[0];
    let farms = { ...this.state.farms };
    farms[farm0Id].name = name;
    this.setState({ farms });
  }

  onAddressChange(address) {
    const farm0Id = Object.keys(this.state.farms)[0];
    let farms = { ...this.state.farms };
    farms[farm0Id].address = address;
    this.setState({ farms });
  }

  render() {
    const farm0 = this.state.farms[Object.keys(this.state.farms)[0]];
    return (
      <div className="App">
        <MuiThemeProvider>
          <FarmPage
            farm={farm0}
            onNameChange={this.onNameChange}
            onAddressChange={this.onAddressChange}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
