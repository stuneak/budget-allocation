import { all } from 'redux-saga/effects';
import watchHome from 'pages/Home/sagas';
import watchLogin from 'pages/Login/sagas';

export default function * rootSaga () {
  yield all([watchHome(), watchLogin()]);
}
