import { combineReducers } from 'redux';
import home from 'pages/Home/reducer.js';
import login from 'pages/Login/reducer.js';
import { routerReducer as routing } from 'react-router-redux';

export const rootReducer = combineReducers({
  routing,
  home,
  login
});

export default rootReducer;
