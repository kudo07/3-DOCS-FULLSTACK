// 3
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import RoleEnum from '../../types/enums/role-enum';
import { User } from './user.model';
import { UserRole } from './user-role.model';

@Table({ tableName: 'role', underscored: true, timestamps: false })
class Role extends Model {
  @Column(DataType.ENUM('ADMIN', 'SUPERADMIN'))
  name!: RoleEnum;

  @BelongsToMany(() => User, {
    through: () => UserRole,
    // defines the join table that links Role and Users mease UserRole model act as the join table thtat contains the forign key for both Role and User
    //
  })
  users!: Array<User>;

  @HasMany(() => UserRole, {
    onDelete: 'CASCADE',
  })
  roleUsers!: Array<UserRole>;
}

export { Role };
