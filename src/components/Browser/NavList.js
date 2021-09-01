import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

import urls from "@vars/urls";

import NavItem from "./NavItem";

const useStyles = makeStyles({
  root: {
    overflow: "auto",
  },
});

const items = [
  {
    label: "About",
    to: urls.PAGES.ABOUT_ME,
  },
  {
    label: "Work",
    to: urls.PAGES.SOCIAL_LINKS,
  },
  {
    label: "Education",
    to: urls.PAGES.EDUCATION,
  },
  {
    label: "Contact",
    to: urls.PAGES.CONTACT,
  },
];

const NavList = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {!!items.length &&
          items.map((navProps) => (
            <NavItem
              key={navProps.label}
              handleClose={handleClose}
              {...navProps}
            />
          ))}
      </List>
    </div>
  );
};

export default NavList;
