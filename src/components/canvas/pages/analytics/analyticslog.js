import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.D1,
      filter: "brightness(0.8)",
      color: theme.palette.D4,
      height: 140,
      overflowY: "auto",
      borderRadius: theme.spacing(0, 0, 2, 2),
    },
  }),
  { index: 1 }
);

const AnalyticsLog = ({ data }) => {
  const cl = useStyles();

  return (
    <Grid item xs={12} classes={{ root: cl.root }}>
      {JSON.stringify(data)}
    </Grid>
  );
};

export default AnalyticsLog;
