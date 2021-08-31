import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { THEME_COLORS } from "vars/colors";

import BasicContainer from "@components/BasicContainer";
import SectionHeader from "@components/SectionHeader";
import SectionCard from "@components/SectionCard";
import userConfig from "@configs/user.json";
import urls from "@vars/urls";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `${THEME_COLORS.WHITE}`,
    width: "100%",
    height: "100%",
  },
  container: {
    flexGrow: 1,
  },
}));

const ExploreSection = () => {
  const classes = useStyles();
  const sections = userConfig.explore.sections;

  return (
    <div className={classes.root}>
      <BasicContainer>
        <SectionHeader
          primaryText="Explore"
          secondaryText="Bits & bobs about me"
        />
        <div className={classes.container}>
          <Grid container spacing={3}>
            {!!sections?.length &&
              sections.map(({ urlName, ...props }) => {
                return (
                  <Grid key={urlName} item xs={12}>
                    <SectionCard
                      key={urlName}
                      url={urls.PAGES[urlName]}
                      {...props}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </BasicContainer>
    </div>
  );
};

export default ExploreSection;
