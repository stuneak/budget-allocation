import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user';

export default ({ config }) =>
  resource({
    create ({ body: { username, password } }, res) {
      if (!username || !password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
      } else {
        const newUser = new UserModel({
          username: username,
          password: password
        });
        newUser
          .save()
          .then(result => {
            const token = jwt.sign(result.toJSON(), config.secret, {
              expiresIn: '2 days'
            });
            return res.send({
              success: true,
              msg: 'Successful created new user.',
              token
            });
          })
          .catch(error =>
            res.status(400).send({
              success: false,
              msg: 'Username already exists.'
            })
          );
      }
    }
  });
