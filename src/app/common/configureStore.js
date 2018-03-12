import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas.js';

const history = createBrowserHistory();
const reduxRouter = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

function configureStoreProd (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, reduxRouter)
  );
  sagaMiddleware.run(rootSagas);
  return store;
}

function configureStoreDev (initialState) {
  const middlewares = [
    sagaMiddleware,
    reduxRouter,
    createLogger({
      collapsed: true
    })
  ];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSagas);
  const persistor = persistStore(store);
  return { store, persistor };
}

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
