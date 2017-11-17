import React from "react";
import Drawer from "material-ui/Drawer";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import history from "../services/history.js";

// I'm not using a class here since I don't need to hold a state on the side drawer
export default function SideDrawer(props) {
  const farms = Object.keys(props.farms).map(farmId => props.farms[farmId]);
  const sites = Object.keys(props.sites).map(siteId => props.sites[siteId]);

  function handleSiteClicked(id) {
    return navigate("/site", id);
  }

  function handleFarmClicked(id) {
    return navigate("/farm", id);
  }

  function navigate(path, id) {
    return function() {
      history.push(path + "/" + id);
    };
  }

  // It would be easier if the farms were storing an array of their siteIds
  function farmSites(farmId) {
    return sites
      .filter(site => site.farmId === farmId)
      .map(site => (
        <ListItem
          primaryText={site.name}
          key={site.id}
          onClick={handleSiteClicked(site.id)}
        />
      ));
  }

  const farmsList = farms.map(farm => (
    <ListItem
      primaryText={farm.name}
      key={farm.id}
      onClick={handleFarmClicked(farm.id)}
      nestedItems={farmSites(farm.id)}
    />
  ));

  return (
    <Drawer open={props.open}>
      <Subheader style={{ marginTop: "16px", marginBottom: "-8px" }}>
        My farms
      </Subheader>
      <List>{farmsList}</List>
    </Drawer>
  );
}
