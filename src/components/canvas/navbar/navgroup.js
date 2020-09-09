import React from "react";
import { UrlPath } from "../../constants/routes";
import NavLink from "./navlink";

import {
  BatteryIcon,
  DashboardIcon,
  AnalyticsIcon,
  DiagnosticsIcon,
  SettingsIcon,
} from "../../assets";

let NavGroup = ({ extended }) => {
  return (
    <React.Fragment>
      {extended && (
        <NavLink
          extended={extended}
          icon={<BatteryIcon size={extended ? 28 : undefined} />}
          label="info"
          url="#info"
        />
      )}
      <NavLink
        extended={extended}
        icon={<DashboardIcon size={extended ? 28 : undefined} />}
        label="Home"
        url={UrlPath.home}
      />
      <NavLink
        extended={extended}
        icon={<AnalyticsIcon size={extended ? 28 : undefined} />}
        label="Analytics"
        url={UrlPath.analytics}
      />
      <NavLink
        extended={extended}
        icon={<DiagnosticsIcon size={extended ? 28 : undefined} />}
        label="Diagnostics"
        url={UrlPath.diagnostics}
      />
      <NavLink
        extended={extended}
        icon={<SettingsIcon size={extended ? 28 : undefined} />}
        label="Settings"
        url={UrlPath.settings}
      />
    </React.Fragment>
  );
};

export default React.memo(NavGroup);
