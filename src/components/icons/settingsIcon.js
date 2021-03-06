import React from "react";
import pure from "recompose/pure";

let SettingsIcon = (props) => {
  return (
    <svg
      version="1.1"
      id="settings-icon"
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
        data-name="Mask Group 2"
        transform="translate(-24 -8)"
        clipPath="url(#a)"
      >
        <g data-name="004-settings" fill={props.color || "inherit"}>
          <path
            data-name="Path 180"
            d="M36.753 32h-1.506a2.212 2.212 0 0 1-2.209-2.209v-.51a9.689 9.689 0 0 1-1.5-.625l-.361.361a2.209 2.209 0 0 1-3.125 0l-1.07-1.064a2.209 2.209 0 0 1 0-3.125l.361-.361a9.69 9.69 0 0 1-.625-1.5h-.51A2.212 2.212 0 0 1 24 20.753v-1.506a2.212 2.212 0 0 1 2.209-2.209h.51a9.692 9.692 0 0 1 .625-1.5l-.361-.361a2.209 2.209 0 0 1 0-3.125l1.064-1.07a2.209 2.209 0 0 1 3.125 0l.361.361a9.7 9.7 0 0 1 1.5-.625v-.51A2.212 2.212 0 0 1 35.247 8h1.506a2.212 2.212 0 0 1 2.209 2.209v.51a9.689 9.689 0 0 1 1.5.625l.361-.361a2.209 2.209 0 0 1 3.125 0l1.065 1.065a2.209 2.209 0 0 1 0 3.125l-.361.361a9.69 9.69 0 0 1 .625 1.5h.51A2.212 2.212 0 0 1 48 19.247v1.506a2.212 2.212 0 0 1-2.209 2.209h-.51a9.692 9.692 0 0 1-.625 1.5l.361.361a2.209 2.209 0 0 1 0 3.125l-1.065 1.065a2.209 2.209 0 0 1-3.125 0l-.361-.361a9.7 9.7 0 0 1-1.5.625v.51A2.212 2.212 0 0 1 36.753 32zm-4.985-4.82a8.288 8.288 0 0 0 2.148.892.7.7 0 0 1 .527.681v1.038a.8.8 0 0 0 .8.8h1.506a.8.8 0 0 0 .8-.8v-1.039a.7.7 0 0 1 .527-.681 8.288 8.288 0 0 0 2.148-.892.7.7 0 0 1 .855.108l.735.735a.8.8 0 0 0 1.135 0l1.065-1.065a.8.8 0 0 0 0-1.136l-.736-.736a.7.7 0 0 1-.108-.855 8.287 8.287 0 0 0 .892-2.148.7.7 0 0 1 .681-.527h1.038a.8.8 0 0 0 .8-.8v-1.508a.8.8 0 0 0-.8-.8h-1.028a.7.7 0 0 1-.681-.527 8.288 8.288 0 0 0-.892-2.148.7.7 0 0 1 .108-.855l.735-.735a.8.8 0 0 0 0-1.136l-1.065-1.069a.8.8 0 0 0-1.136 0l-.736.736a.7.7 0 0 1-.855.108 8.288 8.288 0 0 0-2.148-.892.7.7 0 0 1-.527-.681v-1.039a.8.8 0 0 0-.8-.8h-1.509a.8.8 0 0 0-.8.8v1.039a.7.7 0 0 1-.527.681 8.288 8.288 0 0 0-2.148.892.7.7 0 0 1-.855-.108l-.735-.735a.8.8 0 0 0-1.135 0l-1.07 1.064a.8.8 0 0 0 0 1.136l.736.736a.7.7 0 0 1 .108.855 8.287 8.287 0 0 0-.892 2.148.7.7 0 0 1-.681.527h-1.039a.8.8 0 0 0-.8.8v1.506a.8.8 0 0 0 .8.8h1.039a.7.7 0 0 1 .681.527 8.288 8.288 0 0 0 .892 2.148.7.7 0 0 1-.108.855l-.735.735a.8.8 0 0 0 0 1.136l1.065 1.065a.8.8 0 0 0 1.136 0l.736-.736a.706.706 0 0 1 .855-.108z"
          />
          <path
            data-name="Path 181"
            d="M36 25.222A5.222 5.222 0 1 1 41.222 20 5.228 5.228 0 0 1 36 25.222zm0-9.038A3.816 3.816 0 1 0 39.816 20 3.82 3.82 0 0 0 36 16.184z"
          />
        </g>
      </g>
    </svg>
  );
};
SettingsIcon = pure(SettingsIcon);
SettingsIcon.displayName = "SettingsIcon";
SettingsIcon.muiName = "SvgIcon";

export default SettingsIcon;
