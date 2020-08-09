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
  PageContent,
  Filler,
  Label,
} from "./layouts";

// Blocks
import NavigationBlock from "./blocks/navigation";
import FooterBlock from "./blocks/footer";
import * as BatteryInfo from "./blocks/batteryInfo";

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
    // cooking layout
    let pageComposer;
    if (!this.state.isLinked) {
      // no link --show connection ui
      pageComposer = <CardView>connect dialog</CardView>;
    } else {
      // linked --show app ui
      pageComposer = (
        <DefaultView
          sidepanel={
            <SidePane>
              <BatteryInfo.ModelinfoPane
                make="Napino Inc"
                model="X-SERIES 457"
                linktype="CANBUS"
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
              <Filler />
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
          }
        >
          <Switch>
            <Route path={Url.DASHBOARD} exact>
              <PageContent>home</PageContent>
            </Route>
            <Route path={Url.ANALYTICS}>
              <PageContent>Analytics</PageContent>
            </Route>
            <Route path={Url.DIAGNOSTICS}>
              <PageContent>Diagnostics</PageContent>
            </Route>
            <Route path={Url.SETTINGS}>
              <PageContent>Settings</PageContent>
            </Route>
          </Switch>
        </DefaultView>
      );
    }

    return (
      <BaseLayout
        navigation={<NavigationBlock showlinks={this.state.isLinked} />}
        footer={<FooterBlock />}
      >
        {pageComposer}
      </BaseLayout>
    );
  }
}

export default BatteryBuddyApp;
