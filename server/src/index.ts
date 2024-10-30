import express, { Express, Request, Response } from 'express';
require('dotenv').config({ path: '.env.development' });
import db from './db/models';
import env from './config/env.config';
import router from './routes';

const app: Express = express();
// to create the tables in the database to receive inputs in the json body
app.use(express.json());
app.use(router);
const port = env.PORT;

// to create tables in the database
db.sequelize.sync();
// to recieve inputs from the json body
app.get('/', (req, res) => {
  res.send('Express + Typescript now change change');
});
app.listen(port, () => {
  console.log(`server is listening port:${port}`);
});
