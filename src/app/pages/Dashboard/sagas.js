import { takeEvery, call, put, all } from 'redux-saga/effects';
import { getUserData, changeBudget } from './actions';
import { axios } from 'api';
import { message } from 'antd';

function * getData () {
  try {
    const response = yield call(axios.get, '/api/userdata');
    const { budget, shoppingList, categories } = response.data;

    yield put(getUserData['DONE']({ budget: +budget, shoppingList, categories }));
  } catch (error) {
    message.error(error.response.data.message || 'Error: getData saga');
  }
}

function * makeChangeBudget ({ payload }) {
  try {
    yield call(axios.post, '/api/userdata', payload);
    yield put(changeBudget['DONE']({ budget: +payload.budget }));
  } catch (error) {
    message.error(error.response.data.message || 'Error: makeChangeBudget saga');
  }
}

export default function * watchDashboard () {
  yield all([
    takeEvery(getUserData['INIT'], getData),
    takeEvery(changeBudget['INIT'], makeChangeBudget)
  ]);
}
