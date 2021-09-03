import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Browser from "@components/Browser";
import ContainerSkeleton from "@components/ContainerSkeleton";
import urls from "@vars/urls";

const LandingPage = lazy(() => import("@pages/LandingPage"));
const AboutMe = lazy(() => import("@pages/About"));
const Work = lazy(() => import("@pages/Work"));
const Contact = lazy(() => import("@pages/Contact"));
const Education = lazy(() => import("@pages/Education"));
const Skills = lazy(() => import("@pages/Skills"));

const RootRouter = () => {
  return (
    <Router>
      <Browser>
        <Suspense fallback={<ContainerSkeleton />}>
          <Switch>
            <Route exact path={urls.ROOT} component={LandingPage} />
            <Route exact path={urls.PAGES.ABOUT_ME} component={AboutMe} />
            <Route exact path={urls.PAGES.WORK} component={Work} />
            <Route exact path={urls.PAGES.CONTACT} component={Contact} />
            <Route exact path={urls.PAGES.EDUCATION} component={Education} />
            <Route exact path={urls.PAGES.SKILLS} component={Skills} />
            <Route render={() => <Redirect to={urls.PAGES.ABOUT_ME} />} />
          </Switch>
        </Suspense>
      </Browser>
    </Router>
  );
};

export default RootRouter;
