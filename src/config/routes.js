import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Feed from "../containers/HomeContainer/HomeContainer";
import LandingPage from "../components/Landing/Landing";

export default withRouter(() => {
  const currentUser = localStorage.getItem("uid");

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute exact path="/feed" component={Feed} />
      {/* <Route exact path="/login" component={Home} /> */}
    </Switch>
  );
});
