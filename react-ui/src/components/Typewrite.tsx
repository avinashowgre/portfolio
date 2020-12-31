import React from "react";
import Typist from "react-typist";

export const Typewrite = (props: any) => {
  const { children } = props;
  return <Typist>{children}</Typist>;
};
