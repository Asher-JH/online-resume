import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer as MuiDrawer,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { THEME_COLORS } from "@vars/colors";
import urls from "@vars/urls";

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
  const history = useHistory();

  const onClick = () => {
    onClose();
    history.push(urls.ROOT);
  };

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
        <Typography onClick={onClick} className={classes.title}>
          Asher Chan
        </Typography>
        <IconButton
          color="inherit"
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
