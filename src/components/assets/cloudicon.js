import React from "react";

let CloudIcon = (props) => {
  let cH = props.size ? props.size * (24 / 16) : 24;
  return (
    <svg
      version="1.1"
      id="cloud-icon"
      viewBox="0 0 24 16"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={cH || 24}
      height={props.size || 16}
    >
      <path
        fill={props.color || "inherit"}
        d="M20.371 6.631c-.4-2.3-2.5-3.9-4.8-3.5-.6.1-1.1.3-1.6.6-1.6-2.7-5-3.5-7.7-1.9-1.7 1-2.7 2.8-2.7 4.8v.1c-2.3.3-3.9 2.4-3.5 4.7.3 2.1 2.1 3.6 4.2 3.6h15.5c2.3 0 4.2-1.8 4.3-4.2 0-2.1-1.6-3.9-3.7-4.2z"
      />
    </svg>
  );
};
CloudIcon = React.memo(CloudIcon);
CloudIcon.displayName = "CloudIcon";
CloudIcon.muiName = "SvgIcon";

export default CloudIcon;
