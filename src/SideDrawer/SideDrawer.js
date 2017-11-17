import React from "react";
import Drawer from "material-ui/Drawer";
import { List, ListItem } from "material-ui/List";
import { Link } from "react-router-dom";

export default function SideDrawer(props) {
  const farms = Object.keys(props.farms).map(farmId => props.farms[farmId]);
  const sites = Object.keys(props.sites).map(siteId => props.sites[siteId]);
  var history = props.history;

  function handleSiteClicked() {
    history.push("/site");
  }

  // It would be easier if the farms were storing an array of their siteIds
  function farmSites(farmId) {
    return sites
      .filter(site => site.farmId === farmId)
      .map(site => (
        <ListItem
          primaryText={site.name}
          key={site.id}
          onClick={handleSiteClicked}
        />
      ));
  }

  const farmsList = farms.map(farm => (
    <Link to="/farm">
      <ListItem primaryText={farm.name} nestedItems={farmSites(farm.id)} />
    </Link>
  ));

  return (
    <Drawer open={props.open}>
      <List>{farmsList}</List>
    </Drawer>
  );
}
