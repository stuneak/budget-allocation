import { asyncAction } from 'utils/helpers';

const NS = '@@Dashboard/';

export const getUserData = asyncAction(`${NS}getUserData`);

export const changeBudget = asyncAction(`${NS}changeBudget`);
