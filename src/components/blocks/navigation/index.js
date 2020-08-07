import React from "react";
import { Toolbar, makeStyles } from "@material-ui/core";

import * as Url from "../../constants/routes";

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
      <Navlink text="home" url={Url.DASHBOARD} />
      <Navlink text="analytics" url={Url.ANALYTICS} />
      <Navlink text="diagnostics" url={Url.DIAGNOSTICS} isActive />
      <Navlink text="settings" url={Url.SETTINGS} />
    </Toolbar>
  );
};

export default NavigationBlock;
