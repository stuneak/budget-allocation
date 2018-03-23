import { createReducer } from 'redux-act';
import { getUserData, changeBudget } from './actions';

export const initialState = {
  budget: 0,
  shoppingList: [],
  categories: []
};

export const reducer = createReducer(on => {
  on(getUserData['DONE'], (state, { budget, shoppingList, categories }) => ({
    ...state,
    budget,
    shoppingList,
    categories
  }));
  on(changeBudget['DONE'], (state, { budget }) => ({
    ...state,
    budget
  }));
}, initialState);

export default reducer;
