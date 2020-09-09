import React from "react";
// import { makeStyles } from "@material-ui/core";

import DefaultTile from "../../../helpers/defaultTile";

// const useStyles = makeStyles(
//   (theme) => ({
//     root: {},
//   }),
//   { index: 1 }
// );

const SoCMetrics = () => {
  // const cl = useStyles();

  return (
    <DefaultTile wide title={"SoC vs Time"} caption="metrics">
      graph here
    </DefaultTile>
  );
};

export default SoCMetrics;
