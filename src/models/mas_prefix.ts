import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface mas_prefixAttributes {
  id: number;
  name: string;
  code_cigna?: string;
  code_falcon?: string;
  isuse?: number;
}

export type mas_prefixPk = "id";
export type mas_prefixId = mas_prefix[mas_prefixPk];
export type mas_prefixCreationAttributes = Optional<mas_prefixAttributes, mas_prefixPk>;

export class mas_prefix extends Model<mas_prefixAttributes, mas_prefixCreationAttributes> implements mas_prefixAttributes {
  id!: number;
  name!: string;
  code_cigna?: string;
  code_falcon?: string;
  isuse?: number;

  // mas_prefix hasMany sysm_users via mas_prefix_id
  sysm_users!: sysm_users[];
  getSysm_users!: Sequelize.HasManyGetAssociationsMixin<sysm_users>;
  setSysm_users!: Sequelize.HasManySetAssociationsMixin<sysm_users, sysm_usersId>;
  addSysm_user!: Sequelize.HasManyAddAssociationMixin<sysm_users, sysm_usersId>;
  addSysm_users!: Sequelize.HasManyAddAssociationsMixin<sysm_users, sysm_usersId>;
  createSysm_user!: Sequelize.HasManyCreateAssociationMixin<sysm_users>;
  removeSysm_user!: Sequelize.HasManyRemoveAssociationMixin<sysm_users, sysm_usersId>;
  removeSysm_users!: Sequelize.HasManyRemoveAssociationsMixin<sysm_users, sysm_usersId>;
  hasSysm_user!: Sequelize.HasManyHasAssociationMixin<sysm_users, sysm_usersId>;
  hasSysm_users!: Sequelize.HasManyHasAssociationsMixin<sysm_users, sysm_usersId>;
  countSysm_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_prefix {
    mas_prefix.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code_cigna: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ cigna",
      unique: "code_cigna"
    },
    code_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ falcon",
      unique: "code_falcon"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_prefix',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "code_cigna",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_cigna" },
        ]
      },
      {
        name: "code_falcon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_falcon" },
        ]
      },
    ]
  });
  return mas_prefix;
  }
}
