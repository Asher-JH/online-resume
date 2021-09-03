import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { THEME_COLORS } from "@vars/colors";
import { firestore } from "../firebase";

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
  countContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Quote = ({ quote, author }) => {
  const [liked, setLiked] = useState(false);
  // Get ref for document
  const query = firestore.collection("items").doc("quote-1");
  // Use hook for realtime update
  const [doc, loading] = useDocumentData(query);
  const classes = useStyles();

  const onClick = async () => {
    setLiked(!liked);
    // Update count
    await query.set({
      count: doc.count + 1,
    });
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.quoteText} gutterBottom>
        "{quote}"
      </Typography>
      <div className={classes.authorContainer}>
        <Typography variant="overline">- {author}</Typography>
        {/** If loading show "0" instead */}
        <div className={classes.countContainer}>
          <Typography variant="subtitle1">{loading ? 0 : doc.count}</Typography>
          <IconButton fontSize="small" color="secondary" onClick={onClick}>
            {!liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Quote;
