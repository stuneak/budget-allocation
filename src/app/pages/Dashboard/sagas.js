import { takeEvery, call, put, all } from 'redux-saga/effects';
import { requestForGetUserData, saveUserData } from './actions';
import { axios } from 'api';

function * getData () {
  try {
    const response = yield call(axios.get, '/api/userdata');
    const { budget, shoppingList, categories } = response.data;

    yield put(saveUserData({ budget, shoppingList, categories }));
  } catch (error) {
    alert(error.response.data.message);
  }
}

export default function * watchDashboard () {
  yield all([takeEvery(requestForGetUserData, getData)]);
}
