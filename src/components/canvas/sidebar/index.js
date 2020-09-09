import React from "react";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";

import withCanvas from "../withCanvas";
import { sidebarOptions } from "../../constants/preferences";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: sidebarOptions.width,
      padding: theme.spacing(1.5),
    },
    wrapper: {
      padding: theme.spacing(2, 3),
      height: "100%",
      overflowY: "auto",
    },
  }),
  { index: 1 }
);

const SideBar = ({ canvas }) => {
  const cl = useStyles();

  return (
    <Grid item xs={canvas.dense ? 12 : undefined} classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        <Typography variant="h6">Sidebar</Typography>
      </Paper>
    </Grid>
  );
};

export default withCanvas(SideBar);
