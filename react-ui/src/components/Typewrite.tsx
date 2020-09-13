import React from "react";
import { Typewriter } from "react-typewriting-effect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

export const Typewrite = (props) => {
  const { text } = props;
  const classes = useStyles();
  console.log(text);
  return (
    <Typewriter
      string={text}
      delay={80}
      stopBlinkinOnComplete
      onComplete={() => {}}
      className={classes.root}
    />
  );
};
