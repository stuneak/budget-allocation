import { createReducer } from 'redux-act';
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure
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
    username: username,
    token: token,
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
    username: username,
    token: token,
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
}, initialState);

export default reducer;
