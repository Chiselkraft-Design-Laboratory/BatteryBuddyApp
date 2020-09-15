import React from "react";
import { makeStyles, Typography, Grid, Badge } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    "@keyframes blink": {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    root: {
      display: "flex",
      width: "100%",
      padding: theme.spacing(3),
    },
    indicator: {
      margin: theme.spacing(1),
    },
    badge: {
      backgroundColor: theme.palette.T1,
      animationName: "$blink",
      animationDuration: "0.3s",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
      animationTimingFunction: "ease-in-out",
    },
  }),
  { index: 1 }
);

const SideBarHeader = ({ make, model, linktype }) => {
  const cl = useStyles();
  return (
    <Grid item className={cl.root}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item xs>
          <Typography variant="h4">{make}</Typography>
          <Typography variant="subtitle1">{model}</Typography>
          <Typography variant="caption">{linktype}</Typography>
        </Grid>
        <Grid item>
          <Badge
            classes={{ colorPrimary: cl.badge }}
            className={cl.indicator}
            color="primary"
            variant="dot"
          ></Badge>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideBarHeader;
