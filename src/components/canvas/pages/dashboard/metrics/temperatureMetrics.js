import React from "react";
import DefaultTile from "../../../helpers/defaultTile";

const TemperatureMetrics = ({ feed }) => {
  // console.log("Temperature", feed);

  return (
    <DefaultTile title="Temperature" caption="metrics">
      graph here
    </DefaultTile>
  );
};

export default TemperatureMetrics;
