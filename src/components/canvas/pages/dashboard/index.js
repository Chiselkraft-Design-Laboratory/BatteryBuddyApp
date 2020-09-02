import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import withCanvas from "../../withCanvas";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const DashboardPage = ({ canvas }) => {
  const cl = useStyles();

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Paper>Dashboard Page</Paper>
    </Grid>
  );
};

export default withCanvas(DashboardPage);
