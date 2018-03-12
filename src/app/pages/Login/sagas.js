import { takeEvery, all, call, put } from 'redux-saga/effects';
import {
  signIn,
  signInSuccess,
  signInFailure,
  signUp,
  signUpSuccess,
  signUpFailure
} from './actions';
import { axios } from 'api';

function * Authorization ({ payload }) {
  const { username, password } = payload;
  let userData = JSON.stringify({
    username: username,
    password: password
  });

  try {
    const response = yield call(axios.post, '/api/signin', userData);
    yield put(
      signInSuccess({ token: response.data.token, username: username })
    );
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function * Registration ({ payload }) {
  const { username, password } = payload;
  let userData = JSON.stringify({
    username: username,
    password: password
  });

  try {
    const response = yield call(axios.post, '/api/signup', userData);
    yield put(
      signUpSuccess({ token: response.data.token, username: username })
    );
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export default function * watchLogin () {
  yield all([takeEvery(signIn, Authorization)]);
  yield all([takeEvery(signUp, Registration)]);
}
