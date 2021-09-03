import React from "react";
import { Link } from "react-router-dom";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    background: THEME_COLORS.WHITE,
    padding: theme.spacing(2),
    borderRadius: 6,
    margin: theme.spacing(2),
    marginTop: theme.spacing(0),
    transition: "0.4s ease",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textDecoration: "none",
    alignItems: "center",
    border: `2px solid ${THEME_COLORS.DARK_GREY}`,
    boxShadow: `-8px 8px ${THEME_COLORS.LIGHT_GREY}`,
    transform: "translateY(-4px)",

    "&:hover": {
      boxShadow: "none",
      transform: "translateY(4px)",
      background: `${THEME_COLORS.LIGHT_GREY}90`,
      cursor: "pointer",
    },

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0),
      marginTop: theme.spacing(0),
    },
  },
  textContainer: {
    padding: theme.spacing(),
    color: THEME_COLORS.PRIMARY_BLACK,
  },
  title: {
    fontSize: "12px",
  },
  content: {
    fontSize: "18px",
    fontWeight: "600",
  },
}));

const SectionCard = ({ header, subtitle, url }) => {
  const classes = useStyles();

  return (
    <Paper component={Link} to={url} elevation={0} className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h5" className={classes.content}>
          {header}
        </Typography>
        <Typography variant="subtitle2" className={classes.title}>
          {subtitle}
        </Typography>
      </div>
      <ChevronRightIcon />
    </Paper>
  );
};

export default SectionCard;
