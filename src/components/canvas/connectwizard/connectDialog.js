import React from "react";
import { makeStyles, Button, Typography, Box } from "@material-ui/core";

import { linkMode } from "../../constants/typedef";
import { connectWizardOptions } from "../../constants/preferences";
import { CanBusIcon, CloudIcon } from "../../assets";

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
      title: {
        padding: theme.spacing(3, 2),
      },

      button: {
        width: 128,
        height: 128,
        padding: theme.spacing(2),
        margin: theme.spacing(1, 2.5),
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
    }),

    { index: 1 }
  );
const ConnectDialog = ({ canvas, connect }) => {
  const cl = useStyles(canvas.dense)();
  return (
    <React.Fragment>
      <Typography variant="h6" align="center" classes={{ root: cl.title }}>
        select a connection
      </Typography>
      <Box classes={{ root: cl.root }}>
        {/* cloud button */}
        <Button
          onClick={() => connect(linkMode.CLOUD)}
          disabled={!connectWizardOptions.enableCLOUD}
          classes={{ root: cl.button }}
          className={
            connectWizardOptions.enableCLOUD ? cl.default : cl.disabled
          }
        >
          <CloudIcon size={48} />
          <Typography variant="caption">connect via</Typography>
          <Typography variant="body1">
            <strong>CLOUD</strong>
          </Typography>
        </Button>

        {/* canbus button */}
        <Button
          onClick={() => connect(linkMode.CANBUS)}
          disabled={!connectWizardOptions.enableCANBUS}
          classes={{ root: cl.button }}
          className={
            connectWizardOptions.enableCANBUS ? cl.default : cl.disabled
          }
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

export default React.memo(ConnectDialog);
