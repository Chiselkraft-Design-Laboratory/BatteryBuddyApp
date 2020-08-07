import React from "react";
import { Toolbar, Box, makeStyles } from "@material-ui/core";

import * as Url from "../../constants/routes";
import { SIDEPANEL_WIDTH } from "../../constants/preferences";
import {
  BrandIcon,
  DashboardIcon,
  AnalyticsIcon,
  DiagnosticsIcon,
  SettingsIcon,
} from "../../icons";

import Navlink from "./navlink";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    alignItems: "flex-end",
  },
  brand: {
    width: SIDEPANEL_WIDTH,
  },
  links: {
    flexGrow: 1,
  },
}));
const NavigationBlock = ({ active, showlinks }) => {
  const classes = useStyle();

  return (
    <Toolbar className={classes.root}>
      <Box className={classes.brand}>
        <BrandIcon size={80} />
      </Box>

      {showlinks ? (
        <Box className={classes.links}>
          <Navlink
            icon={<DashboardIcon size={24} />}
            label="home"
            url={Url.DASHBOARD}
          />
          <Navlink
            icon={<AnalyticsIcon size={24} />}
            label="analytics"
            url={Url.ANALYTICS}
          />
          <Navlink
            icon={<DiagnosticsIcon size={24} />}
            label="diagnostics"
            url={Url.DIAGNOSTICS}
          />
          <Navlink
            icon={<SettingsIcon size={24} />}
            label="settings"
            url={Url.SETTINGS}
          />
        </Box>
      ) : null}
    </Toolbar>
  );
};

export default NavigationBlock;
