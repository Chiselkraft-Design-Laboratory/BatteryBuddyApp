import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { UrlPath } from "../../constants/routes";

const DashboardPage = lazy(() => import("./dashboard"));
const AnalyticsPage = lazy(() => import("./analytics"));
const DiagnosticsPage = lazy(() => import("./diagnostics"));
const SettingsPage = lazy(() => import("./settings"));

const PageProvider = () => {
  return (
    <Switch>
      <Route exact path={UrlPath.home} component={DashboardPage} />
      <Route path={UrlPath.analytics} component={AnalyticsPage} />
      <Route path={UrlPath.diagnostics} component={DiagnosticsPage} />
      <Route path={UrlPath.settingsPage} component={SettingsPage} />
    </Switch>
  );
};

export default PageProvider;
