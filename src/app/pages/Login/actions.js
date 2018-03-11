import { createAction } from 'redux-act';

const NS = '@@LOGIN/';

export const signIn = createAction(`${NS}signIn`, data => data);
