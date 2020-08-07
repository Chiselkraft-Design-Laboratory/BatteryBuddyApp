import React from "react";
import pure from "recompose/pure";

let AnalyticsIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="analytics-icon"
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
        data-name="Mask Group 1"
        transform="translate(-24 -8)"
        clipPath="url(#a)"
      >
        <g data-name="002-graph">
          <g data-name="Group 133">
            <path
              data-name="Path 173"
              d="M45.6 9.2a2.4 2.4 0 0 0-1.725 4.062L39.49 22.03a2.321 2.321 0 0 0-.29-.03 2.39 2.39 0 0 0-.9.179l-3.4-3.828a2.371 2.371 0 0 0 .3-1.151 2.4 2.4 0 1 0-4.211 1.557l-4.16 7.286A2.407 2.407 0 0 0 26.4 26a2.429 2.429 0 1 0 1.811.843l4.16-7.286a2.282 2.282 0 0 0 1.329-.136l3.4 3.828a2.371 2.371 0 0 0-.3 1.151 2.4 2.4 0 1 0 4.125-1.662l4.385-8.768a2.321 2.321 0 0 0 .29.03 2.4 2.4 0 1 0 0-4.8zm-19.2 20a.8.8 0 1 1 .8-.8.8.8 0 0 1-.8.8zM32.8 18a.8.8 0 1 1 .8-.8.8.8 0 0 1-.8.8zm6.4 7.2a.8.8 0 1 1 .8-.8.8.8 0 0 1-.8.8zm6.4-12.8a.8.8 0 1 1 .8-.8.8.8 0 0 1-.8.8z"
              fill={props.color || "inherit"}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
AnalyticsIcon = pure(AnalyticsIcon);
AnalyticsIcon.displayName = "AnalyticsIcon";
AnalyticsIcon.muiName = "SvgIcon";

export default AnalyticsIcon;
