import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    background: THEME_COLORS.WHITE,
    minHeight: 200,
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

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      minHeight: 300,
      justifyContent: "space-around",
      margin: theme.spacing(2, 0),
      marginTop: theme.spacing(0),
    },
  },
  textContainer: {
    padding: theme.spacing(),
    color: THEME_COLORS.PRIMARY_BLACK,
  },
  title: {
    fontWeight: "600",
  },
  img: {
    maxWidth: 180,
  },
}));

const EducationCard = ({ duration, header, subtitle, img }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="overline">{duration}</Typography>
        <Typography variant="h6" gutterBottom className={classes.title}>
          {header}
        </Typography>
        <Typography variant="p">
          {subtitle}
        </Typography>
      </div>
      <img src={img} className={classes.img} alt={header} />
    </Paper>
  );
};

export default EducationCard;
