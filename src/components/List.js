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
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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

  // If no link provide, remove underline, icon & onClick

  return (
    <MuiList dense={dense} className={classes.root}>
      {!!data?.length ? (
        data.map(({ text, link }) => (
          <ListItem
            key={text}
            {...(!!link
              ? { onClick: () => onClick(link), className: classes.listItem }
              : {})}
          >
            <ListItemIcon>
              {!!link ? (
                <LaunchIcon fontSize="small" />
              ) : (
                <FiberManualRecordIcon color="inherit" fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText
              className={!!link ? classes.listItemText : ""}
              primary={text}
            />
          </ListItem>
        ))
      ) : (
        <Typography>No data to show</Typography>
      )}
    </MuiList>
  );
};

export default List;
