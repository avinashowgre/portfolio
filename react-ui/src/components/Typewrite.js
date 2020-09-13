import React from "react";
import Typewriter from "typewriter-effect";

export const Typewrite = (props) => {
  const { text } = props;
  console.log(text);
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(text)
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
      }}
    />
  );
};
