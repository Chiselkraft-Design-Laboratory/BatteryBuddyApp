import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

import { Label } from "../../index";

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
const ShowMetrics = (props) => {
  const classes = useStyle();
  return (
    <Grid item xs={props.wide ? 12 : 6}>
      <Paper elevation={4} className={classes.root}>
        <Grid container>
          <Grid item>
            <Label reverse caption={props.caption} value={props.title} />
          </Grid>
          <Grid item>{props.children}</Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ShowMetrics;
