import React, { Component } from "react";
import TextField from "material-ui/TextField";

class FarmPage extends Component {
  constructor(props) {
    super(props);

    // In a real app we would probably call the API to get only that farm
    this.state = {
      id: this.props.match.params.id,
      farm: this.props.farms[this.props.match.params.id]
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.match.params.id,
      farm: nextProps.farms[nextProps.match.params.id]
    });
  }

  handleNameChange(e) {
    this.props.onNameChange(this.state.id, e.target.value);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(this.state.id, e.target.value);
  }

  render() {
    return (
      <div>
        <h1>{this.state.farm.name}</h1>
        <TextField
          value={this.state.farm.name}
          onChange={this.handleNameChange}
          floatingLabelText="Name"
        />
        <br />
        <TextField
          value={this.state.farm.address}
          onChange={this.handleAddressChange}
          floatingLabelText="Address"
        />
      </div>
    );
  }
}

export default FarmPage;
