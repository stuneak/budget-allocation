import { all } from 'redux-saga/effects';
import watchDashboard from 'pages/Dashboard/sagas';
import watchLogin from 'pages/Login/sagas';

export default function * rootSaga () {
  yield all([watchDashboard(), watchLogin()]);
}
