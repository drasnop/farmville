import React, { Component } from "react";
import TextField from "material-ui/TextField";

class FarmPage extends Component {
  constructor(props) {
    super(props);

    // In a real app we would probably call the API
    // to get only the data for that farm

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(this.props.match.params.id, e.target.value);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(this.props.match.params.id, e.target.value);
  }

  render() {
    const id = this.props.match.params.id;
    const farm = this.props.farms[id];

    return (
      <div>
        <h1>{farm.name}</h1>
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
    );
  }
}

export default FarmPage;
