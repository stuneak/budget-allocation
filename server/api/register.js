import resource from 'resource-router-middleware';
import UserModel from '../models/user';

export default resource({
  create ({ body: { username, password } }, res) {
    if (!username || !password) {
      res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
      const newUser = new UserModel({
        username: username,
        password: password
      });
      newUser.save(err => {
        if (err) {
          return res.json({
            success: false,
            msg: 'Username already exists.'
          });
        }
        res.json({ success: true, msg: 'Successful created new user.' });
      });
    }
  }
});
