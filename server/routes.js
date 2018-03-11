const passport = require('passport');
const config = require('./db');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('./models/user');
const passportConfig = require('./passport');

passportConfig(passport);

router.post('/signup', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});

router.post('/signin', function (req, res) {
  User.findOne(
    {
      username: req.body.username
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
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
    }
  );
});

module.exports = router;
