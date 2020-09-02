import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import withCanvas from "../withCanvas";
import { sidebarWidth } from "../../constants/preferences";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minWidth: sidebarWidth,
    },
    paper: {},
  }),
  { index: 1 }
);

const SideBar = ({ canvas }) => {
  const cl = useStyles();

  return (
    <Grid item classes={{ root: cl.root }}>
      <Paper classes={{ root: cl.paper }}>SideBar</Paper>
    </Grid>
  );
};

export default withCanvas(SideBar);
