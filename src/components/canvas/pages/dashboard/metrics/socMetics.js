import React from "react";
import DefaultTile from "../../../helpers/defaultTile";

const SoCMetrics = ({ feed }) => {
  // console.log("SoC", feed);

  return (
    <DefaultTile wide title={"SoC vs Time"} caption="metrics">
      graph here
    </DefaultTile>
  );
};

export default SoCMetrics;
