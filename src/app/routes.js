import React from 'react';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('pages/Home'),
  loading () {
    return <div>Loading...</div>;
  }
});

const Login = Loadable({
  loader: () => import('pages/Login'),
  loading () {
    return <div>Loading...</div>;
  }
});

const AppRouter = ({ ...props }) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
};

export default withRouter(AppRouter);
