import { createReducer } from 'redux-act';
import { signIn, signUp, logout } from './actions';

export const initialState = {
  username: '',
  token: '',
  isAuthenticated: false
};

export const reducer = createReducer(on => {
  on(signIn['DONE'], (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true
  }));
  on(signIn['FAIL'], (state, error) => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false
  }));
  on(signUp['DONE'], (state, { username, token }) => ({
    ...state,
    username,
    token,
    isAuthenticated: true
  }));
  on(signUp['FAIL'], (state, error) => ({
    ...state,
    username: '',
    token: '',
    isAuthenticated: false
  }));
  on(logout['INIT'], state => ({
    ...state,
    token: '',
    isAuthenticated: false
  }));
}, initialState);

export default reducer;
