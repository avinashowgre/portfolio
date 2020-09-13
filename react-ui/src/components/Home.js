import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { Typewrite } from "./Typewrite";
import { FreezeFrame } from "./FreezeFrame";
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
});

export const Home = () => {
  const { title, subtitle, paragraph } = professionDescription;
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
          <FreezeFrame
            url={
              "https://i.pinimg.com/originals/e1/f3/41/e1f3413bf5036045713341394f617225.gif"
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
};
