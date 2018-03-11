import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user';

export default ({ config }) =>
  resource({
    create ({ body: { username, password } }, res) {
      UserModel.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) {
          res.status(401).send({
            success: false,
            msg: 'Authentication failed. User not found.'
          });
        } else {
          user.comparePassword(password, (err, isMatch) => {
            if (isMatch && !err) {
              const token = jwt.sign(user.toJSON(), config.secret);
              res.json({ success: true, token: token });
            } else {
              res.status(401).send({
                success: false,
                msg: 'Authentication failed. Wrong password.'
              });
            }
          });
        }
      });
    }
  });
