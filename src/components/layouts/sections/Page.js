import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%x",
    height: "100%",

    overflowY: "auto",
    overflowX: "hidden",

    "&::-webkit-scrollbar": {
      width: "2px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      backgroundColor: theme.palette.ui.dark2,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.ui.seagreen,
      opacity: 0.1,
    },
  },
}));
const Page = (props) => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root} alignItems="flex-start">
      <Grid container spacing={3}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Page;
