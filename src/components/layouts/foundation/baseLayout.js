import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import NavigationBlock from "../../blocks/navigation";
import FooterBlock from "../../blocks/footer";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    maxHeight: "100vh",
    padding: theme.spacing(0, 2),
  },
  section: {
    overflowX: "auto",
  },
}));

const BaseLayout = (props) => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      component="main"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item component="nav" className={classes.shrink}>
        <NavigationBlock showlinks={props.mode} />
      </Grid>
      <Grid item xs component="article" className={classes.section}>
        {props.children}
      </Grid>
      <Grid item component="footer" className={classes.shrink}>
        <FooterBlock />
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
