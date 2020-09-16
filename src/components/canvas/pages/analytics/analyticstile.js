import React from "react";
import clsx from "clsx";
import { makeStyles, Grid, Box, Paper } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1.5),
    },
    wrapper: {
      background: theme.palette.D3,
    },
    content: {
      "&  > *": {
        padding: theme.spacing(1.5, 3),
      },
    },
    footer: {
      padding: theme.spacing(2, 3),
    },
  }),
  { index: 1 }
);

const AnalyticsTile = ({ header, children, footer }) => {
  const cl = useStyles();
  return (
    <Grid item xs={12} classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        <Paper elevation={12} component="section">
          <Grid container component="article" classes={{ root: cl.content }}>
            {children}
          </Grid>
        </Paper>
        <Box classes={{ root: cl.footer }} component="article">
          {footer}
        </Box>
      </Paper>
    </Grid>
  );
};

export default AnalyticsTile;
