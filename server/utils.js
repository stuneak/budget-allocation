import jwt from 'jsonwebtoken';
import config from './config';

export const checkToken = (authorization, res, callback) => {
  const token = String(authorization).replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, config.secret);
    callback(decoded);
  } catch (err) {
    res.status(400).send({ success: false, message: err });
  }
};

export const isNumber = value => {
  return (value instanceof Number || typeof value === 'number') && !isNaN(value);
};
