import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

import { Label } from "../../layouts/";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      minHeight: "340px",
      padding: theme.spacing(2),
      borderRadius: theme.spacing(2),
    },
  }),
  { index: 1 }
);

const SimpleMetrics = (props) => {
  const classes = useStyle();

  return (
    <Grid item xs={props.wide ? 12 : 6}>
      <Paper elevation={4} className={classes.root}>
        <Grid container wrap={"nowrap"} direction="column">
          <Grid item >
            <Label reverse caption={props.caption} value={props.title} />
          </Grid>
          <Grid item xs >{props.children} </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SimpleMetrics;
