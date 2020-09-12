import React from "react";
import { makeStyles, Grid, Box, Paper, Typography } from "@material-ui/core";

import withCanvas from "../withCanvas";
import { pageOptions } from "../../constants/preferences";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {
        padding: theme.spacing(1.5),
      },
      wrapper: {
        padding: theme.spacing(2, 3),
      },
      header: {
        transition: "all 0.4s ease-in",
        marginBottom: theme.spacing(2),
      },
      content: {
        transition: "all 0.4s ease-in",
        height: pageOptions.minTileHeight,
      },
    }),
    { index: 1 }
  );

const DefaultTile = ({ canvas, wide, title, caption, children }) => {
  const cl = useStyles(canvas.dense)();
  return (
    <Grid item xs={12} md={wide ? 12 : 6} classes={{ root: cl.root }}>
      <Paper elevation={6} component="section" classes={{ root: cl.wrapper }}>
        {title || caption ? (
          <Box classes={{ root: cl.header }} component="header">
            {title && <Typography variant="h6">{title}</Typography>}
            {caption && <Typography variant="body1">{caption}</Typography>}
          </Box>
        ) : null}
        <Box classes={{ root: cl.content }} component="article">
          {children}
        </Box>
      </Paper>
    </Grid>
  );
};

export default withCanvas(DefaultTile);
