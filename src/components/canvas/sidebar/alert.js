import React from "react";
import clsx from "clsx";
import { makeStyles, Grid, Chip } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexBasis: 100,
      display: "flex",
      width: "100%",
      padding: theme.spacing(2, 3),
    },
    chip: {
      alignItems: "center",
      margin: theme.spacing(0.5),
      textDecoration: "underline",
      background: "none",
    },
    warn: {
      color: theme.palette.T4,
      fill: theme.palette.T4,
    },
    err: {
      color: theme.palette.T5,
      fill: theme.palette.T5,
    },
    ok: {
      color: theme.palette.T3,
      fill: theme.palette.T3,
    },
  }),
  { index: 1 }
);

const SideBarAlert = ({ warnings, errors }) => {
  const cl = useStyles();
  return (
    <Grid item className={cl.root}>
      <Grid container direction="row" wrap="nowrap" justify="center">
        <Grid item className={cl.center}>
          {errors ? (
            <Chip
              className={clsx(cl.chip, cl.err)}
              label={errors + " errors"}
            />
          ) : null}

          {warnings ? (
            <Chip
              className={clsx(cl.chip, cl.warn)}
              label={warnings + " warnings"}
            />
          ) : null}

          {!errors && !warnings ? (
            <Chip
              className={clsx(cl.chip, cl.ok)}
              label={"No Problems Found"}
            />
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBarAlert;
