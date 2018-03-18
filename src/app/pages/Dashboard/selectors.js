import { createSelector } from 'reselect';

const getShoppingList = state => state.dashboard.shoppingList;
export const makeGetShoppingList = createSelector([getShoppingList], data => data);

const getCategories = state => state.dashboard.categories;
export const makeGetCategories = createSelector([getCategories], data => data);
