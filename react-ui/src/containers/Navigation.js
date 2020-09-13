import React, { Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLinkMui } from "../components";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  horizontal: {
    display: "flex",
  },
}));

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
            <List
              component="nav"
              aria-label="main mailbox folders"
              classes={{ root: classes.horizontal }}
            >
              <ListItem key={"Home"} component={NavLinkMui} exact to={"/"}>
                <Typography color="inherit" noWrap>
                  Home
                </Typography>
              </ListItem>
              <ListItem
                key={"Education"}
                component={NavLinkMui}
                exact
                to={"/education"}
              >
                <Typography color="inherit" noWrap>
                  Education
                </Typography>
              </ListItem>
              <ListItem
                key={"Other"}
                component={NavLinkMui}
                exact
                to={"/other"}
              >
                <Typography color="inherit" noWrap>
                  Other
                </Typography>
              </ListItem>
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
