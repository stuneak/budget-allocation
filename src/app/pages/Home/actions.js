import { createAction } from 'redux-act';

const NS = '@@HOME/';

export const getUserInfo = createAction(`${NS}getUserInfo`, data => data);
