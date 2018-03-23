import { takeEvery, all, call, put } from 'redux-saga/effects';
import { signIn, signUp } from './actions';
import { getUserData } from 'pages/Dashboard/actions';
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
    yield put(getUserData['INIT']());
    yield put(signIn['DONE']({ token: response.data.token, username: username }));
  } catch (error) {
    message.error(error.response.data.message);
    yield put(signIn['FAIL']());
  }
}

function * Registration ({ payload: { username, password } }) {
  const userData = {
    username,
    password
  };

  try {
    const response = yield call(axios.post, '/api/signup', userData);

    yield put(signUp['INIT']({ token: response.data.token, username: username }));
    yield call(setHeaderToken, response.data.token);
    yield put(getUserData['INIT']());
  } catch (error) {
    message.error(error.response.data.message);
    yield put(signUp['FAIL']());
  }
}

export default function * watchLogin () {
  yield all([takeEvery(signIn['INIT'], Authorization), takeEvery(signUp['INIT'], Registration)]);
}
