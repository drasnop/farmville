import React, { Component } from "react";
import "./App.css";
import farms from "../data/farms.json";
import sites from "../data/sites.json";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FarmPage from "../FarmPage/FarmPage";
import SitePage from "../SitePage/SitePage";

class App extends Component {
  constructor(props) {
    super(props);
    // In a real app we would load these from API
    this.state = {
      farms: farms,
      sites: sites
    };
    // Convert dates into proper format
    // Farms update methods
    this.onFarmNameChange = this.onFarmNameChange.bind(this);
    this.onFarmAddressChange = this.onFarmAddressChange.bind(this);
    // Sites update methods
    this.onSiteNameChange = this.onSiteNameChange.bind(this);
    this.onSiteCropChange = this.onSiteCropChange.bind(this);
    this.onSiteCreatedAtChange = this.onSiteCreatedAtChange.bind(this);
  }

  componentDidMount() {
    const site0Id = Object.keys(this.state.sites)[0];
    let sites = { ...this.state.sites };
    sites[site0Id].createdAt = new Date(sites[site0Id].createdAt * 1000);
    this.setState({ sites });
  }

  onFarmNameChange(name) {
    const farm0Id = Object.keys(this.state.farms)[0];
    let farms = { ...this.state.farms };
    farms[farm0Id].name = name;
    this.setState({ farms });
  }

  onFarmAddressChange(address) {
    const farm0Id = Object.keys(this.state.farms)[0];
    let farms = { ...this.state.farms };
    farms[farm0Id].address = address;
    this.setState({ farms });
  }

  onSiteNameChange(name) {
    const site0Id = Object.keys(this.state.sites)[0];
    let sites = { ...this.state.sites };
    sites[site0Id].name = name;
    this.setState({ sites });
  }

  onSiteCropChange(crop) {
    const site0Id = Object.keys(this.state.sites)[0];
    let sites = { ...this.state.sites };
    sites[site0Id].crop = crop;
    this.setState({ sites });
  }

  onSiteCreatedAtChange(date) {
    const site0Id = Object.keys(this.state.sites)[0];
    let sites = { ...this.state.sites };
    sites[site0Id].createdAt = date;
    this.setState({ sites });
  }

  render() {
    const farm0 = this.state.farms[Object.keys(this.state.farms)[0]];
    const site0 = this.state.sites[Object.keys(this.state.sites)[0]];
    return (
      <MuiThemeProvider>
        <div className="App">
          <FarmPage
            farm={farm0}
            onNameChange={this.onFarmNameChange}
            onAddressChange={this.onFarmAddressChange}
          />
          <SitePage
            site={site0}
            onNameChange={this.onSiteNameChange}
            onCropChange={this.onSiteCropChange}
            onCreatedAtChange={this.onSiteCreatedAtChange}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
