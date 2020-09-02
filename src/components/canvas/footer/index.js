import React from "react";
import { makeStyles, Box, Link, Typography } from "@material-ui/core";

import withCanvas from "../withCanvas";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "row-reverse",
      padding: theme.spacing(1.5, 2),
      justifyContent: (props) => props.dense && "center",
      // justifyContent: ({ dense }) => dense && "center",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.D4,
      padding: theme.spacing(0, 1),
      borderRadius: theme.spacing(1),
      "&:hover": {
        color: theme.palette.L1,
      },
    },
  }),
  { index: 1 }
);

const Footer = ({ canvas }) => {
  const cl = useStyles(canvas);
  return (
    <Box classes={{ root: cl.root }}>
      <Link classes={{ root: cl.link }}>
        <Typography variant="caption">
          powered by <strong>vecmocon technologies pvt ltd</strong>
        </Typography>
      </Link>
    </Box>
  );
};

export default withCanvas(Footer);
