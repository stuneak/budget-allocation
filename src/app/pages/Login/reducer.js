import { createReducer } from 'redux-act';
import { signIn } from './actions';

export const initialState = {
  username: '',
  token: ''
};

export const reducer = createReducer(on => {
  on(signIn, (state, payload) => ({
    ...state,
    username: payload.username,
    token: payload.token
  }));
}, initialState);

export default reducer;
