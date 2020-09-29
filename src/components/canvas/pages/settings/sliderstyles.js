import React, { Fragment } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

// *******************************************************
// RAIL COMPONENT
// *******************************************************
const railStyle = makeStyles(
  (theme) => ({
    common: {
      position: "absolute",
      width: "100%",
      transform: "translate(0%, -50%)",
    },
    outer: {
      height: 48,
      cursor: "pointer",
    },
    inner: {
      height: 6,
      borderRadius: 3,
      pointerEvents: "none",
      backgroundColor: theme.palette.D3,
    },
  }),
  { index: 1 }
);

function RailComponent({ getRailProps }) {
  const cl = railStyle();
  return (
    <Fragment>
      <div className={clsx(cl.common, cl.outer)} {...getRailProps()} />
      <div className={clsx(cl.common, cl.inner)} />
    </Fragment>
  );
}

RailComponent.propTypes = {
  getRailProps: PropTypes.func.isRequired,
};

export const SliderRail = RailComponent;

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
const handleStyle = makeStyles(
  (theme) => ({
    common: {
      position: "absolute",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
    },
    outer: {
      zIndex: 5,
      width: 20,
      height: 40,
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
      backgroundColor: "none",
    },
    inner: {
      zIndex: 2,
      width: 8,
      height: 16,
      transform: "translate(-50%, -50%)",
      borderRadius: 2,
      backgroundColor: theme.palette.L1,
    },
    active: {
      boxShadow: `0px 0px 0px 8px ${fade(theme.palette.L3, 0.16)}`,
    },
  }),
  { index: 1 }
);

function HandleComponent({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  classes,
  getHandleProps,
}) {
  const active = activeHandleID === id;
  const cl = handleStyle();
  return (
    <Fragment>
      <div
        className={clsx(cl.common, cl.outer)}
        style={{ left: `${percent}%` }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className={clsx(cl.common, cl.inner, active && cl.active)}
        style={{ left: `${percent}%` }}
      />
    </Fragment>
  );
}

HandleComponent.propTypes = {
  activeHandleID: PropTypes.string,
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
};

export const Handle = HandleComponent;

// *******************************************************
// TRACK COMPONENT
// *******************************************************
const trackStyle = (count) =>
  makeStyles(
    (theme) => ({
      root: {
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 6,
        zIndex: 1,
        borderRadius: 3,
        cursor: "pointer",
        backgroundColor:
          count === 0
            ? theme.palette.T5
            : count === 1
            ? theme.palette.D3
            : theme.palette.T2,
      },
    }),
    { index: 1 }
  );

function TrackComponent({ count, source, target, getTrackProps }) {
  const cl = trackStyle(count)();
  return (
    <div
      className={cl.root}
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
}

TrackComponent.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
};

export const Track = TrackComponent;

// *******************************************************
// TICK COMPONENT
// *******************************************************
const tickStyle = makeStyles(
  (theme) => ({
    tick: {
      position: "absolute",
      marginTop: 10,
      width: 1,
      height: 4,
      backgroundColor: theme.palette.D3,
    },
    label: {
      position: "absolute",
      marginTop: 16,
      textAlign: "center",
      color: theme.palette.D4,
    },
  }),
  { index: 1 }
);

export function TickComponent({ classes, tick, count, format }) {
  const cl = tickStyle();
  return (
    <div>
      <div className={cl.tick} style={{ left: `${tick.percent}%` }} />
      <Typography
        variant="caption"
        className={cl.label}
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {parseFloat(tick.value).toFixed(1)}
      </Typography>
    </div>
  );
}

TickComponent.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  count: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired,
};

TickComponent.defaultProps = {
  format: (d) => d,
};

export const Tick = TickComponent;
