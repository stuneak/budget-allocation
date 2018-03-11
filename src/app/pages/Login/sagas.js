import { takeEvery, all, call, put } from 'redux-saga/effects';
import { signIn, signInSuccess, signInFailure } from './actions';
import { axios } from 'api';

function * Authorization ({ payload }) {
  const { username, password } = payload;
  let userInfo = JSON.stringify({
    username: username,
    password: password
  });

  try {
    const response = yield call(axios.post, '/api/signin', userInfo);
    yield put(
      signInSuccess({ token: response.data.token, username: username })
    );
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export default function * watchLogin () {
  yield all([takeEvery(signIn, Authorization)]);
}
