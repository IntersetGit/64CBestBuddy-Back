import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { person, personId } from './person';
import type { sysm_roles, sysm_rolesId } from './sysm_roles';

export interface sysm_usersAttributes {
  id: string;
  roles_id: string;
  username: string;
  password: string;
  email?: string;
  isuse: number;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;
  status_login?: number;
}

export type sysm_usersPk = "id";
export type sysm_usersId = sysm_users[sysm_usersPk];
export type sysm_usersCreationAttributes = Optional<sysm_usersAttributes, sysm_usersPk>;

export class sysm_users extends Model<sysm_usersAttributes, sysm_usersCreationAttributes> implements sysm_usersAttributes {
  id!: string;
  roles_id!: string;
  username!: string;
  password!: string;
  email?: string;
  isuse!: number;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;
  status_login?: number;

  // sysm_users belongsTo sysm_roles via roles_id
  role!: sysm_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<sysm_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<sysm_roles, sysm_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<sysm_roles>;
  // sysm_users hasMany person via user_id
  people!: person[];
  getPeople!: Sequelize.HasManyGetAssociationsMixin<person>;
  setPeople!: Sequelize.HasManySetAssociationsMixin<person, personId>;
  addPerson!: Sequelize.HasManyAddAssociationMixin<person, personId>;
  addPeople!: Sequelize.HasManyAddAssociationsMixin<person, personId>;
  createPerson!: Sequelize.HasManyCreateAssociationMixin<person>;
  removePerson!: Sequelize.HasManyRemoveAssociationMixin<person, personId>;
  removePeople!: Sequelize.HasManyRemoveAssociationsMixin<person, personId>;
  hasPerson!: Sequelize.HasManyHasAssociationMixin<person, personId>;
  hasPeople!: Sequelize.HasManyHasAssociationsMixin<person, personId>;
  countPeople!: Sequelize.HasManyCountAssociationsMixin;
  // sysm_users hasMany person via created_by
  created_by_people!: person[];
  getCreated_by_people!: Sequelize.HasManyGetAssociationsMixin<person>;
  setCreated_by_people!: Sequelize.HasManySetAssociationsMixin<person, personId>;
  addCreated_by_person!: Sequelize.HasManyAddAssociationMixin<person, personId>;
  addCreated_by_people!: Sequelize.HasManyAddAssociationsMixin<person, personId>;
  createCreated_by_person!: Sequelize.HasManyCreateAssociationMixin<person>;
  removeCreated_by_person!: Sequelize.HasManyRemoveAssociationMixin<person, personId>;
  removeCreated_by_people!: Sequelize.HasManyRemoveAssociationsMixin<person, personId>;
  hasCreated_by_person!: Sequelize.HasManyHasAssociationMixin<person, personId>;
  hasCreated_by_people!: Sequelize.HasManyHasAssociationsMixin<person, personId>;
  countCreated_by_people!: Sequelize.HasManyCountAssociationsMixin;
  // sysm_users hasMany person via updated_by
  updated_by_people!: person[];
  getUpdated_by_people!: Sequelize.HasManyGetAssociationsMixin<person>;
  setUpdated_by_people!: Sequelize.HasManySetAssociationsMixin<person, personId>;
  addUpdated_by_person!: Sequelize.HasManyAddAssociationMixin<person, personId>;
  addUpdated_by_people!: Sequelize.HasManyAddAssociationsMixin<person, personId>;
  createUpdated_by_person!: Sequelize.HasManyCreateAssociationMixin<person>;
  removeUpdated_by_person!: Sequelize.HasManyRemoveAssociationMixin<person, personId>;
  removeUpdated_by_people!: Sequelize.HasManyRemoveAssociationsMixin<person, personId>;
  hasUpdated_by_person!: Sequelize.HasManyHasAssociationMixin<person, personId>;
  hasUpdated_by_people!: Sequelize.HasManyHasAssociationsMixin<person, personId>;
  countUpdated_by_people!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sysm_users {
    sysm_users.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักผู้ใช้งานระบบ"
    },
    roles_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "รหัสสิทธิ์ผู้ใช้งาน",
      references: {
        model: 'sysm_roles',
        key: 'id'
      }
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ชื่อผู้ใช้งาน"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "รหัสผ่าน"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "อีเมล"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะ : 0 = ยกเลิก , 1 = ใช้งาน"
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "สร้างข้อมูลโดย"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "สร้างข้อมูลวันที่"
    },
    updated_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "แก้ไขข้อมูลโดย"
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "แก้ไขข้อมูลวันที่"
    },
    status_login: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะเข้าระบบ 0 = ยังไม่ได้เข้าระบบ 1 = ใช้งานใในระบบ"
    }
  }, {
    sequelize,
    tableName: 'sysm_users',
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
        name: "roles_id",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
    ]
  });
  return sysm_users;
  }
}
