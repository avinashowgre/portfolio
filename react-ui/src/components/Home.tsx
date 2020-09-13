import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { Typewrite } from "./Typewrite";
import { makeStyles } from "@material-ui/core/styles";

const professionDescription = {
  title: `<h1>Hey there! <h1>`,
};

const useStyles = makeStyles({
  gridChild: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    top: 80,
  },
  responsiveImage: {
    height: "auto",
    width: "100%",
  },
});

export const Home = () => {
  const { title } = professionDescription;
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <div className={classes.gridChild}>
          <Typewrite text="Sample typewrite effect" />
          <Typewrite text="Sample typewrite effect" />
          <Typewrite text="Sample typewrite effect" />
        </div>
      </Grid>
      <Grid item md={6}>
        <Box display="flex" justifyContent="flex-end">
          <img
            className={classes.responsiveImage}
            src="https://colorlib.com/preview/theme/satner/img/banner/home-right.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
