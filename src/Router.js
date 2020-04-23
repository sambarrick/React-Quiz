import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import SignUp from './components/SignUp';
import Login from './components/Login';

const checkAuth = () => {
  // const jwt = localStorage.getItem('token');
  // return !jwt ? true : false;

  const cookies = cookie.parse(document.cookie);
  return cookies['loggedIn'] ? true : false;
}

const ProtectedRoute = ({component: Component,...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/auth/login" />}
      />
  )
}

export default function Router() {
  return (
    <Switch>
    <Route path='/' component={Login} />
      <Route path='/signup' component={ SignUp } />
      <Route path='/login' component={Login} />
    </Switch>
  )
};