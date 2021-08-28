import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(5),
  },
  text: {
    fontSize: "14px",
    fontWeight: "400",
  },
}));

const NavItem = ({ label, icon, to, handleClose, external }) => {
  const classes = useStyles();
  const history = useHistory();

  const onClick = () => {
    handleClose();
    if (external) {
      window.open(to, "_blank");
      return;
    }
    history.push(to);
  };

  return (
    <ListItem button onClick={onClick} className={classes.root}>
      <ListItemText
        primary={label}
        classes={{
          primary: classes.text,
        }}
      />
    </ListItem>
  );
};

export default NavItem;
