import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import AppRouter from './routes';
import ErrorBoundary from './ErrorBoundary';

const Root = ({ store, history }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default Root;
