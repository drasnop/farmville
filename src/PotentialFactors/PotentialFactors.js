import React from "react";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/content/remove-circle-outline";

export default class PotentialFactors extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteFactor = this.handleDeleteFactor.bind(this);
  }

  handleDeleteFactor(factor) {
    var that = this;
    return function() {
      that.props.deleteFactor(that.props.site.id, factor);
    };
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
      </div>
    );
  }
}
