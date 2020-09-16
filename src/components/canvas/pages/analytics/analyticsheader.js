import React from "react";
import { makeStyles, Box, Typography, Button, Grid } from "@material-ui/core";
import { SplitViewIcon, MergeViewIcon } from "../../../assets";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
    },
    grow: {
      flexGrow: 1,
    },
    btnSplit: {
      padding: 0,
      color: theme.palette.L1,
      fill: theme.palette.L1,
      transition: "all 0.4s ease-in",
      "&:hover": {
        background: "none",
        color: theme.palette.T1,
        fill: theme.palette.T1,
      },
    },
    btnSplitLabel: {
      flexDirection: "row",
    },
  }),
  { index: 1 }
);

const AnalyticsHeader = ({ split, toggleSplit }) => {
  const cl = useStyles();
  return (
    <Grid item xs={12} classes={{ root: cl.root }}>
      <Box>
        <Typography variant="h6">Analytics</Typography>
      </Box>
      <div className={cl.grow} />
      <Box>
        <Button
          classes={{ root: cl.btnSplit, label: cl.btnSplitLabel }}
          endIcon={split ? <MergeViewIcon /> : <SplitViewIcon />}
          onClick={toggleSplit}
          disableRipple
        >
          {split ? "merge" : "split"}
        </Button>
      </Box>
    </Grid>
  );
};

export default AnalyticsHeader;
