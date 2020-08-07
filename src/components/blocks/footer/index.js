import React from "react";
import { makeStyles, Box, ButtonBase } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: theme.spacing(2, 0),
  },
  footer: {
    color: theme.palette.ui.dark4,
    "&:hover": {
      color: theme.palette.ui.seagreen,
    },
  },
}));
const FooterBlock = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <ButtonBase className={classes.footer}>
        <small>
          powered by <strong>vecmocon technologies pvt ltd</strong>
        </small>
      </ButtonBase>
    </Box>
  );
};

export default FooterBlock;
