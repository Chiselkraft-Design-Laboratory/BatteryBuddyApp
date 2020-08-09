import React from "react";
import { Grid, makeStyles, Chip } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    chip: {
      alignItems: "center",
      margin: theme.spacing(0.5),
      textDecoration: "underline",
      background: "none",
    },
    warn: {
      color: theme.palette.ui.warn,
      fill: theme.palette.ui.warn,
    },
    err: {
      color: theme.palette.ui.danger,
      fill: theme.palette.ui.danger,
    },
    ok: {
      color: theme.palette.ui.success,
      fill: theme.palette.ui.success,
    },
  }),
  { index: 1 }
);
const HealthPill = (props) => {
  const classes = useStyle();
  return (
    <Grid item className={classes.root}>
      <Grid container direction="row" wrap="nowrap" justify="center">
        <Grid item className={classes.center}>
          {props.errors ? (
            <Chip
              className={clsx(classes.chip, classes.err)}
              label={props.errors + " errors"}
            />
          ) : null}

          {props.warnings ? (
            <Chip
              className={clsx(classes.chip, classes.warn)}
              label={props.warnings + " warnings"}
            />
          ) : null}

          {!props.errors && !props.warnings ? (
            <Chip
              className={clsx(classes.chip, classes.ok)}
              label={"No Problems Found"}
            />
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HealthPill;
