import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import { SIDEPANEL_WIDTH } from "../../constants/preferences";
const useStyle = makeStyles((theme) => ({
  root: {
    flexShrink: 1,

    width: SIDEPANEL_WIDTH,
    height: "100%",
    marginRight: theme.spacing(2),
    overflowY: "auto",

    borderRadius: theme.spacing(2),

    "&::-webkit-scrollbar": {
      width: "4px",
    },

    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.ui.dark2,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.ui.dark3,
      borderRadius: "2px",
      opacity: 0.8,
    },
  },
  tools: {
    height: "100%",
  },
}));

const SidePane = (props) => {
  const classes = useStyle();

  return (
    <Paper elevation={4} className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        wrap="nowrap"
        className={classes.tools}
      >
        {props.children}
      </Grid>
    </Paper>
  );
};

export default SidePane;
