import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from 'common/configureStore';
import Root from './Root';
import jwtDecode from 'jwt-decode';
import 'utils/styles/defaultStyle';
import { signInSuccess } from 'pages/Login/actions';
import { requestForGetUserData } from 'pages/Dashboard/actions';
import { setHeaderToken } from 'api';
import 'antd/dist/antd.css';
const root = document.createElement('div');
document.body.appendChild(root);

const history = createBrowserHistory();
const { store, persistor } = configureStore();

const onBeforeLift = () => {
  const { login: { token } } = store.getState();
  if (token) {
    // TODO: to redo the verification token to the server for security
    const decoded = jwtDecode(token);
    const isTokenNotExpired = decoded.exp < new Date().getTime();
    if (isTokenNotExpired) {
      setHeaderToken(token);
      store.dispatch(
        signInSuccess({ token: token, username: decoded.username })
      );
      store.dispatch(requestForGetUserData());
      history.push('/dashboard');
    }
  }
};

render(
  <Root
    store={store}
    history={history}
    persistor={persistor}
    onBeforeLift={onBeforeLift}
  />,
  root
);
