import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5, 0),
  },
}));
const Label = ({ size, caption, value, reverse }) => {
  const classes = useStyle();
  return (
    <Grid item xs={size || "auto"} className={classes.root}>
      {reverse ? <Typography variant="h6">{value}</Typography> : null}
      <Typography variant="caption">{caption}</Typography>
      {reverse ? null : <Typography variant="h6">{value}</Typography>}
    </Grid>
  );
};

export default Label;
