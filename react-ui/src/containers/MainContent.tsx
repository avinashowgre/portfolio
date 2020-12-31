import React from "react";
import { Route, Switch } from "react-router-dom";

import Container from "@material-ui/core/Container";

import { About, Home, Projects } from "../components";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const MainContent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  );
};
