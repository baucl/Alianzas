import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import Dashboard from "./dashboard";

const Routes = () => (
  <Switch>
    <Redirect from="/" to="/index" />
    <Route path={"/index"} component={Dashboard} />
    <Route component={() => import("../components/404")} />
  </Switch>
);

export default withRouter(Routes);
