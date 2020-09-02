import React from "react";

let BatteryIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="battery-icon"
      viewBox="0 0 24 24"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <path
        fill={props.color || "inherit"}
        d="M7.25 15.5a2.24 2.24 0 0 1-2.007-1.233 2.24 2.24 0 0 1 .196-2.352L11.262 4H2.75A2.753 2.753 0 0 0 0 6.75v9.5A2.753 2.753 0 0 0 2.75 19h5.027l.781-3.5zM22.241 7H22v-.25A2.753 2.753 0 0 0 19.25 4h-2.783c-.009.084-.016.169-.035.253L15.459 8.5H17c.861 0 1.633.479 2.015 1.25a2.238 2.238 0 0 1-.222 2.359L13.573 19h5.677A2.753 2.753 0 0 0 22 16.25V16h.241c.965 0 1.75-.785 1.75-1.75v-5.5c0-.965-.785-1.75-1.75-1.75z"
      />
      <path
        fill={props.color || "inherit"}
        d="M9.803 21a.75.75 0 0 1-.732-.913L10.429 14H7.25a.75.75 0 0 1-.604-1.195l6.989-9.5a.745.745 0 0 1 .917-.237.748.748 0 0 1 .418.849L13.577 10H17a.748.748 0 0 1 .597 1.203l-7.197 9.5a.747.747 0 0 1-.597.297z"
      />
    </svg>
  );
};
BatteryIcon = React.memo(BatteryIcon);
BatteryIcon.displayName = "BatteryIcon";
BatteryIcon.muiName = "SvgIcon";

export default BatteryIcon;
