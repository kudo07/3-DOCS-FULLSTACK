require('dotenv').config({ path: '.env.development' });

import { Sequelize } from 'sequelize';
import sequelize from '../../config/db.config';
import { DocumentUser } from './document-user.model';
import { Document } from './document.model';
import { RefreshToken } from './refresh-token.model';
import { Role } from './role.model';
import { UserRole } from './user-role.model';
import { User } from './user.model';

sequelize.addModels([
  User,
  RefreshToken,
  Role,
  UserRole,
  Document,
  DocumentUser,
]);
const db = {
  Sequelize,
  sequelize,
  User,
  RefreshToken,
  Role,
  UserRole,
  Document,
  DocumentUser,
};
export default db;
