import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';
import UserModel from '../models/Users';
import UserDataModel from '../models/UserData';

export default ({ config }) =>
  resource({
    create ({ body: { username, password } }, res) {
      if (!username || !password) {
        res.status(400).send({
          success: false,
          message: 'Please pass username and password.'
        });
      } else {
        const newUser = new UserModel({
          username: username,
          password: password
        });
        newUser
          .save()
          .then(result => {
            const newDataUser = new UserDataModel({
              _id: result._id,
              budget: 0
            });
            newDataUser.save();
            const token = jwt.sign(result.toJSON(), config.secret, {
              expiresIn: '2 days'
            });
            return res.send({
              success: true,
              message: 'Successful created new user.',
              token
            });
          })
          .catch(error =>
            res.status(400).send({
              success: false,
              message: error
            })
          );
      }
    }
  });
