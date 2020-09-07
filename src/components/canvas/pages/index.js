import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import { UrlPath } from "../../constants/routes";

const DashboardPage = lazy(() => import("./dashboard"));
const AnalyticsPage = lazy(() => import("./analytics"));
const DiagnosticsPage = lazy(() => import("./diagnostics"));
const SettingsPage = lazy(() => import("./settings"));

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const PageProvider = () => {
  const cl = useStyles();

  return (
    <Grid item xs>
      <Grid container classes={{ root: cl.root }}>
        <Switch>
          <Route exact path={UrlPath.home} component={DashboardPage} />
          <Route path={UrlPath.analytics} component={AnalyticsPage} />
          <Route path={UrlPath.diagnostics} component={DiagnosticsPage} />
          <Route path={UrlPath.settingsPage} component={SettingsPage} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default PageProvider;
