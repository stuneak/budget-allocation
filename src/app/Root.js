import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import AppRouter from './routes';
import ErrorBoundary from './HOC/ErrorBoundary';
import { PersistGate } from 'redux-persist/lib/integration/react';

const Root = ({ store, history, persistor, onBeforeLift }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
            <AppRouter />
          </PersistGate>
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
};

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  persistor: PropTypes.object,
  onBeforeLift: PropTypes.func
};

export default hot(module)(Root);
