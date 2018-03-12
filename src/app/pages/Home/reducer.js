import { createReducer } from 'redux-act';
import { saveUserData } from './actions';

export const initialState = {
  budget: null,
  shoppingList: [],
  categories: []
};

export const reducer = createReducer(on => {
  on(saveUserData, (state, { budget, shoppingList, categories }) => ({
    ...state,
    budget,
    shoppingList,
    categories
  }));
}, initialState);

export default reducer;
