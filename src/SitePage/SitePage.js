import React, { Component } from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import AppBar from "material-ui/AppBar";
import PotentialFactors from "../PotentialFactors/PotentialFactors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class SitePage extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCropChange = this.handleCropChange.bind(this);
    this.handleCreatedAtChange = this.handleCreatedAtChange.bind(this);
    this.handleHamburgerMenu = this.handleHamburgerMenu.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(this.props.match.params.id, e.target.value);
  }

  handleCropChange(e) {
    this.props.onCropChange(this.props.match.params.id, e.target.value);
  }

  handleCreatedAtChange(e, date) {
    this.props.onCreatedAtChange(this.props.match.params.id, date);
  }

  handleHamburgerMenu() {
    this.props.onDrawerToggle();
  }

  render() {
    const id = this.props.match.params.id;
    const site = this.props.sites[id];

    if (typeof site === "undefined")
      return <ErrorMessage text="Uh oh, we can't find this site..." />;

    return (
      <div>
        <AppBar
          title={site.name}
          onLeftIconButtonTouchTap={this.handleHamburgerMenu}
        />
        <div className="pageBody">
          <TextField
            value={site.name}
            onChange={this.handleNameChange}
            floatingLabelText="Name"
          />
          <br />
          <TextField
            value={site.crop}
            onChange={this.handleCropChange}
            floatingLabelText="Crop"
          />
          <br />
          <DatePicker
            value={site.createdAt}
            onChange={this.handleCreatedAtChange}
            hintText="Created on"
          />
          <br />
          <PotentialFactors
            site={site}
            addFactor={this.props.addFactor}
            deleteFactor={this.props.deleteFactor}
          />
        </div>
      </div>
    );
  }
}

export default SitePage;
