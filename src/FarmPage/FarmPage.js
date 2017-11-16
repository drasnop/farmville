import React, { Component } from "react";
import TextField from "material-ui/TextField";

class FarmPage extends Component {
  constructor(props) {
    super(props);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>{this.props.farm.name}</h1>
        <TextField
          value={this.props.farm.address}
          onChange={this.handleAddressChange}
          floatingLabelText="Address"
        />
      </div>
    );
  }
}

export default FarmPage;
