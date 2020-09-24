import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

import withCanvas from "../../withCanvas";
import { pageOptions } from "../../../constants/preferences";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {
        padding: theme.spacing(1.5),
      },
      wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "flex-start",
        alignItems: "stretch",
      },
      header: {
        transition: "all 0.4s ease-in",
        marginBottom: theme.spacing(2),
      },
      content: {
        transition: "all 0.4s ease-in",
        height: pageOptions.minTileHeight,
      },
    }),
    { index: 1 }
  );

const DiagnosticsTile = ({ canvas, summary, children }) => {
  const cl = useStyles(canvas.dense)();
  return (
    <Grid item xs={12} md classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        {children}
      </Paper>
    </Grid>
  );
};

export default withCanvas(DiagnosticsTile);
