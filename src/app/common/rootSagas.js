import { all } from 'redux-saga/effects';
import watchHome from 'pages/Home/sagas.js';
import watchLogin from 'pages/Login/sagas.js';

export default function * rootSaga () {
  yield all([watchHome(), watchLogin()]);
}
