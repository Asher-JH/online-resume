import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: "92vh",

    "&:before": {
      content: "''",
      display: "block",
      ...theme.mixins.toolbar,

      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(5),
      },
    },
  },
  container: {
    height: "100%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
  },
}));

const Browser = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
      <main className={classes.content}>
        <div className={classes.container}>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Browser;
