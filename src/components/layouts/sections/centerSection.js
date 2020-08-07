import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: theme.spacing(2),
  },
}));

const CenterSection = (props) => {
  const classes = useStyle();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      component="section"
      className={classes.root}
    >
      {props.children}
    </Grid>
  );
};

export default CenterSection;
