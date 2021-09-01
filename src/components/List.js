import React from "react";
import {
  List as MuiList,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";
import { THEME_COLORS } from "vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5, 0),
  },
  listItemText: {
    textDecoration: "underline",
  },
  listItem: {
    transition: "0.7s ease",

    "&:hover": {
      background: THEME_COLORS.LIGHT_GREY,
      cursor: "pointer",
    },
  },
}));

const List = ({ dense, data }) => {
  const classes = useStyles();

  const onClick = (link) => {
    window.open(link, "_blank");
    return;
  };

  return (
    <MuiList dense={dense} className={classes.root}>
      {!!data?.length ? (
        data.map(({ text, link }) => (
          <ListItem
            key={text}
            onClick={() => onClick(link)}
            className={classes.listItem}
          >
            <ListItemIcon>
              <LaunchIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary={text} />
          </ListItem>
        ))
      ) : (
        <Typography>No data to show</Typography>
      )}
    </MuiList>
  );
};

export default List;
