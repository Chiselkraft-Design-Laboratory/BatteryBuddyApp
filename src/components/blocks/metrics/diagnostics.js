import React from "react";
import { Grid, Paper, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Label } from "../../layouts/";

import { BatteryHealthIndicator } from "../../constants/typedef";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      borderRadius: theme.spacing(2),
      width: "100%",
    },
    wrapper: {
      width: "100%",
      height: "100%",
    },
    sidebar: {
      minHeight: "520px",
      width: "280px",
      height: "100%",
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2),
    },
    content: {
      minHeight: "520px",
      width: "100%",
      height: "100%",
    },
    btn: {
      padding: theme.spacing(1, 3),
      background: theme.palette.ui.yellowpantone,
      color: theme.palette.ui.dark2,
    },
    default: {
      background: theme.palette.ui.dark4,
      color: theme.palette.ui.lite,
    },
    perfect: {
      background: theme.palette.ui.yellowgreen,
      color: theme.palette.ui.dark2,
    },
    warning: {
      background: theme.palette.ui.yellowpantone,
      color: theme.palette.ui.dark2,
    },
    critical: {
      background: theme.palette.ui.orangered,
      color: theme.palette.ui.dark2,
    },
  }),
  { index: 1 }
);

const DiagMetrics = (props) => {
  const classes = useStyle();

  let HealthIndicator = classes.default;
  let btnDiagnostics = <Button className={classes.btn}>Run Diagnostics</Button>;

  return (
    <Grid item xs={12}>
      <Paper elevation={4} className={classes.root}>
        <Grid container className={classes.wrapper}>
          {props.children ? (
            <Grid item>
              <Paper
                elevation={6}
                className={clsx(classes.sidebar, HealthIndicator)}
              >
                <Label caption={props.caption} value={props.title} />
              </Paper>
            </Grid>
          ) : null}
          <Grid item xs>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              className={classes.content}
            >
              <Grid item>
                {props.children ? props.children : btnDiagnostics}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DiagMetrics;
