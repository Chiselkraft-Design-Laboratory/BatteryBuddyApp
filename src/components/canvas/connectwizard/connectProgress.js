import React from "react";
import {
  Box,
  Fab,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { CanBusIcon, CloudIcon } from "../../assets";
import { linkMode } from "../../constants/typedef";
import { connectWizardOptions } from "../../constants/preferences";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2, 4),
        margin: theme.spacing(4, 0),
      },
      spinnerWrap: {
        margin: theme.spacing(1),
        position: "relative",
      },
      spinner: {
        position: "absolute",
        top: -connectWizardOptions.spinnerSize / 2,
        left: -connectWizardOptions.spinnerSize / 2,
        color: theme.palette.T1,
        zIndex: 1,
      },
      spinnerIcon: {
        position: "absolute",
        width: connectWizardOptions.spinnerSize,
        height: connectWizardOptions.spinnerSize,
        top: -connectWizardOptions.spinnerSize / 2,
        left: -connectWizardOptions.spinnerSize / 2,
        boxShadow: "none",
        background: "inherit",
        fill: theme.palette.T1,
      },
      caption: {
        marginTop: theme.spacing(6),
      },
    }),

    { index: 1 }
  );

const ConnectProgress = ({ canvas, mode }) => {
  const cl = useStyles(canvas.dense)();
  const icon =
    mode === linkMode.CLOUD ? (
      <CloudIcon size={connectWizardOptions.spinnerIconSize} />
    ) : (
      <CanBusIcon size={connectWizardOptions.spinnerIconSize} />
    );

  return (
    <React.Fragment>
      <Box classes={{ root: cl.root }}>
        <div className={cl.spinnerWrap}>
          {mode && (
            <Fab elevation={0} disableRipple classes={{ root: cl.spinnerIcon }}>
              {icon}
            </Fab>
          )}
          <CircularProgress
            size={connectWizardOptions.spinnerSize}
            thickness={connectWizardOptions.spinnerThickness}
            classes={{ root: cl.spinner }}
          />
        </div>
      </Box>
      <Typography
        variant="caption"
        align="center"
        classes={{ root: cl.caption }}
      >
        connecting via
        <strong>{mode === linkMode.CLOUD ? " CLOUD" : " CANBUS"}</strong>
      </Typography>
    </React.Fragment>
  );
};

export default React.memo(ConnectProgress);
