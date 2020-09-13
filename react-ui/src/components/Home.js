import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { Typewrite } from "./Typewrite";
import { FreezeFrame } from "./FreezeFrame";

const professionDescription = {
  title: `<h1>Hey there! <br> I'm Avinash Mellamputi<br> <p class="job-title">Front End Engineer</p></h1>`,
};

export const Home = () => {
  const { title, subtitle, paragraph } = professionDescription;

  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typewrite title={title} subtitle={subtitle} paragraph={paragraph} />

          <Chip
            label={"I create web design & application"}
            className={"chip"}
          />
        </Box>
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
