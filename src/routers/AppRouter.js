import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CreatePost from '../components/CreatePost';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SignIn from '../components/SignIn';
import SignUpPage from '../components/SignUpPage';
import UserPostsList from '../components/UserPostsList';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/signup" component={SignUpPage} />
        <PublicRoute path="/signin" component={SignIn} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create-post" component={CreatePost} />
        <PrivateRoute path="/user-posts" component={UserPostsList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
