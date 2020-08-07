import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(0),
  },
}));

const DefaultSection = (props) => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      spacing={0}
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item component="aside" className={classes.sidepanel}>
        {props.sidepanel}
      </Grid>
      <Grid item xs component="section" className={classes.page}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default DefaultSection;
