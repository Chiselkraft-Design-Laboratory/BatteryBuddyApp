import React from "react";
import {
  makeStyles,
  Box,
  Fab,
  Paper,
  Grid,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import withCanvas from "../withCanvas";
import { linkMode } from "../../constants/typedef";
import { CanBusIcon, CloudIcon } from "../../assets";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {
        width: dense && "100%",
        height: dense && "100%",
      },
      dialog: {
        width: dense ? "100%" : 600,
        height: dense ? "100%" : 350,
        background: dense && theme.palette.D2,
        display: "flex",
        // alignContent: "center",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
      },
      title: {
        padding: theme.spacing(3, 2),
      },
      contentWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2, 4),
        margin: theme.spacing(4, 0),
      },
      button: {
        width: 128,
        height: 128,
        padding: theme.spacing(2),
        margin: theme.spacing(1, 2),
        borderRadius: theme.spacing(2),
      },
      btncaption: {
        marginTop: theme.spacing(1),
      },
      default: {
        background: `linear-gradient(-45deg, ${theme.palette.L1} 30%, ${theme.palette.L2} 100%)`,
        color: theme.palette.D3,
        fill: theme.palette.D3,
        transition: "all 0.2s ease-in",
        "&:hover": {
          background: theme.palette.G1,
          fill: theme.palette.D2,
          color: theme.palette.D2,
          transform: "scale(1.05)",
          transition: "all 0.2s ease-in",
        },
        disabled: {
          background: theme.palette.D3,
          color: theme.palette.D4,
          fill: theme.palette.D4,
        },
      },
      spinnerWrap: {
        margin: theme.spacing(1),
        position: "relative",
      },
      spinner: {
        position: "absolute",
        top: -48,
        left: -48,
        color: theme.palette.T1,
        zIndex: 1,
      },
      spinnerIcon: {
        position: "absolute",
        width: 96,
        height: 96,
        top: -48,
        left: -48,
        boxShadow: "none",
        background: "inherit",
        fill: theme.palette.T1,
      },
    }),

    { index: 1 }
  );

const ConnectWizard = ({ canvas, connect }) => {
  const cl = useStyles(canvas.dense)();
  const [progress, SetProgress] = React.useState(0);

  const handleConnect = (mode) => {
    SetProgress(mode);
    connect(mode);
  };

  return (
    <Grid item classes={{ root: cl.root }}>
      <Paper
        square={canvas.dense}
        elevation={canvas.dense ? 0 : 6}
        classes={{ root: cl.dialog }}
      >
        {progress ? (
          <ConnectProgress mode={progress} canvas={canvas} />
        ) : (
          <ConnectOption connect={handleConnect} canvas={canvas} />
        )}
      </Paper>
    </Grid>
  );
};

const ConnectOption = ({ canvas, connect }) => {
  const cl = useStyles(canvas.dense)();
  return (
    <React.Fragment>
      <Typography variant="h6" align="center" classes={{ root: cl.title }}>
        select a connection
      </Typography>
      <Box classes={{ root: cl.contentWrap }}>
        {/* cloud button */}
        <Button
          disabled
          classes={{ root: cl.button }}
          className={cl.disabled}
          onClick={() => connect(linkMode.CLOUD)}
        >
          <CloudIcon size={48} />
          <Typography variant="caption">connect via</Typography>
          <Typography variant="body1">
            <strong>CLOUD</strong>
          </Typography>
        </Button>
        {/* canbus button */}
        <Button
          classes={{ root: cl.button }}
          className={cl.default}
          onClick={() => connect(linkMode.CANBUS)}
        >
          <CanBusIcon size={48} />
          <Typography variant="caption" classes={{ root: cl.btncaption }}>
            connect via
          </Typography>
          <Typography variant="body1">
            <strong>CANBUS</strong>
          </Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
};

const ConnectProgress = ({ canvas, mode }) => {
  const cl = useStyles(canvas.dense)();
  const spinnerSize = 96;
  const iconSize = 48;

  return (
    <React.Fragment>
      <Box classes={{ root: cl.contentWrap }}>
        <div className={cl.spinnerWrap}>
          {mode && (
            <Fab elevation={0} disableRipple classes={{ root: cl.spinnerIcon }}>
              {mode === linkMode.CLOUD ? (
                <CloudIcon size={iconSize} />
              ) : (
                <CanBusIcon size={iconSize} />
              )}
            </Fab>
          )}
          <CircularProgress
            size={spinnerSize}
            thickness={2}
            classes={{ root: cl.spinner }}
          />
        </div>
      </Box>
      <Typography variant="caption" align="center" classes={{ root: cl.title }}>
        connecting via
        <strong>{mode === linkMode.CLOUD ? " CLOUD" : " CANBUS"}</strong>
      </Typography>
    </React.Fragment>
  );
};

export default withCanvas(ConnectWizard);
