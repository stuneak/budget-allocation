import { combineReducers } from 'redux';
import dashboard from 'pages/Dashboard/reducer';
import login from 'pages/Login/reducer';
import { routerReducer as routing } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loginConfig = {
  storage,
  key: 'login',
  blacklist: ['username', 'isAuthenticated']
};
export const rootReducer = combineReducers({
  routing,
  dashboard,
  login: persistReducer(loginConfig, login)
});
// TODO: add full reset the app state when the user logs off
export default rootReducer;
