import { takeEvery, all, call, put } from 'redux-saga/effects';
import { signIn, signInSuccess, signInFailure, signUp, signUpSuccess, signUpFailure } from './actions';
import { requestForGetUserData } from 'pages/Dashboard/actions';
import { axios, setHeaderToken } from 'api';
import { message } from 'antd';

function * Authorization ({ payload: { username, password } }) {
  const userData = {
    username,
    password
  };

  try {
    const response = yield call(axios.post, '/api/signin', userData);
    yield call(setHeaderToken, response.data.token);
    yield put(requestForGetUserData());
    yield put(signInSuccess({ token: response.data.token, username: username }));
  } catch (error) {
    message.error(error.response.data.message);
    yield put(signInFailure());
  }
}

function * Registration ({ payload: { username, password } }) {
  const userData = {
    username,
    password
  };

  try {
    const response = yield call(axios.post, '/api/signup', userData);

    yield put(signUpSuccess({ token: response.data.token, username: username }));
    yield call(setHeaderToken, response.data.token);
    yield put(requestForGetUserData());
  } catch (error) {
    message.error(error.response.data.message);
    yield put(signUpFailure());
  }
}

export default function * watchLogin () {
  yield all([takeEvery(signIn, Authorization), takeEvery(signUp, Registration)]);
}
