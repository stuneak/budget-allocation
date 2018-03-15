import { combineReducers } from 'redux';
import home from 'pages/Home/reducer';
import login from 'pages/Login/reducer';
import { routerReducer as routing } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loginConfig = {
  storage,
  key: 'login',
  blacklist: ['username', 'isAuthenticated', 'errorMessage']
};
export const rootReducer = combineReducers({
  routing,
  home,
  login: persistReducer(loginConfig, login)
});

export default rootReducer;
