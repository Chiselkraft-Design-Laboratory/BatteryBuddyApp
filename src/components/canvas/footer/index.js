import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

import withCanvas from "../withCanvas";
import NavLink from "../navbar/navlink";

const useStyles = (dense) =>
  makeStyles(
    (theme) => ({
      root: {
        display: "flex",
        flexDirection: "row-reverse",
        padding: theme.spacing(1.5, 3),
        justifyContent: dense && "center",
      },
    }),
    { index: 1 }
  );

const Footer = ({ canvas }) => {
  const cl = useStyles(canvas.dense)();
  return (
    <Box classes={{ root: cl.root }}>
      <NavLink
        simple
        url="http://vecmocon.com"
        newtab
        label={
          <Typography variant="caption">
            powered by <strong>vecmocon technologies pvt ltd</strong>
          </Typography>
        }
      />
    </Box>
  );
};

export default withCanvas(Footer);
