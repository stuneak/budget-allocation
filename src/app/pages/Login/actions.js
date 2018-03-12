import { createAction } from 'redux-act';

const NS = '@@LOGIN/';

export const signIn = createAction(`${NS}signIn`, ({ username, password }) => ({
  username,
  password
}));
export const signInSuccess = createAction(
  `${NS}signInSuccess`,
  ({ username, token }) => ({
    username,
    token
  })
);
export const signInFailure = createAction(`${NS}signInFailure`, err => err);

export const signUp = createAction(`${NS}signUp`, ({ username, password }) => ({
  username,
  password
}));
export const signUpSuccess = createAction(
  `${NS}signUpSuccess`,
  ({ username, token }) => ({
    username,
    token
  })
);
export const signUpFailure = createAction(`${NS}signUpFailure`, err => err);

export const logout = createAction(`${NS}logout`);
