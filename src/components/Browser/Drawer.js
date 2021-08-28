import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer as MuiDrawer,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { THEME_COLORS } from "@vars/colors";

import NavList from "./NavList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "100%",
  },
  drawerContainer: {
    overflow: "auto",
  },
  toolbar: {
    borderBottom: `1px solid ${THEME_COLORS.LIGHT_GREY}`,
    padding: theme.spacing(0, 4),
  },
  title: {
    color: THEME_COLORS.PRIMARY_BLACK,
    fontSize: "22px",
    fontWeight: "bold",
    flexGrow: 1,
  },
}));

const Drawer = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <MuiDrawer
      className={classes.root}
      anchor="top"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>Asher Chan</Typography>
        <IconButton
          color={THEME_COLORS.PRIMARY_BLACK}
          onClick={onClose}
          aria-label="open drawer"
          edge="end"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <NavList handleClose={onClose} />
    </MuiDrawer>
  );
};

export default Drawer;
