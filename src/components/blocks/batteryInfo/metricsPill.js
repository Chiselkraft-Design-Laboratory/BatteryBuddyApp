import React from "react";
import { Grid, Typography, Badge, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
      background: theme.palette.ui.dark3,
      marginBottom: "1px",
      "&:hover": {
        opacity: 0.8,
      },
    },
    alert: {
      margin: theme.spacing(1),
    },
  }),
  { index: 1 }
);
const MetricsPill = (props) => {
  const classes = useStyle();
  return (
    <Grid item className={classes.root}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item xs>
          <Typography variant="h6">{props.param}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {props.value}
            <small>{props.suffix}</small>
          </Typography>
        </Grid>
        {props.alert ? (
          <Grid item>
            <Badge className={classes.alert} color="error" variant="dot" />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default MetricsPill;
