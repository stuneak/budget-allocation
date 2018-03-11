import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user';

export default ({ config }) =>
  resource({
    create ({ body: { username, password } }, res) {
      UserModel.findOne({ username: username })
        .then(result => {
          if (!result) {
            return res.status(401).send({
              success: false,
              message: 'Authentication failed. User not found.'
            });
          }
          result.comparePassword(password, (err, isMatch) => {
            if (isMatch && !err) {
              var token = jwt.sign(result.toJSON(), config.secret, {
                expiresIn: '2 days'
              });
              return res.json({
                success: true,
                message: 'Authentication successfull',
                token
              });
            }
            res.status(401).send({
              success: false,
              message: 'Authentication failed. Passwords did not match.'
            });
          });
        })
        .catch(err => res.send(err.toString()));
    }
  });
