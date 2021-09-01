import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import Browser from "@components/Browser";
import LandingPage from "@pages/LandingPage";
import AboutMe from "@pages/About";
import SocialLinks from "@pages/SocialLinks";
import Gallery from "@pages/Gallery";
import Contact from "@pages/Contact";
import Education from "@pages/Education";
import urls from "@vars/urls";

const RootRouter = () => {
  return (
    <Router>
      <Browser>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route exact path={urls.ROOT} component={LandingPage} />
            <Route exact path={urls.PAGES.ABOUT_ME} component={AboutMe} />
            <Route
              exact
              path={urls.PAGES.SOCIAL_LINKS}
              component={SocialLinks}
            />
            <Route exact path={urls.PAGES.GALLERY} component={Gallery} />
            <Route exact path={urls.PAGES.CONTACT} component={Contact} />
            <Route exact path={urls.PAGES.EDUCATION} component={Education} />
            <Route render={() => <Redirect to={urls.PAGES.ABOUT_ME} />} />
          </Switch>
        </Suspense>
      </Browser>
    </Router>
  );
};

export default RootRouter;
