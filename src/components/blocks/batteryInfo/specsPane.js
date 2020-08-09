import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Label } from "../../layouts";

import GetQR from "./getQR";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
      background: theme.palette.ui.lite3,
      color: theme.palette.ui.dark3,
      fill: theme.palette.ui.dark3,
    },
  }),
  { index: 1 }
);

const SpecsPane = (props) => {
  const classes = useStyle();
  return (
    <Grid item className={classes.root}>
      <Grid container direction="column" wrap="nowrap">
        <Grid item>
          <Grid container direction="row">
            {props.children}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" wrap="nowrap">
            {props.qrocode !== null ? (
              <Grid item>
                <GetQR fields={props.qrcode}></GetQR>
              </Grid>
            ) : null}
            <Grid item xs>
              <Label caption="year" value={props.year} />
              <Label caption="serial" value={props.serial} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpecsPane;
