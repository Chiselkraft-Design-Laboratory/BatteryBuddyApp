import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import withCanvas from "../../withCanvas";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const DiagnosticsPage = ({ canvas }) => {
  const cl = useStyles();

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Paper>Diagnostics Page</Paper>;
    </Grid>
  );
};

export default withCanvas(DiagnosticsPage);
