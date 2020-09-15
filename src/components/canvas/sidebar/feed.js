import React from "react";
import { makeStyles, Typography, Grid, Badge } from "@material-ui/core";
import withCanvas from "../withCanvas";
const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      width: "100%",
      padding: theme.spacing(1, 2.5),
      background: theme.palette.D3,
      marginBottom: "1px",
    },
  }),
  { index: 1 }
);

const SideBarFeed = ({ canvas, caption, value, suffix, alert }) => {
  const cl = useStyles(canvas.dense);
  return (
    <Grid item className={cl.root}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item xs>
          <Typography variant="h6">{caption}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {value}
            <small>{suffix}</small>
          </Typography>
        </Grid>
        <Grid item>
          {alert && <Badge className={cl.alert} color="error" variant="dot" />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withCanvas(SideBarFeed);