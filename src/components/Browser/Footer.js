import React from "react";
import {
  Container,
  Typography,
  IconButton as MuiIconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "auto",
  },
  text: {
    display: "flex",
    alignItems: "center",
    color: THEME_COLORS.DARK_GREY,
    fontSize: "14px",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  icon: {
    color: THEME_COLORS.DARK_GREY,
  },
}));

const IconButton = ({ iconName }) => {
  const classes = useStyles();
  let icon;

  switch (iconName.toString()) {
    case "github":
      icon = <GitHubIcon fontSize="small" />;
      break;
    case "instagram":
      icon = <InstagramIcon fontSize="small" />;
      break;
    case "linkedin":
      icon = <LinkedInIcon fontSize="small" />;
      break;
    default:
      icon = <GitHubIcon fontSize="small" />;
      break;
  }

  return <MuiIconButton className={classes.icon}>{icon}</MuiIconButton>;
};

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.text}>Asher Chan @ 2021</Typography>
      <Hidden smDown>
        <Typography className={classes.text}>v1.0.0</Typography>
      </Hidden>
      <div className={classes.container}>
        <IconButton iconName="github" />
        <IconButton iconName="instagram" />
        <IconButton iconName="linkedin" />
      </div>
    </Container>
  );
};

export default Footer;
