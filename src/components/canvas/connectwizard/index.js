import React from "react";
import { makeStyles, Paper, Grid, Button } from "@material-ui/core";
import withCanvas from "../withCanvas";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const ConnectWizard = ({ canvas, handleConnect }) => {
  const cl = useStyles();

  return (
    <Grid item classes={{ root: cl.root }}>
      <Paper>
        <Button variant="contained" color="secondary" onClick={handleConnect}>
          Connect
        </Button>
      </Paper>
    </Grid>
  );
};

export default withCanvas(ConnectWizard);
