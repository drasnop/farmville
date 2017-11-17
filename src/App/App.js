import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../services/history";
import "./App.css";

import SideDrawer from "../SideDrawer/SideDrawer";
import FarmPage from "../FarmPage/FarmPage";
import SitePage from "../SitePage/SitePage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

// In a real app we would load these from API
import farms from "../data/farms.json";
import sites from "../data/sites.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farms: farms,
      sites: sites,
      sideDrawerOpen: true
    };

    this.onDrawerToggle = this.onDrawerToggle.bind(this);

    // Farms update methods
    this.onFarmNameChange = this.onFarmNameChange.bind(this);
    this.onFarmAddressChange = this.onFarmAddressChange.bind(this);

    // Sites update methods
    this.onSiteNameChange = this.onSiteNameChange.bind(this);
    this.onSiteCropChange = this.onSiteCropChange.bind(this);
    this.onSiteCreatedAtChange = this.onSiteCreatedAtChange.bind(this);
    this.deleteFactor = this.deleteFactor.bind(this);
  }

  componentDidMount() {
    // Convert dates into proper format
    const site0Id = Object.keys(this.state.sites)[0];
    let sites = { ...this.state.sites };
    sites[site0Id].createdAt = new Date(sites[site0Id].createdAt * 1000);
    this.setState({ sites });
  }

  onDrawerToggle() {
    let sideDrawerOpen = { ...this.state.sideDrawerOpen };
    sideDrawerOpen = !this.state.sideDrawerOpen;
    this.setState({ sideDrawerOpen });
  }

  /* Farms update methods */

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

  /* Site update methods */

  onSiteNameChange(id, name) {
    let sites = { ...this.state.sites };
    sites[id].name = name;
    this.setState({ sites });
  }

  onSiteCropChange(id, crop) {
    let sites = { ...this.state.sites };
    sites[id].crop = crop;
    this.setState({ sites });
  }

  onSiteCreatedAtChange(id, date) {
    let sites = { ...this.state.sites };
    sites[id].createdAt = date;
    this.setState({ sites });
  }

  deleteFactor(id, factorName) {
    let sites = { ...this.state.sites };
    sites[id].potentialFactors = sites[id].potentialFactors.filter(
      factor => factor !== factorName
    );
    this.setState({ sites });
  }

  /* render */

  render() {
    const ActiveFarmPage = props => {
      return (
        <FarmPage
          farms={this.state.farms}
          onNameChange={this.onFarmNameChange}
          onAddressChange={this.onFarmAddressChange}
          onDrawerToggle={this.onDrawerToggle}
          {...props}
        />
      );
    };

    const ActiveSitePage = props => {
      return (
        <SitePage
          sites={this.state.sites}
          onNameChange={this.onSiteNameChange}
          onCropChange={this.onSiteCropChange}
          onCreatedAtChange={this.onSiteCreatedAtChange}
          onDrawerToggle={this.onDrawerToggle}
          deleteFactor={this.deleteFactor}
          {...props}
        />
      );
    };

    const ActiveErrorMessage = props => {
      return (
        <ErrorMessage text="The page you are looking for hasn't grown yet!" />
      );
    };

    const defaultFarmId = Object.keys(this.state.farms)[0];

    return (
      <MuiThemeProvider>
        <Router history={history}>
          <div className={this.state.sideDrawerOpen ? "drawerOpen" : null}>
            <SideDrawer
              open={this.state.sideDrawerOpen}
              farms={this.state.farms}
              sites={this.state.sites}
            />
            <div className="main">
              <Switch>
                <Route path="/farm/:id" render={ActiveFarmPage} />
                <Route path="/site/:id" render={ActiveSitePage} />
                <Redirect exact from="/" to={`/farm/${defaultFarmId}`} />
                <Route component={ActiveErrorMessage} />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
