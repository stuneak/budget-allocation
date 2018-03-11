import { createReducer } from 'redux-act';
import { signInSuccess, signInFailure } from './actions';

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
    errorMessage: error,
    isAuthenticated: false
  }));
}, initialState);

export default reducer;
