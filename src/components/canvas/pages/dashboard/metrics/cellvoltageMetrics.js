import React from "react";
// import { makeStyles } from "@material-ui/core";

import DefaultTile from "../../../helpers/defaultTile";

// const useStyles = makeStyles(
//   (theme) => ({
//     root: {},
//   }),
//   { index: 1 }
// );

const CellVoltageMetrics = () => {
  // const cl = useStyles();

  return (
    <DefaultTile wide title="Cell Voltage" caption="metrics">
      graph here
    </DefaultTile>
  );
};

export default CellVoltageMetrics;
