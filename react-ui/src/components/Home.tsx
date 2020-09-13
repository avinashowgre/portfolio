import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { Typewrite } from "./Typewrite";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
          <Typography variant="h3" color="secondary">
            Hey there!
          </Typography>
          <Typography variant="h1" color="secondary">
            I'm Avinash
          </Typography>
          <Typography variant="h4" color="textSecondary">
            Front End Engineer
          </Typography>
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
