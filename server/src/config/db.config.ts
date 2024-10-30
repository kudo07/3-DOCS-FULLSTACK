require('dotenv').config({ path: '.env.development' });
import { Sequelize } from 'sequelize-typescript';

import env from './env.config';

const sequelize =
  env.NODE_ENV === 'test' || env.NODE_ENV === 'development'
    ? // ? new Sequelize('gd', 'postgres', 'Emptiness123$', {
      new Sequelize(env.DATABASE!, env.USER!, env.PASSWORD!, {
        host: 'localhost',
        dialect: 'postgres',
        logging: false,
      })
    : //  new Sequelize('postgresql://postgres:Emptiness123$@localhost:5432/gd', {

      new Sequelize(env.DATABASE_URL!, {
        dialect: 'postgres',
        dialectOptions: {
          // ssl: {
          //   require: true,
          //   rejectUnauthorized: false,
          // },
        },
        logging: false,
      });

export default sequelize;
