import React from "react";
import moment from "moment";
import { createBrowserHistory } from "history";
import { Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "../containers/AppLayout";
import Login from "./Login";

const RestrictedRoute = ({
  component: Component,
  authUser,
  expiresJWT,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authUser && expiresJWT ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const App = () => {
  const history = createBrowserHistory();
  const isAuth = localStorage.getItem("user") !== null;
  const expires =
    localStorage.getItem("tokenExpiration") !== null &&
    !moment(new Date()).isAfter(localStorage.getItem("tokenExpiration"));

  return (
    <div className="app-main">
      <Switch>
        <Route exact path="/login" component={Login} />
        <RestrictedRoute
          path="/"
          authUser={true}
          expiresJWT={true}
          component={AppLayout}
        />
      </Switch>
    </div>
  );
};

export default App;
