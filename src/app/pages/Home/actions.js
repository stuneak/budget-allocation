import { createAction } from 'redux-act';

const NS = '@@HOME/';

export const requestForGetUserData = createAction(`${NS}requestForGetUserData`);

export const saveUserData = createAction(
  `${NS}saveUserData`,
  ({ budget, shoppingList, categories }) => ({
    budget,
    shoppingList,
    categories
  })
);
