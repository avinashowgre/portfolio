import React, { Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemLink } from "../components";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  horizontal: {
    display: "flex",
  },
}));

const navigationItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Other", url: "/other" },
];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Navigation = (props) => {
  const { darkState, handleThemeChange } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <List component="nav" classes={{ root: classes.horizontal }}>
              {navigationItems.map((item) => (
                <ListItemLink to={item.url} primary={item.label} />
              ))}
            </List>
            <div className={classes.grow} />
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
};
