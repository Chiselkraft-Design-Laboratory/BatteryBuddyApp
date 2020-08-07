import React from "react";
import { Toolbar, makeStyles } from "@material-ui/core";

import Navlink from "./navlink";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
}));
const NavigationBlock = ({ active, showlinks }) => {
  const classes = useStyle();
  return (
    <Toolbar className={classes.root}>
      [Brand]
      <Navlink text="home" />
      <Navlink text="analytics" />
      <Navlink text="diagnostics" isActive />
      <Navlink text="settings" />
    </Toolbar>
  );
};

export default NavigationBlock;
