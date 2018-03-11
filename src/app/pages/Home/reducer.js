import { createReducer } from 'redux-act';
import { getUserInfo } from './actions';

export const initialState = {
  budget: 0,
  shoppingList: [],
  shoppingCategories: []
};

export const reducer = createReducer(on => {
  on(getUserInfo, (state, payload) => ({
    ...state
  }));
}, initialState);

export default reducer;
