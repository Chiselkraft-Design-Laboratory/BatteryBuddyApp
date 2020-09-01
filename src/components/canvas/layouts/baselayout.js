import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import withCanvas from "../withCanvas";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      height: "100vh",
    },
    main: {
      flexGrow: 1,
      overflowY: "auto",
    },
    content: {
      height: "100%",
      width: "100%",

      "& > *": (props) => ({
        height: props.wizard && "100%",
        overflowY: props.wizard && "auto",
      }),
    },
  }),
  { index: 1 }
);

const BaseLayout = ({ canvas, navigation, children, footer, wizard }) => {
  const cl = useStyles(canvas, wizard);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="stretch"
      justify="flex-start"
      wrap="nowrap"
      classes={{ root: cl.root }}
    >
      <Grid component="nav" item>
        {navigation}
      </Grid>
      <Grid component="main" item classes={{ item: cl.main }}>
        <Grid
          container
          direction="row"
          alignContent={wizard ? "center" : "flex-start"}
          justify={wizard ? "center" : "flex-start"}
          classes={{ root: cl.content }}
        >
          {children}
        </Grid>
      </Grid>
      <Grid component="footer" item>
        {footer}
      </Grid>
    </Grid>
  );
};

export default withCanvas(BaseLayout);
