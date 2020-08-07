import React from "react";
import pure from "recompose/pure";

let DashboardIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="dashboard-icon"
      viewBox="0 0 24 24"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMid meet"
      width={props.size || 24}
      height={props.size || 24}
    >
      <defs>
        <clipPath id="a">
          <path
            data-name="Rectangle 1645"
            transform="translate(24 8)"
            fill={props.color || "inherit"}
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
      <g
        data-name="Mask Group 3"
        transform="translate(-24 -8)"
        clipPath="url(#a)"
      >
        <path
          data-name="001-speedometer"
          d="M48 22.198a11.887 11.887 0 0 1-2.423 7.227.93930307.93930307 0 0 1-1.5-1.131 10.123 10.123 0 1 0-18.207-6.1 10.026 10.026 0 0 0 2.043 6.1.93930307.93930307 0 0 1-1.5 1.131A11.994 11.994 0 0 1 36 10.203a11.991 11.991 0 0 1 12 11.995zm-6.06-5.647a.937.937 0 0 1 0 1.326l-3.056 3.056a3.281 3.281 0 1 1-1.326-1.33l3.056-3.056a.938.938 0 0 1 1.326.004zm-4.54 5.941a1.4 1.4 0 1 0-1.4 1.4 1.406 1.406 0 0 0 1.4-1.4zm0 0"
          fill={props.color || "inherit"}
        />
      </g>
    </svg>
  );
};
DashboardIcon = pure(DashboardIcon);
DashboardIcon.displayName = "DashboardIcon";
DashboardIcon.muiName = "SvgIcon";

export default DashboardIcon;
