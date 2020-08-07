import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    flexShrink: 1,

    overflowY: "auto",
    overflowX: "hidden",

    width: "290px",
    height: "100%",
    borderRadius: theme.spacing(2),

    "&::-webkit-scrollbar": {
      width: "1px",
    },

    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      backgroundColor: theme.palette.ui.dark2,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.ui.seagreen,
      opacity: 0.2,
    },
  },
}));

const SidepanelBlock = (props) => {
  const classes = useStyle();

  return (
    <Paper elevation={4} className={classes.root}>
      {props.children}
    </Paper>
  );
};

export default SidepanelBlock;
