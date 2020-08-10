import React from "react";
import {
  Grid,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

import clsx from "clsx";

import { Expand, Label } from "../../layouts/";
import {
  SplitViewIcon,
  MergeViewIcon,
  DownArrowIcon,
  StopIcon,
} from "../../icons";

const useStyle = makeStyles(
  (theme) => ({
    root: {
      // width: "100%",
      borderRadius: theme.spacing(2),
      background: theme.palette.ui.dark4,
    },
    paper: {
      borderRadius: theme.spacing(2),
    },
    metrics: {
      minHeight: "320px",
      padding: theme.spacing(2, 3),
    },
    controls: {
      padding: theme.spacing(2),
    },
    log: {
      minHeight: "120px",
      borderRadius: theme.spacing(0, 0, 2, 2),
      padding: theme.spacing(1, 2),
      background: fade(theme.palette.ui.lite3, 0.8),
      color: theme.palette.ui.lite,
      opacity: 0.6,
    },
    space: {
      marginRight: theme.spacing(1),
    },
    btnlog: {
      background: theme.palette.ui.yellowpantone,
      color: theme.palette.ui.dark2,

      "&:hover": {
        background: fade(theme.palette.ui.orangered, 0.8),
      },
    },
    iconbtn: {
      fill: theme.palette.ui.lite,
    },
  }),
  { index: 1 }
);
const TwinMetrics = (props) => {
  const classes = useStyle();
  return (
    <Grid item xs={12}>
      <Paper elevation={4} className={classes.root}>
        <Grid container direction="column" spacing={0}>
          {/* metrics area */}
          <Grid item xs>
            <Paper elevation={12} className={classes.paper}>
              <Grid container direction="column">
                {/* graph view */}
                <Grid item xs className={classes.metrics}>
                  {/* titlebar */}
                  <Grid container>
                    <Label size={6} reverse caption="metrics" value="voltage" />
                    <Label reverse caption="metrics" value="voltage" />
                    <Expand />
                    <Grid item>
                      <Typography variant="caption">split view</Typography>
                      <IconButton className={classes.iconbtn}>
                        <SplitViewIcon />
                      </IconButton>
                    </Grid>
                    {/* graph area */}
                    <Grid container>{props.children}</Grid>
                  </Grid>
                </Grid>
                {/* log view */}
                <Grid item className={classes.log}>
                  2020-08-24 22:54:01 Event:23454 description of the event.
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {/* control area */}
          <Grid item>
            <Toolbar className={classes.controls}>
              <ButtonGroup variant="contained" className={classes.space}>
                <Button>Voltage</Button>
                <Button>
                  <DownArrowIcon size={16} />
                </Button>
              </ButtonGroup>
              <ButtonGroup variant="contained">
                <Button>Voltage</Button>
                <Button>
                  <DownArrowIcon size={16} />
                </Button>
              </ButtonGroup>
              <Expand />
              <ButtonGroup variant="contained">
                <Button className={classes.btnlog}>
                  <StopIcon size={16} />
                </Button>
                <Button className={classes.btnlog}>Generate Log</Button>
              </ButtonGroup>
            </Toolbar>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TwinMetrics;
