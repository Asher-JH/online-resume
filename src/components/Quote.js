import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3),
    borderRadius: 10,
    background: THEME_COLORS.LIGHT_GREY,
  },
  authorContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quoteText: {
    fontStyle: "italic",
    fontSize: "32px",
  },
}));

const Quote = ({ quote, author }) => {
  const [liked, setLiked] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.quoteText} gutterBottom>
        "{quote}"
      </Typography>
      <div className={classes.authorContainer}>
        <Typography variant="overline">- {author}</Typography>
        <IconButton
          fontSize="small"
          color="secondary"
          onClick={() => setLiked(!liked)}
        >
          {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Quote;
