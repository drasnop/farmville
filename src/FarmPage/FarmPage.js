import React, { Component } from "react";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class FarmPage extends Component {
  constructor(props) {
    super(props);

    // In a real app we would probably call the API
    // to get only the data for that farm

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleHamburgerMenu = this.handleHamburgerMenu.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(this.props.match.params.id, e.target.value);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(this.props.match.params.id, e.target.value);
  }

  handleHamburgerMenu() {
    this.props.onDrawerToggle();
  }

  render() {
    const id = this.props.match.params.id;
    const farm = this.props.farms[id];

    if (typeof farm === "undefined")
      return <ErrorMessage text="Uh oh, we can't find this farm..." />;

    return (
      <div>
        <AppBar
          title={farm.name}
          onLeftIconButtonTouchTap={this.handleHamburgerMenu}
        />
        <div className="pageBody">
          <TextField
            value={farm.name}
            onChange={this.handleNameChange}
            floatingLabelText="Name"
          />
          <br />
          <TextField
            value={farm.address}
            onChange={this.handleAddressChange}
            floatingLabelText="Address"
          />
        </div>
      </div>
    );
  }
}

export default FarmPage;
