import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    qr: {
      width: "104px",
      height: "104px",
      margin: theme.spacing(1, 2, 1, 0),
      background: theme.palette.ui.dark3,
      color: theme.palette.ui.dark3,
      fill: theme.palette.ui.dark3,
    },
  }),
  { index: 1 }
);

const GetQR = ({ fields }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <div className={classes.qr}></div>
    </Grid>
  );
};

export default GetQR;
