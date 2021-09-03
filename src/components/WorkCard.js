import React from "react";
import { Typography, List, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minHeight: 360,
    border: `2px solid ${THEME_COLORS.DARK_GREY}`,
    boxShadow: `-8px 8px ${THEME_COLORS.LIGHT_GREY}`,
    transform: "translateY(-4px)",
  },
  location: {
    fontWeight: "bold",
  },
  task: {
    fontSize: "14px",
  },
  list: {
    marginTop: theme.spacing(1),
  },
}));

const WorkCard = ({ duration, location, role, tasks }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="overline">{duration}</Typography>
      <Typography variant="h5" className={classes.location}>
        {location}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {role}
      </Typography>
      <List dense className={classes.list}>
        {!!tasks?.length &&
          tasks.map((task, index) => {
            return (
              <ListItem key={index}>
                <Typography className={classes.task} variant="subtitle2">
                  {task}
                </Typography>
              </ListItem>
            );
          })}
      </List>
    </Paper>
  );
};

export default WorkCard;
