import React, { Component } from "react";
import "./App.css";
import farms from "../data/farms.json";
import sites from "../data/sites.json";
import FarmPage from "../FarmPage/FarmPage";

class App extends Component {
  constructor(props) {
    super(props);
    // In a real app we would load these from API
    this.state = {
      farms: farms,
      sites: sites
    };
    this.onAddressChange = this.onAddressChange.bind(this);
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
        {farm0.name}
        <FarmPage farm={farm0} onAddressChange={this.onAddressChange} />
      </div>
    );
  }
}

export default App;
