import { asyncAction } from 'utils/helpers';
const NS = '@@LOGIN/';

export const signIn = asyncAction(`${NS}signIn`);

export const signUp = asyncAction(`${NS}signUp`);

export const logout = asyncAction(`${NS}logout`);
