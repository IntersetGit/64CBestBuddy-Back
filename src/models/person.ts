import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_title_name, mas_title_nameId } from './mas_title_name';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface personAttributes {
  id: string;
  user_id: string;
  mas_title_name_id: number;
  first_name_th: string;
  first_name_en?: string;
  last_name_th: string;
  last_name_en?: string;
  nick_name_th?: string;
  nick_name_en?: string;
  email?: string;
  gender?: number;
  birthday?: string;
  id_card?: string;
  passport_number?: string;
  insurance_code?: string;
  created_by: string;
  created_date: Date;
  updated_by?: string;
  updated_date?: Date;
}

export type personPk = "id";
export type personId = person[personPk];
export type personCreationAttributes = Optional<personAttributes, personPk>;

export class person extends Model<personAttributes, personCreationAttributes> implements personAttributes {
  id!: string;
  user_id!: string;
  mas_title_name_id!: number;
  first_name_th!: string;
  first_name_en?: string;
  last_name_th!: string;
  last_name_en?: string;
  nick_name_th?: string;
  nick_name_en?: string;
  email?: string;
  gender?: number;
  birthday?: string;
  id_card?: string;
  passport_number?: string;
  insurance_code?: string;
  created_by!: string;
  created_date!: Date;
  updated_by?: string;
  updated_date?: Date;

  // person belongsTo mas_title_name via mas_title_name_id
  mas_title_name!: mas_title_name;
  getMas_title_name!: Sequelize.BelongsToGetAssociationMixin<mas_title_name>;
  setMas_title_name!: Sequelize.BelongsToSetAssociationMixin<mas_title_name, mas_title_nameId>;
  createMas_title_name!: Sequelize.BelongsToCreateAssociationMixin<mas_title_name>;
  // person belongsTo sysm_users via user_id
  user!: sysm_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;
  // person belongsTo sysm_users via created_by
  created_by_sysm_user!: sysm_users;
  getCreated_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setCreated_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createCreated_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;
  // person belongsTo sysm_users via updated_by
  updated_by_sysm_user!: sysm_users;
  getUpdated_by_sysm_user!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUpdated_by_sysm_user!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUpdated_by_sysm_user!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof person {
    person.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักข้อมูลส่วนบุคคล"
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "รหัสผู้ช้งานระบบ",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    mas_title_name_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "รหัสคำนำหน้าชื่อ",
      references: {
        model: 'mas_title_name',
        key: 'id'
      }
    },
    first_name_th: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ชื่อจริง (ไทย)"
    },
    first_name_en: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อจริง (อังกฤษ)"
    },
    last_name_th: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "นามสกุล (ไทย)"
    },
    last_name_en: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "นามสกุล (อังกฤษ)"
    },
    nick_name_th: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อเล่น (ไทย)"
    },
    nick_name_en: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อเล่น (อังกฤษ)"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gender: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เพศ : 1 = ชาย , 2 = หญิง , null = ไม่ระบุ"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันเกิด"
    },
    id_card: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เลขบัตรประชาชน"
    },
    passport_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เลขหนังสือเดินทาง"
    },
    insurance_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสตัวแทนประกัน"
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "สร้างข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "สร้างข้อมูลวันที่"
    },
    updated_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "แก้ไขข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "แก้ไขข้อมูลวันที่"
    }
  }, {
    sequelize,
    tableName: 'person',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "mas_title_name_id",
        using: "BTREE",
        fields: [
          { name: "mas_title_name_id" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "updated_by",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  });
  return person;
  }
}
