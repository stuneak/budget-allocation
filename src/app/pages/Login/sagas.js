import { takeEvery, all, call, put } from 'redux-saga/effects';
import {
  signIn,
  signInSuccess,
  signInFailure,
  signUp,
  signUpSuccess,
  signUpFailure
} from './actions';
import { requestForGetUserData } from 'pages/Home/actions';
import { axios, setHeaderToken } from 'api';

function * Authorization ({ payload: { username, password } }) {
  const userData = {
    username,
    password
  };

  try {
    const response = yield call(axios.post, '/api/signin', userData);
    yield call(setHeaderToken, response.data.token);
    yield put(requestForGetUserData());
    yield put(
      signInSuccess({ token: response.data.token, username: username })
    );
  } catch (error) {
    alert(error.response.data.message);
    yield put(signInFailure(error.response.data.message));
  }
}

function * Registration ({ payload: { username, password } }) {
  const userData = {
    username,
    password
  };

  try {
    const response = yield call(axios.post, '/api/signup', userData);

    yield put(
      signUpSuccess({ token: response.data.token, username: username })
    );
    yield call(setHeaderToken, response.data.token);
    yield put(requestForGetUserData());
  } catch (error) {
    alert(error.response.data.message);
    yield put(signUpFailure(error.response.data.message));
  }
}

export default function * watchLogin () {
  yield all([
    takeEvery(signIn, Authorization),
    takeEvery(signUp, Registration)
  ]);
}
