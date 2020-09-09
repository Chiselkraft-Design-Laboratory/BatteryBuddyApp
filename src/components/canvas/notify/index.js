import React from "react";
import { makeStyles, Snackbar, SnackbarContent } from "@material-ui/core";
import { ExitIcon } from "../../assets";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(2),
      "& > *": {
        borderRadius: theme.spacing(1.25),
      },
    },
    content: {
      background: theme.palette.T5,
      color: theme.palette.L1,
      fill: theme.palette.L1,
    },
    message: {},
    action: {
      marginRight: theme.spacing(0.25),
    },
  }),
  { index: 1 }
);

const Notify = ({ message }) => {
  const cl = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      classes={{ root: cl.root }}
    >
      <SnackbarContent
        message={message}
        action={<ExitIcon size={16} aria-label="close" onClick={null} />}
        classes={{ root: cl.content, message: cl.message, action: cl.action }}
      />
    </Snackbar>
  );
};

export default Notify;
