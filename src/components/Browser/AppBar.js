import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import TextButton from "@components/TextButton";
import { THEME_COLORS } from "@vars/colors";
import urls from "@vars/urls";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    background: THEME_COLORS.WHITE,
    boxShadow: "none",
    borderBottom: `1px solid ${THEME_COLORS.LIGHT_GREY}`,
  },
  container: {
    display: "flex",
  },
  title: {
    color: THEME_COLORS.PRIMARY_BLACK,
    fontSize: "18px",
    fontWeight: "bold",
    flexGrow: 1,
    textDecoration: "none",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexGrow: 1,
  },
}));

const AppBar = ({ onClick }) => {
  const classes = useStyles();

  return (
    <MuiAppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Container maxWidth="md" className={classes.container}>
          <Typography component={Link} to={urls.ROOT} className={classes.title}>
            Asher Chan
          </Typography>
          <Hidden smDown>
            <div className={classes.linksContainer}>
              <TextButton label="About" to={urls.PAGES.ABOUT_ME} />
              <TextButton label="Work" to={urls.PAGES.GALLERY} />
              <TextButton label="Education" to={urls.PAGES.EDUCATION} />
              <TextButton label="Contact" to={urls.PAGES.CONTACT} />
            </div>
          </Hidden>
          <Hidden mdUp className={classes.iconContainer}>
            <IconButton
              color={THEME_COLORS.PRIMARY_BLACK}
              onClick={onClick}
              aria-label="open drawer"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
