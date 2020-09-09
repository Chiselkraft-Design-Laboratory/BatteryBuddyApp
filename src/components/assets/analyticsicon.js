import React from "react";

let AnalyticsIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="analytics-icon"
      viewBox="0 0 512 512"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M347 120h-90c-8.291 0-15 6.709-15 15v317h120V135c0-8.291-6.709-15-15-15zM497 210h-90c-8.291 0-15 6.709-15 15v227h120V225c0-8.291-6.709-15-15-15zM197 0h-90c-8.291 0-15 6.709-15 15v437h120V15c0-8.291-6.709-15-15-15z"
      />
      <path
        fill={props.color || "inherit"}
        d="M242 482H30v-30h15c8.291 0 15-6.709 15-15s-6.709-15-15-15H30v-62h15c8.291 0 15-6.709 15-15s-6.709-15-15-15H30v-60h15c8.291 0 15-6.709 15-15s-6.709-15-15-15H30v-60h15c8.291 0 15-6.709 15-15s-6.709-15-15-15H30V90h15c8.291 0 15-6.709 15-15s-6.709-15-15-15H30V15c0-8.291-6.709-15-15-15S0 6.709 0 15v482c0 8.291 6.709 15 15 15h482c8.291 0 15-6.709 15-15v-15H242z"
      />
    </svg>
  );
};
AnalyticsIcon = React.memo(AnalyticsIcon);
AnalyticsIcon.displayName = "AnalyticsIcon";
AnalyticsIcon.muiName = "SvgIcon";

export default AnalyticsIcon;
