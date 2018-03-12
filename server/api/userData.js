import resource from 'resource-router-middleware';
import UserDataModel from '../models/UserData';
import jwt from 'jsonwebtoken';
import Config from '../config';

export default resource({
  /** POST **/
  create (
    { headers: { authorization }, body: { budget, categoris, shoppingList } },
    res
  ) {
    checkToken(authorization, res, user => {
      const newDataUser = new UserDataModel({
        _id: user._id,
        budget
      });
      if (!budget) {
        res.status(400).send({ success: false, msg: 'Please pass budget.' });
      } else {
        newDataUser
          .save()
          .then(result =>
            res.send({
              budget: result.budget,
              categoris: result.categoris,
              shoppingList: result.shoppingList
            })
          )
          .catch(error =>
            res.status(400).send({
              success: false,
              msg: error
            })
          );
      }
    });
  },
  /** GET **/
  list ({ headers: { authorization } }, res) {
    checkToken(authorization, res, decoded => {
      UserDataModel.findById(decoded._id)
        .then(result =>
          res.send({
            budget: result.budget,
            categoris: result.categoris,
            shoppingList: result.shoppingList
          })
        )
        .catch(error => res.status(404).send({ success: false, msg: error }));
    });
  },
  /** PUT /:id */
  update ({ headers: { authorization }, body }, res) {
    checkToken(authorization, res, decoded => {
      UserDataModel.findByIdAndUpdate(decoded._id, body)
        .then(() => res.send({ success: true, msg: 'Update success' }))
        .catch(error => res.status(404).send({ success: false, msg: error }));
    });
  }
});

const checkToken = (authorization, res, callback) => {
  const token = String(authorization).split(' ')[1];
  try {
    const decoded = jwt.verify(token, Config.secret);
    callback(decoded);
  } catch (err) {
    res.status(400).send({ err });
  }
};
