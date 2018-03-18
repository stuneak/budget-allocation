import React from 'react';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import RequireAuth from './HOC/Authentication';

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "Dashboard" */ 'pages/Dashboard'),
  loading () {
    return <div>Loading...</div>;
  }
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ 'pages/Login'),
  loading () {
    return <div>Loading...</div>;
  }
});

const AppRouter = ({ ...props }) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={RequireAuth(Dashboard)} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
};

export default withRouter(AppRouter);
