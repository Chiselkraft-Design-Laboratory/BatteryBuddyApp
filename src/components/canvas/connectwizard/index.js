import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";

import withCanvas from "../withCanvas";
import ConnectProgress from "./connectProgress";
import ConnectDialog from "./connectDialog";

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
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
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
          <ConnectDialog connect={handleConnect} canvas={canvas} />
        )}
      </Paper>
    </Grid>
  );
};

export default withCanvas(ConnectWizard);
