import React from "react";
import { Skeleton as MuiSkeleton } from "@material-ui/lab";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import BasicContainer from "./BasicContainer";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  container: {
    marginTop: 50,
    marginBottom: 10,
  },
  skeletonBox: {
    marginBottom: 6,
  },
});

const Skeleton = withStyles({
  root: {
    borderRadius: 6,
  },
})(MuiSkeleton);

const ContainerSkeleton = () => {
  const classes = useStyles();

  return (
    <BasicContainer className={classes.root}>
      <div className={classes.container}>
        <Skeleton variant="text" width="100%" height={200} />
        <Skeleton variant="rect" width="50%" />
      </div>

      <Skeleton
        variant="text"
        width="100%"
        height={100}
        className={classes.skeletonBox}
      />
      <Skeleton
        variant="rect"
        width="100%"
        height={100}
        className={classes.skeletonBox}
      />
    </BasicContainer>
  );
};

export default ContainerSkeleton;
