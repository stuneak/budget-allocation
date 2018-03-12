import resource from 'resource-router-middleware';
import UserDataModel from '../models/UserData';
import jwt from 'jsonwebtoken';
import Config from '../config';

export default resource({
  /** POST **/
  create ({ headers: { authorization }, body }, res) {
    checkToken(authorization, res, decoded => {
      UserDataModel.findByIdAndUpdate(decoded._id, body)
        .then(() => res.send({ success: true, message: 'Update success' }))
        .catch(error =>
          res.status(404).send({ success: false, message: error })
        );
    });
  },
  /** GET **/
  list ({ headers: { authorization } }, res) {
    checkToken(authorization, res, decoded => {
      UserDataModel.findById(decoded._id)
        .then(result => {
          const { budget, categories, shoppingList } = result;
          res.send({
            budget,
            categories,
            shoppingList
          });
        })
        .catch(error =>
          res.status(404).send({ success: false, message: error })
        );
    });
  }
});

const checkToken = (authorization, res, callback) => {
  const token = String(authorization).replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, Config.secret);
    callback(decoded);
  } catch (err) {
    res.status(400).send({ err });
  }
};
