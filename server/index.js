import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import api from './api';
import initializeDb from './db';
import passportMiddleware from './middleware/passport';
import config from './config';

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

initializeDb(() => {
  app.use(passport.initialize());

  passportMiddleware(passport);

  app.use('/api', api({ config }));

  app.listen(port, () => {
    console.log(`Started on port ${(app.server, port)}`);
  });
});

export default app;
