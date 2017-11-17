import React, { Component } from "react";
import "./App.css";
import farms from "../data/farms.json";
import sites from "../data/sites.json";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router, Route, Switch } from "react-router-dom";
import history from "../services/history";

import SideDrawer from "../SideDrawer/SideDrawer";
import FarmPage from "../FarmPage/FarmPage";
import SitePage from "../SitePage/SitePage";

class App extends Component {
  constructor(props) {
    super(props);
    // In a real app we would load these from API
    this.state = {
      farms: farms,
      sites: sites,
      sideDrawerOpen: true
    };
    // Farms update methods
    this.onFarmNameChange = this.onFarmNameChange.bind(this);
    this.onFarmAddressChange = this.onFarmAddressChange.bind(this);
    // Sites update methods
    this.onSiteNameChange = this.onSiteNameChange.bind(this);
    this.onSiteCropChange = this.onSiteCropChange.bind(this);
    this.onSiteCreatedAtChange = this.onSiteCreatedAtChange.bind(this);
  }

  componentDidMount() {
    // Convert dates into proper format
    const site0Id = Object.keys(this.state.sites)[0];
    let sites = { ...this.state.sites };
    sites[site0Id].createdAt = new Date(sites[site0Id].createdAt * 1000);
    this.setState({ sites });
  }

  onFarmNameChange(id, name) {
    let farms = { ...this.state.farms };
    farms[id].name = name;
    this.setState({ farms });
  }

  onFarmAddressChange(id, address) {
    let farms = { ...this.state.farms };
    farms[id].address = address;
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
    const site0 = this.state.sites[Object.keys(this.state.sites)[0]];

    const ActiveFarmPage = props => {
      return (
        <FarmPage
          farms={this.state.farms}
          onNameChange={this.onFarmNameChange.bind(this)}
          onAddressChange={this.onFarmAddressChange.bind(this)}
          {...props}
        />
      );
    };

    const ActiveSitePage = props => {
      return (
        <SitePage
          site={site0}
          onNameChange={this.onSiteNameChange}
          onCropChange={this.onSiteCropChange}
          onCreatedAtChange={this.onSiteCreatedAtChange}
          {...props}
        />
      );
    };

    return (
      // <Router>
      <MuiThemeProvider>
        <Router history={history}>
          <div className="App">
            <SideDrawer
              open={this.state.sideDrawerOpen}
              farms={this.state.farms}
              sites={this.state.sites}
            />
            <div className="main">
              <Switch>
                <Route path="/farm/:id" render={ActiveFarmPage} />
                <Route path="/site/:id" render={ActiveSitePage} />
                <Route
                  render={() => (
                    <h1>The page you're looking for hasn't grown yet</h1>
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
      // </Router>
    );
  }
}

export default App;
