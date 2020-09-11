import React from "react";
import DefaultTile from "../../../helpers/defaultTile";

const CurrentMetrics = ({ feed }) => {
  // console.log("Current", feed);
  return (
    <DefaultTile title="current" caption="metrics">
      graph here
    </DefaultTile>
  );
};

export default CurrentMetrics;
