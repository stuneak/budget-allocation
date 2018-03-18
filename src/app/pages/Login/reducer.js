import { createReducer } from 'redux-act';
import { signInSuccess, signInFailure, signUpSuccess, signUpFailure, logout } from './actions';

export const initialState = {
  username: '',
  token: '',
  isAuthenticated: false
};

export const reducer = createReducer(on => {
  on(signInSuccess, (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true
  }));
  on(signInFailure, (state, error) => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false
  }));
  on(signUpSuccess, (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true
  }));
  on(signUpFailure, (state, error) => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false
  }));
  on(logout, state => ({
    ...state,
    token: '',
    isAuthenticated: false
  }));
}, initialState);

export default reducer;
