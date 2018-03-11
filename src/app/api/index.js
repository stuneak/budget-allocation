import _axios from 'axios';

export const axios = _axios.create({
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});
