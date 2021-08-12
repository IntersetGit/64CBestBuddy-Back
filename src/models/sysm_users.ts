import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';
import type { sysm_roles, sysm_rolesId } from './sysm_roles';

export interface sysm_usersAttributes {
  id: string;
  roles_id: string;
  username: string;
  password: string;
  email?: string;
  mas_prefix_id?: string;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  birthday?: string;
  gender?: number;
  id_card?: string;
  tel?: string;
  passport_number?: string;
  insurance_code?: string;
  isuse: number;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;
  status_login?: number;
  refresh_token?: string;
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
  mas_prefix_id?: string;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  birthday?: string;
  gender?: number;
  id_card?: string;
  tel?: string;
  passport_number?: string;
  insurance_code?: string;
  isuse!: number;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;
  status_login?: number;
  refresh_token?: string;

  // sysm_users belongsTo sysm_roles via roles_id
  role!: sysm_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<sysm_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<sysm_roles, sysm_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<sysm_roles>;
  // sysm_users hasMany insurance via user_id
  insurances!: insurance[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<insurance>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<insurance, insuranceId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<insurance, insuranceId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<insurance>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<insurance, insuranceId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<insurance, insuranceId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<insurance, insuranceId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<insurance, insuranceId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;

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
    mas_prefix_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสคำนำหน้าชื่อ"
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อจริง"
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "นามสกุล "
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อเล่น"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันเกิด"
    },
    gender: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เพศ : 1 = ชาย , 2 = หญิง , null = ไม่ระบุ"
    },
    id_card: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เลขบัตรประชาชน"
    },
    tel: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เบอร์ติดต่อ"
    },
    passport_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เลขหนังสือเดินทาง"
    },
    insurance_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสตัวแทนประกัน"
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
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true
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
