import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainContent, Navigation } from "./containers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

const initialState = {
  darkState: false,
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const { darkState } = state;
  const handleThemeChange = () => {
    setState({
      ...state,
      darkState: !darkState,
    });
  };

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navigation
          darkState={darkState}
          handleThemeChange={handleThemeChange}
        />
        <MainContent />
      </Router>
    </ThemeProvider>
  );
};
