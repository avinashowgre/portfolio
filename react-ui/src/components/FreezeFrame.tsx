import React, { createRef, useEffect } from "react";
import ReactFreezeframe from "react-freezeframe";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 500,
  },
});

export const FreezeFrame = (props) => {
  const { url } = props;
  const classes = useStyles();
  const freeze = createRef<HTMLDivElement>();
  useEffect(() => {
    let stopTimeout, startTimeout;
    const start = () => {
      freeze.current.start();
      stopTimeout = setTimeout(() => {
        stop();
      }, 8000);
    };
    const stop = () => {
      freeze.current.stop();
    };
    startTimeout = setTimeout(() => start(), 1000);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(stopTimeout);
    };
  });

  console.log(url);

  return (
    <div className={classes.root}>
      <ReactFreezeframe
        ref={freeze}
        options={{
          trigger: false,
        }}
        src={url}
      />
    </div>
  );
};
