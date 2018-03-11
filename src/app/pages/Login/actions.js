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
