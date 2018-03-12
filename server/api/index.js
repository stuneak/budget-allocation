import { Router } from 'express';
import userApi from './auth';
import registerApi from './register';

export default ({ config }) => {
  const api = Router();
  api.use('/signin', userApi({ config }));
  api.use('/signup', registerApi({ config }));
  api.get('/', (req, res) => {
    res.json('Server open');
  });
  return api;
};
