import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.D2,
      filter: "brightness(0,8)",
      height: 140,
      borderRadius: theme.spacing(0, 0, 2, 2),
    },
  }),
  { index: 1 }
);

const AnalyticsLog = () => {
  const cl = useStyles();
  return <Grid item xs={12} classes={{ root: cl.root }}></Grid>;
};

export default AnalyticsLog;
