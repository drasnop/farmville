import React, { Component } from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";

class SitePage extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCropChange = this.handleCropChange.bind(this);
    this.handleCreatedAtChange = this.handleCreatedAtChange.bind(this);
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

  render() {
    const id = this.props.match.params.id;
    const site = this.props.sites[id];

    return (
      <div>
        <h1>{site.name}</h1>
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
        <DatePicker
          value={site.createdAt}
          onChange={this.handleCreatedAtChange}
          hintText="Created on"
        />
      </div>
    );
  }
}

export default SitePage;
