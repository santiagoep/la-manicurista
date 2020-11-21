import React from "react";
import { HashRouter, Switch } from "react-router-dom";

import Route from "@components/Route/Route";

/** Pages */
import Home from "@pages/Home/Home";

/** Layouts */
import MainLayout from "@components/Layouts/MainLayout/MainLayout";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} layout={MainLayout} />
    </Switch>
  </HashRouter>
);

export default Routes;
