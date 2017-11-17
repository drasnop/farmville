import React from "react";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/content/remove-circle-outline";
import EnterTextField from "material-ui-submit-field";

export default class PotentialFactors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFactor: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddFactor = this.handleAddFactor.bind(this);
    this.handleDeleteFactor = this.handleDeleteFactor.bind(this);
  }

  handleDeleteFactor(factor) {
    var that = this;
    return function() {
      that.props.deleteFactor(that.props.site.id, factor);
    };
  }

  handleOnChange(e) {
    this.setState({ newFactor: e.target.value });
  }

  handleAddFactor() {
    this.props.addFactor(this.props.site.id, this.state.newFactor);
    this.setState({ newFactor: "" });
  }

  render() {
    const potentialFactors = this.props.site.potentialFactors.map(factor => {
      return (
        <ListItem
          primaryText={factor}
          key={factor}
          rightIconButton={
            <IconButton onClick={this.handleDeleteFactor(factor)}>
              <DeleteIcon />
            </IconButton>
          }
        />
      );
    });

    return (
      <div>
        <Subheader>Potential Factors</Subheader>
        <List>{potentialFactors}</List>
        <EnterTextField
          style={{ paddingLeft: "16px" }}
          value={this.state.newFactor}
          onChange={this.handleOnChange}
          onEnterKeyPress={this.handleAddFactor}
          floatingLabelText="Add other factor..."
        />
      </div>
    );
  }
}
