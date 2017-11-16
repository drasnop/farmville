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
    this.props.onNameChange(e.target.value);
  }

  handleCropChange(e) {
    this.props.onCropChange(e.target.value);
  }

  handleCreatedAtChange(e, date) {
    this.props.onCreatedAtChange(date);
  }

  render() {
    return (
      <div>
        <h1>{this.props.site.name}</h1>
        <TextField
          value={this.props.site.name}
          onChange={this.handleNameChange}
          floatingLabelText="Name"
        />
        <br />
        <TextField
          value={this.props.site.crop}
          onChange={this.handleCropChange}
          floatingLabelText="Crop"
        />
        <DatePicker
          value={this.props.site.createdAt}
          onChange={this.handleCreatedAtChange}
          hintText="Created on"
        />
      </div>
    );
  }
}

export default SitePage;
