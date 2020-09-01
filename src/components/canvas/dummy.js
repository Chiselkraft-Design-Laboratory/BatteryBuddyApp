import React from "react";
import withCanvas from "./withCanvas";

const Dummy = (props) => {
  const { canvas } = props;
  console.log("canvas", canvas);
  return <div></div>;
};

export default withCanvas(Dummy);
