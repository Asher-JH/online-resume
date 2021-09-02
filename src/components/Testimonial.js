import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    borderTop: `1px solid ${THEME_COLORS.DARK_GREY}`,

    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
      padding: theme.spacing(2),
    },
  },
  name: {
    fontWeight: 600,
  },
  authorContainer: {
    width: "100%",
    paddingTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
}));

const Testimonial = ({ name, role, testimonial }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1">{testimonial}</Typography>
      <div className={classes.authorContainer}>
        <Typography variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="overline">{role}</Typography>
      </div>
    </div>
  );
};

export default Testimonial;
