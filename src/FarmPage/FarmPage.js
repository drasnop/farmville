import React, { Component } from "react";

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
        <input
          value={this.props.farm.address}
          onChange={this.handleAddressChange}
        />
      </div>
    );
  }
}

export default FarmPage;
