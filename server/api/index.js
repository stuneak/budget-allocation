import { Router } from 'express';
import userApi from './auth';
import registerApi from './register';
import userData from './userData';
import requireAuth from '../middleware/require-auth';

export default ({ config }) => {
  const api = Router();
  api.use('/signin', userApi({ config }));
  api.use('/signup', registerApi({ config }));
  api.use('/userdata', requireAuth, userData);
  api.get('/', (req, res) => {
    res.json('Server open');
  });
  return api;
};
