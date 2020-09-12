import React from "react";
import Typewriter from "typewriter-effect";

export const Typewrite = (props) => {
  const { title, subtitle, paragraph } = props;
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(title)
          .pauseFor(5000)
          .typeString(subtitle)
          .pauseFor(5000)
          .typeString(paragraph)
          .start();
      }}
    />
  );
};
