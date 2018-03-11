import mongoose from 'mongoose';
import Promise from 'bluebird';
import config from './config';

export default callback => {
  mongoose.Promise = Promise;

  mongoose
    .connect(config.url)
    .then(() => {
      callback(mongoose);
    })
    .catch(err => console.error(err.toString()));
};
