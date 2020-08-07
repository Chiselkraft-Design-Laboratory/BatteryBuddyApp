import React from "react";
import pure from "recompose/pure";

let DiagnosticsIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="diagnostics-icon"
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
            fill={props.color || "#inherit"}
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
      <g
        data-name="Mask Group 1"
        transform="translate(-24 -8)"
        clipPath="url(#a)"
      >
        <g data-name="003-test" fill={props.color || "#inherit"}>
          <path
            data-name="Path 173"
            d="M32.227 14.8h-3.75a.703.703 0 0 0 0 1.406h3.75a.703.703 0 0 0 0-1.406z"
          />
          <path
            data-name="Path 174"
            d="M32.227 18.547h-3.75a.703.703 0 0 0 0 1.406h3.75a.703.703 0 0 0 0-1.406z"
          />
          <path
            data-name="Path 175"
            d="M32.227 22.3h-3.75a.703.703 0 0 0 0 1.406h3.75a.703.703 0 0 0 0-1.406z"
          />
          <path
            data-name="Path 176"
            d="M42.3 20.887v-6.419a3.5 3.5 0 0 0-1-2.462l-2.853-2.95A3.538 3.538 0 0 0 35.934 8h-9.051a2.112 2.112 0 0 0-2.11 2.109v18.235a2.112 2.112 0 0 0 2.109 2.109H37.75a5.589 5.589 0 1 0 4.55-9.566zm-16.12 7.457V10.109a.7.7 0 0 1 .7-.7h9.051a2.124 2.124 0 0 1 1.5.629l2.852 2.95a2.1 2.1 0 0 1 .617 1.48v6.42a5.576 5.576 0 0 0-4.217 8.159h-9.8a.7.7 0 0 1-.7-.7zm15.42 2.25a4.172 4.172 0 1 1 4.219-4.172 4.177 4.177 0 0 1-4.219 4.172z"
          />
          <path
            data-name="Path 177"
            d="M43.224 24.757a.7.7 0 0 0-.99.09l-1.187 1.424-.269-.538a.70324338.70324338 0 0 0-1.258.629l.75 1.5a.7.7 0 0 0 .548.384.716.716 0 0 0 .081 0 .7.7 0 0 0 .54-.253l1.875-2.25a.7.7 0 0 0-.09-.986z"
          />
          <path
            data-name="Path 178"
            d="M35.977 16.2h.75a.703.703 0 0 0 0-1.406h-.75a.703.703 0 0 0 0 1.406z"
          />
          <path
            data-name="Path 179"
            d="M37.43 19.25a.7.7 0 0 0-.7-.7h-.75a.703.703 0 0 0 0 1.406h.75a.7.7 0 0 0 .7-.706z"
          />
        </g>
      </g>
    </svg>
  );
};
DiagnosticsIcon = pure(DiagnosticsIcon);
DiagnosticsIcon.displayName = "DiagnosticsIcon";
DiagnosticsIcon.muiName = "SvgIcon";

export default DiagnosticsIcon;
