import { createReducer } from 'redux-act';
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  logout
} from './actions';

export const initialState = {
  username: '',
  token: '',
  isAuthenticated: false,
  errorMessage: ''
};

export const reducer = createReducer(on => {
  on(signInSuccess, (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true,
    errorMessage: ''
  }));
  on(signInFailure, (state, error) => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false,
    errorMessage: error
  }));
  on(signUpSuccess, (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true,
    errorMessage: ''
  }));
  on(signUpFailure, (state, error) => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false,
    errorMessage: error
  }));
  on(logout, state => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false,
    errorMessage: ''
  }));
}, initialState);

export default reducer;
