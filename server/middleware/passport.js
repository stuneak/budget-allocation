import { Strategy, ExtractJwt } from 'passport-jwt';

import User from '../models/Users';
import Config from '../config';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Config.secret
};

export default passport => {
  passport.use(
    new Strategy(opts, (jwtPayload, done) => {
      User.findOne({ id: jwtPayload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};
