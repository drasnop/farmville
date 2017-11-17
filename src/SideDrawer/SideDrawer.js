import React from "react";
import Drawer from "material-ui/Drawer";
import { List, ListItem } from "material-ui/List";

export default function SideDrawer(props) {
  const farms = Object.keys(props.farms).map(farmId => props.farms[farmId]);
  const sites = Object.keys(props.sites).map(siteId => props.sites[siteId]);

  // It would be easier if the farms were storing an array of their siteIds
  function farmSites(farmId) {
    return sites
      .filter(site => site.farmId === farmId)
      .map(site => <ListItem primaryText={site.name} key={site.id} />);
  }

  const farmsList = farms.map(farm => (
    <ListItem primaryText={farm.name} nestedItems={farmSites(farm.id)} />
  ));

  return (
    <Drawer open={props.open}>
      <List>{farmsList}</List>
    </Drawer>
  );
}
