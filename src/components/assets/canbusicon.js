import React from "react";

let CanBusIcon = (props) => {
  let cH = props.size ? props.size * (24 / 16) : 24;
  return (
    <svg
      version="1.1"
      id="canbus-icon"
      viewBox="0 0 24 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={cH || 24}
      height={props.size || 16}
    >
      <path
        fill={props.color || "inherit"}
        d="M10.7 14h4.6c2 0 3.6-1.5 3.6-3.3s-1.6-3.3-3.6-3.3h-4.9c-1.2 0-2.2-.9-2.2-2s1-2 2.2-2h2.7c.3 1.2 1.4 2 2.7 2h4.9c.7 0 1.2-.5 1.2-1H23c.5 0 .9-.4.9-.8V1.9c.1-.5-.3-.9-.8-.9H22c0-.6-.5-1-1.1-1H16c-1.3 0-2.4.8-2.7 2h-2.7C8.6 2 7 3.5 7 5.3s1.6 3.3 3.6 3.3h4.9c1.2 0 2.2.9 2.2 2s-1 2-2.2 2h-4.6c-.3-1.1-1.4-2-2.7-2H3.3c-.6 0-1.1.5-1.1 1H1.1c-.5 0-.9.4-.9.8v1.5c0 .5.4.8.9.8H2c0 .6.5 1 1.1 1H8c1.3.3 2.4-.5 2.7-1.7z"
      />
    </svg>
  );
};
CanBusIcon = React.memo(CanBusIcon);
CanBusIcon.displayName = "CanBusIcon";
CanBusIcon.muiName = "SvgIcon";

export default CanBusIcon;
