import _axios from 'axios';

export const axios = _axios.create({
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

export const setHeaderToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
