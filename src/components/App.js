import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Constants
import * as Ty from "./constants/typedef";
import * as Pr from "./constants/preferences";
import * as Url from "./constants/routes";

// Layout
import BaseLayout from "./layouts";
import CenterSection from "./layouts/sections/centerSection";
import DefaultSection from "./layouts/sections/defaultSection";

// Blocks
import NavigationBlock from "./blocks/navigation";
import FooterBlock from "./blocks/footer";
import SidepanelBlock from "./blocks/sidepanel";

// Pages
import {
  DashboardPage,
  AnalyticsPage,
  DiagnosticsPage,
  SettingsPage,
} from "./pages";

class BatteryBuddyApp extends Component {
  constructor(props) {
    super(props);

    // states
    this.state = {
      isLinked: Ty.LinkMode.CANBUS,
    };

    // bindings
    this.link = this.link.bind(this);
    this.unlink = this.unlink.bind(this);
    this.checklink = this.checklink.bind(this);
  }
  componentDidMount() {}

  link(mode) {
    let status = this.state.isLinked;
    // ...
    // try to connect (Pr.LINK_RETRY) times
    // ...

    // success
    status = mode;

    // failed after retry
    status = Ty.LinkMode.NONE;

    this.setState({
      isLinked: status,
    });

    return status;
  }

  unlink() {
    // ...
    if (this.state.isLinked) {
      // ...
      // unlink code
      // ...
    }
    // on success
    this.setState({
      isLinked: Ty.LinkMode.NONE,
    });
  }

  checklink() {
    // ...
    // check device link
    // ...

    // link success
    // return 1

    // link failed
    this.setState({
      isLinked: Ty.LinkMode.NONE,
    });
  }

  render() {
    // cooking layout
    let makeLayout;
    if (!this.state.isLinked) {
      // no link --show connection ui
      makeLayout = <CenterSection>connect dialog</CenterSection>;
    } else {
      // linked --show app ui
      makeLayout = (
        <DefaultSection sidepanel={<SidepanelBlock />}>
          <Switch>
            <Route path={Url.DASHBOARD} exact>
              <DashboardPage>home</DashboardPage>
            </Route>
            <Route path={Url.ANALYTICS}>
              <AnalyticsPage>Analytics</AnalyticsPage>
            </Route>
            <Route path={Url.DIAGNOSTICS}>
              <DiagnosticsPage>Diagnostics</DiagnosticsPage>
            </Route>
            <Route path={Url.SETTINGS}>
              <SettingsPage>Settings</SettingsPage>
            </Route>
          </Switch>
        </DefaultSection>
      );
    }

    return (
      <Fragment>
        <BaseLayout
          navigation={<NavigationBlock showlinks={this.state.isLinked} />}
          footer={<FooterBlock />}
        >
          {makeLayout}
        </BaseLayout>
      </Fragment>
    );
  }
}

export default BatteryBuddyApp;
