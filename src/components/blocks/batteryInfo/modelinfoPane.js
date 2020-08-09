import React from "react";
import { Grid, Typography, Badge, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    indicator: {
      margin: theme.spacing(1),
    },
  }),
  { index: 1 }
);
const ModelinfoPane = (props) => {
  const classes = useStyle();
  return (
    <Grid item className={classes.root}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item xs>
          <Typography variant="h4">{props.make}</Typography>
          <Typography variant="subtitle1">{props.model}</Typography>
          <Typography variant="caption">{props.linktype}</Typography>
        </Grid>
        <Grid item>
          <Badge
            className={classes.indicator}
            color="primary"
            variant="dot"
          ></Badge>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ModelinfoPane;
