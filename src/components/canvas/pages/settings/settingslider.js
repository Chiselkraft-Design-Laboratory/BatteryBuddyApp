import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./sliderstyles"; // example render components - source below

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
    },
    slider: {
      marginTop: theme.spacing(2),
      position: "relative",
      width: "100%",
    },
  }),
  { index: 1 }
);

const SettingSlider = ({ label, bounds, range }) => {
  const cl = useStyles();

  const [values, setValues] = React.useState(range);
  const [update, setUpdate] = React.useState(range);

  const onUpdate = (update) => {
    setUpdate(update);
  };

  const onChange = (values) => {
    setValues(values);
  };
  return (
    <Grid item xs={10} md={6}>
      <Typography variant="caption" classes={{ root: cl.label }}>
        {label}
      </Typography>
      <div className={cl.root}>
        <Slider
          mode={2}
          step={0.1}
          domain={bounds}
          className={cl.slider}
          onUpdate={onUpdate}
          onChange={onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ activeHandleID, handles, getHandleProps }) => (
              <div>
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={bounds}
                    activeHandleID={activeHandleID}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div>
                {tracks.map(({ id, source, target }, index) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                    count={index}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks values={update}>
            {({ ticks }) => (
              <div>
                {ticks.map((tick) => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    </Grid>
  );
};

export default SettingSlider;
