import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ImageCard from "@components/ImageCard";
import { THEME_COLORS } from "@vars/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(2),
    borderRadius: 6,
    border: `2px solid ${THEME_COLORS.DARK_GREY}`,
    boxShadow: `-8px 8px ${THEME_COLORS.LIGHT_GREY}`,
    transform: "translateY(-4px)",
  },
}));

const ImageCardList = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {!!data?.length &&
          data.map((item) => (
            <Grid key={item.text} item xs={6} sm={3}>
              <ImageCard {...item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ImageCardList;
