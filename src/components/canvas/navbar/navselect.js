import React from "react";
import {
  Button,
  Popper,
  MenuItem,
  MenuList,
  makeStyles,
  ClickAwayListener,
  Paper,
  Grow,
} from "@material-ui/core";
import withDeviceManager from "../../core/devicemanager";
import DropDownIcon from "../../assets/dropdownicon";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderRadius: theme.spacing(4),
      borderWidth: 2,
      marginRight: theme.spacing(2),
      borderColor: theme.palette.T1,
      fill: theme.palette.T1,
      color: theme.palette.T1,
      "&:hover": {
        background: theme.palette.T1,
        fill: theme.palette.D2,
        color: theme.palette.D2,
        transition: "all 0.4s ease-in",
      },
    },
    btnlabel: {
      flexDirection: "row",
    },
    menu: {
      background: theme.palette.L2,
      color: theme.palette.D2,
      borderRadius: theme.spacing(0.5),
    },
    menuItem: {
      "&:hover": {
        background: theme.palette.D4,
        color: theme.palette.L1,
      },
    },
    menuSelected: {},
  }),
  { index: 1 }
);

const NavSelect = ({ device }) => {
  const cl = useStyles();

  const { activeChannel, listOfChannels, setActiveChannel } = device;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index) => {
    setActiveChannel(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return listOfChannels.length > 1 ? (
    <React.Fragment>
      <Button
        ref={anchorRef}
        variant="outlined"
        aria-label="split button"
        classes={{ root: cl.root, label: cl.btnlabel }}
        onClick={handleToggle}
        endIcon={<DropDownIcon size={12} />}
      >
        {listOfChannels[activeChannel]}
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "right bottom",
            }}
          >
            <Paper classes={{ root: cl.menu }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {listOfChannels.map((item, index) => (
                    <MenuItem
                      key={item}
                      selected={index === activeChannel}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      classes={{ root: cl.menuItem }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  ) : null;
};

export default withDeviceManager(NavSelect);
