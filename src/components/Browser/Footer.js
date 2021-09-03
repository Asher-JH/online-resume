import React from "react";
import { Container, Typography, IconButton, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { THEME_COLORS } from "@vars/colors";
import { useSocialLinks } from "@data";

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
    fontSize: "10px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const data = useSocialLinks({ smallIcons: true });

  const onClick = (url) => window.open(url, "_blank");

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.text}>Asher Chan @ 2021</Typography>
      <Hidden smDown>
        <Typography className={classes.text}>v1.0.0</Typography>
      </Hidden>
      <div className={classes.container}>
        {!!data?.length &&
          data.map(({ icon, url, text }) => (
            <IconButton
              aria-label={text}
              key={url}
              className={classes.icon}
              onClick={() => onClick(url)}
            >
              {icon}
            </IconButton>
          ))}
      </div>
    </Container>
  );
};

export default Footer;
