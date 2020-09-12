import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    color: "white",
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
            <Button color="inherit" to="/" component={RouterLink}>
              <Typography color="inherit" noWrap className={classes.title}>
                Home
              </Typography>
            </Button>
            <Button color="inherit" to="/education" component={RouterLink}>
              <Typography color="inherit" noWrap className={classes.title}>
                Portfolio
              </Typography>
            </Button>
            <Button color="inherit" to="/other" component={RouterLink}>
              <Typography color="inherit" noWrap className={classes.title}>
                Other
              </Typography>
            </Button>
            <div className={classes.grow} />
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
};
