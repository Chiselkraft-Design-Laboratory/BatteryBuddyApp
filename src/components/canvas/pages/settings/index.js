import React from "react";
import presets from "../../../constants/presets.json";
import withDeviceManager from "../../../core/devicemanager";
import SettingsDisclaimer from "./disclaimer";
import SettingsTile from "./settingstile";
import SettingSlider from "./settingslider";
import { thresholdLimits } from "../../../constants/preferences";

const SettingsPage = ({ device }) => {
  const { showDisclaimer } = device;
  const {
    UVcutoff,
    UVrelease,
    OVrelease,
    OVcutoff,
    TLcutoff,
    TLrelease,
    THrelease,
    THcutoff,
    CTrelease,
    CTcutoff,
  } = device.settings;

  const Vrange = [UVcutoff, UVrelease, OVrelease, OVcutoff];
  const Trange = [TLcutoff, TLrelease, THrelease, THcutoff];
  const CTrange = [CTrelease, CTcutoff];

  const presetList = [];
  presets.forEach((preset) => presetList.push(preset.id));

  return showDisclaimer ? (
    <SettingsDisclaimer onAccept={device.approveDisclaimer} />
  ) : (
    <SettingsTile presets={presetList}>
      <SettingSlider
        label="Voltage Threshold"
        bounds={thresholdLimits.voltage}
        range={Vrange}
      />
      <SettingSlider
        label="Temperature Threshold"
        bounds={thresholdLimits.temperature}
        range={Trange}
      />
      <SettingSlider
        label="Current Threshold"
        bounds={thresholdLimits.current}
        range={CTrange}
      />
    </SettingsTile>
  );
};

export default withDeviceManager(SettingsPage);
