import React from "react";
import DefaultTile from "../../../helpers/defaultTile";

const CellVoltageMetrics = ({ feed }) => {
  console.log("cellVoltage", feed);
  return (
    <DefaultTile wide title="Cell Voltage" caption="metrics"></DefaultTile>
  );
};

export default CellVoltageMetrics;
