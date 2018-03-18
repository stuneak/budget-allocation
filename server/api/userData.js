import resource from 'resource-router-middleware';
import UserDataModel from '../models/UserData';
import { checkToken, isNumber } from '../utils';

export default resource({
  /** POST **/
  create ({ headers: { authorization }, body }, res) {
    let params = {};
    if (isNumber(+body.budget)) {
      params.budget = body.budget;
    }
    if (body.categories) {
      if (Array.isArray(JSON.parse(body.categories))) {
        params.categories = JSON.parse(body.categories);
      } else {
        res.status(422).send({ success: false, message: `categories is not array` });
      }
    }
    if (body.shoppingList) {
      if (Array.isArray(JSON.parse(body.shoppingList))) {
        params.shoppingList = JSON.parse(body.shoppingList);
      } else {
        res.status(422).send({ success: false, message: `shoppingList is not array` });
      }
    }

    checkToken(authorization, res, decoded => {
      UserDataModel.findByIdAndUpdate(decoded._id, params)
        .then(() => res.send({ success: true, message: 'Update success' }))
        .catch(error => res.status(404).send({ success: false, message: error }));
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
        .catch(error => res.status(404).send({ success: false, message: error }));
    });
  }
});
