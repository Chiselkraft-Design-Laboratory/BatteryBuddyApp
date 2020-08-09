import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Constants
import { LinkMode } from "./constants/typedef";
import * as Url from "./constants/routes";

// Layouts
import {
  BaseLayout,
  DefaultView,
  CardView,
  SidePane,
  Page,
  Expand,
  Label,
} from "./layouts";

import * as BatteryInfo from "./blocks/batteryInfo";
import ShowMetrics from "./layouts/pages/dashboard/showMetrics";

class BatteryBuddyApp extends Component {
  constructor(props) {
    super(props);

    // states
    this.state = {
      isLinked: LinkMode.CANBUS,
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
    status = LinkMode.NONE;

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
      isLinked: LinkMode.NONE,
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
      isLinked: LinkMode.NONE,
    });
  }

  render() {
    // baking layout
    let sidepanel = (
      <SidePane>
        <BatteryInfo.ModelinfoPane
          make="Napino Inc"
          model="X-SERIES 457"
          linktype="CANBUS"
        />
        <BatteryInfo.MetricPill param="Voltage" value="12.45" suffix="v" />
        <BatteryInfo.MetricPill
          param="Voltage"
          value="12.45"
          suffix="v"
          alert
        />
        <BatteryInfo.MetricPill
          param="Voltage"
          value="12.45"
          suffix="v"
          alert
        />
        <BatteryInfo.MetricPill
          param="Voltage"
          value="12.45"
          suffix="v"
          alert
        />
        <BatteryInfo.HealthPill warnings={4} errors={2} />

        {/* fills blank space */}
        <Expand />
        <BatteryInfo.DisconnectPill />
        <BatteryInfo.SpecsPane
          qrcode={{ field: "value" }}
          year={2020}
          serial="X5210-8625978"
        >
          <Label size={6} caption="chemistry" value="Li-Polymer" />
          <Label size={6} caption="capacity" value="3200AH 24V" />
          <Label size={6} caption="cell manufacturer" value="LICHEN" />
          <Label size={6} caption="cell manufacturer" value="13S / 4P" />
        </BatteryInfo.SpecsPane>
      </SidePane>
    );

    let dashboard = (
      <Page>
        <ShowMetrics wide caption="metrics" title="Voltage">
          {/* insert graph component here */}
        </ShowMetrics>
        <ShowMetrics caption="metrics" title="Current">
          {/* insert graph component here */}
        </ShowMetrics>
        <ShowMetrics caption="metrics" title="Temperature">
          {/* insert graph component here */}
        </ShowMetrics>
        <ShowMetrics wide caption="metrics" title="SoC vs Time">
          {/* insert graph component here */}
        </ShowMetrics>
      </Page>
    );
    let settings = <Page>settings</Page>;
    let analytics = <Page>analytics</Page>;
    let diagnostics = <Page>diagnostics</Page>;

    return (
      <BaseLayout mode={this.state.isLinked}>
        {this.state.isLinked ? (
          <DefaultView sidepanel={sidepanel}>
            <Switch>
              <Route path={Url.DASHBOARD} exact>
                {dashboard}
              </Route>
              <Route path={Url.ANALYTICS}> {analytics}</Route>
              <Route path={Url.DIAGNOSTICS}>{diagnostics}</Route>
              <Route path={Url.SETTINGS}> {settings} </Route>
            </Switch>
          </DefaultView>
        ) : (
          <CardView>connection mode</CardView>
        )}
      </BaseLayout>
    );
  }
}

export default BatteryBuddyApp;
