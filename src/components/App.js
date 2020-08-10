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

// Blocks
import * as BatteryInfo from "./blocks/batteryInfo";
import SimpleMetrics from "./blocks/metrics/simpleMetrics";
import TwinMetrics from "./blocks/metrics/twinMetrics";
// redux
import { connect } from 'react-redux'

// charts
import Barchart from "./charts/Barchart";
import Areachart from './charts/Areachart'

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
        <SimpleMetrics wide title="Voltage" caption="metrics" >
      <Barchart data={this.props.voltage}  isLine={true}  width={900} height ={300}/>

        </SimpleMetrics>
    

        <SimpleMetrics title="Current" caption="metrics"  >
      <Areachart data ={this.props.current} colorArea ={'grey'} colorLine={'blue'}  width={500}/>

        </SimpleMetrics>
        <SimpleMetrics title="Temperature" caption="metrics" >
      <Areachart data ={this.props.Temperature} colorArea ={'grey'} colorLine={'blue'}  width={500}/>
      </SimpleMetrics>
        <SimpleMetrics wide title="SoC vs Time" caption="metrics" >
      <Areachart data ={this.props.SocvsTime} colorArea ={'grey'} colorLine={'blue'} width={1100}/>

        </SimpleMetrics>
      </Page>
    );
    let analytics = (
      <Page>
        <TwinMetrics>
          {/* requires backend code to complete design functionalities */}
          {/* insert graph here */}



          <Areachart data ={this.props.voltage} colorArea ={'grey'} colorLine={'blue'} width={1000} data2=
          {this.props.current}
          colorArea2 ={'yellow'} colorLine2={'green'} 
          />


{/* <Barchart data={this.props.voltage}  isLine={true}  width={400} height ={200}/> */}


     

        </TwinMetrics>
      </Page>
    );
    let settings = <Page>analytics</Page>;
    let diagnostics = <Page>diagnostics</Page>;

    return (
      <BaseLayout mode={this.state.isLinked}>
        {this.state.isLinked ? (
          <DefaultView sidepanel={sidepanel}>
            <Switch>
              <Route path={Url.DASHBOARD} exact>
                {dashboard}
              </Route>
              <Route path={Url.ANALYTICS}>{analytics}</Route>
              <Route path={Url.DIAGNOSTICS}>{diagnostics}</Route>
              <Route path={Url.SETTINGS}>{settings} </Route>
            </Switch>
          </DefaultView>
   
        ) : (
          <CardView>connection mode</CardView>
        )}
      </BaseLayout>

    );
  }
}


const mapStateToProps = (state)=>{
  console.log(state)
  return{
  current:state.current,
  Temperature:state.Temperature,
  SocvsTime:state.SocvsTime,
  voltage:state.voltage
  }
}

export default connect(mapStateToProps)(BatteryBuddyApp)
// export default BatteryBuddyApp;
