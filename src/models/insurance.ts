import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_category, insurance_categoryId } from './insurance_category';
import type { insurance_mas_plan, insurance_mas_planId } from './insurance_mas_plan';
import type { insurance_mas_protection, insurance_mas_protectionId } from './insurance_mas_protection';
import type { insurance_order, insurance_orderId } from './insurance_order';
import type { mas_insurance_type, mas_insurance_typeId } from './mas_insurance_type';
import type { sysm_users, sysm_usersId } from './sysm_users';

export interface insuranceAttributes {
  id: string;
  product_code?: string;
  name?: string;
  img_header?: string;
  img_cover?: string;
  details?: string;
  note?: string;
  status?: number;
  percentage?: number;
  isuse?: number;
  sort?: number;
  is_one_price?: number;
  insurance_category_id?: string;
  mas_insurance_type_id?: string;
  haed_highlight?: string;
  number_visitors?: number;
  user_id?: string;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;
}

export type insurancePk = "id";
export type insuranceId = insurance[insurancePk];
export type insuranceOptionalAttributes = "id" | "product_code" | "name" | "img_header" | "img_cover" | "details" | "note" | "status" | "percentage" | "isuse" | "sort" | "is_one_price" | "insurance_category_id" | "mas_insurance_type_id" | "haed_highlight" | "number_visitors" | "user_id" | "created_by" | "created_date" | "updated_by" | "updated_date";
export type insuranceCreationAttributes = Optional<insuranceAttributes, insuranceOptionalAttributes>;

export class insurance extends Model<insuranceAttributes, insuranceCreationAttributes> implements insuranceAttributes {
  id!: string;
  product_code?: string;
  name?: string;
  img_header?: string;
  img_cover?: string;
  details?: string;
  note?: string;
  status?: number;
  percentage?: number;
  isuse?: number;
  sort?: number;
  is_one_price?: number;
  insurance_category_id?: string;
  mas_insurance_type_id?: string;
  haed_highlight?: string;
  number_visitors?: number;
  user_id?: string;
  created_by?: string;
  created_date?: Date;
  updated_by?: string;
  updated_date?: Date;

  // insurance hasMany insurance_mas_plan via insurance_id
  insurance_mas_plans!: insurance_mas_plan[];
  getInsurance_mas_plans!: Sequelize.HasManyGetAssociationsMixin<insurance_mas_plan>;
  setInsurance_mas_plans!: Sequelize.HasManySetAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  addInsurance_mas_plan!: Sequelize.HasManyAddAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  addInsurance_mas_plans!: Sequelize.HasManyAddAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  createInsurance_mas_plan!: Sequelize.HasManyCreateAssociationMixin<insurance_mas_plan>;
  removeInsurance_mas_plan!: Sequelize.HasManyRemoveAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  removeInsurance_mas_plans!: Sequelize.HasManyRemoveAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  hasInsurance_mas_plan!: Sequelize.HasManyHasAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  hasInsurance_mas_plans!: Sequelize.HasManyHasAssociationsMixin<insurance_mas_plan, insurance_mas_planId>;
  countInsurance_mas_plans!: Sequelize.HasManyCountAssociationsMixin;
  // insurance hasMany insurance_mas_protection via insurance_id
  insurance_mas_protections!: insurance_mas_protection[];
  getInsurance_mas_protections!: Sequelize.HasManyGetAssociationsMixin<insurance_mas_protection>;
  setInsurance_mas_protections!: Sequelize.HasManySetAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  addInsurance_mas_protection!: Sequelize.HasManyAddAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  addInsurance_mas_protections!: Sequelize.HasManyAddAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  createInsurance_mas_protection!: Sequelize.HasManyCreateAssociationMixin<insurance_mas_protection>;
  removeInsurance_mas_protection!: Sequelize.HasManyRemoveAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  removeInsurance_mas_protections!: Sequelize.HasManyRemoveAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  hasInsurance_mas_protection!: Sequelize.HasManyHasAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  hasInsurance_mas_protections!: Sequelize.HasManyHasAssociationsMixin<insurance_mas_protection, insurance_mas_protectionId>;
  countInsurance_mas_protections!: Sequelize.HasManyCountAssociationsMixin;
  // insurance hasMany insurance_order via insurance_id
  insurance_orders!: insurance_order[];
  getInsurance_orders!: Sequelize.HasManyGetAssociationsMixin<insurance_order>;
  setInsurance_orders!: Sequelize.HasManySetAssociationsMixin<insurance_order, insurance_orderId>;
  addInsurance_order!: Sequelize.HasManyAddAssociationMixin<insurance_order, insurance_orderId>;
  addInsurance_orders!: Sequelize.HasManyAddAssociationsMixin<insurance_order, insurance_orderId>;
  createInsurance_order!: Sequelize.HasManyCreateAssociationMixin<insurance_order>;
  removeInsurance_order!: Sequelize.HasManyRemoveAssociationMixin<insurance_order, insurance_orderId>;
  removeInsurance_orders!: Sequelize.HasManyRemoveAssociationsMixin<insurance_order, insurance_orderId>;
  hasInsurance_order!: Sequelize.HasManyHasAssociationMixin<insurance_order, insurance_orderId>;
  hasInsurance_orders!: Sequelize.HasManyHasAssociationsMixin<insurance_order, insurance_orderId>;
  countInsurance_orders!: Sequelize.HasManyCountAssociationsMixin;
  // insurance belongsTo insurance_category via insurance_category_id
  insurance_category!: insurance_category;
  getInsurance_category!: Sequelize.BelongsToGetAssociationMixin<insurance_category>;
  setInsurance_category!: Sequelize.BelongsToSetAssociationMixin<insurance_category, insurance_categoryId>;
  createInsurance_category!: Sequelize.BelongsToCreateAssociationMixin<insurance_category>;
  // insurance belongsTo mas_insurance_type via mas_insurance_type_id
  mas_insurance_type!: mas_insurance_type;
  getMas_insurance_type!: Sequelize.BelongsToGetAssociationMixin<mas_insurance_type>;
  setMas_insurance_type!: Sequelize.BelongsToSetAssociationMixin<mas_insurance_type, mas_insurance_typeId>;
  createMas_insurance_type!: Sequelize.BelongsToCreateAssociationMixin<mas_insurance_type>;
  // insurance belongsTo sysm_users via user_id
  user!: sysm_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<sysm_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<sysm_users, sysm_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<sysm_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance {
    insurance.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    product_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสประกันของ cigna, falcon",
      unique: "product_code"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อประกัน"
    },
    img_header: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ภาพหัว"
    },
    img_cover: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ภาพปก"
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียด ui"
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "หมายเหตุ"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "true = ลด false = ไม่ลด"
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เปอร์เซ็นที่ลดราคา"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะใช้ข้อมูล"
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เรียงลำดับ"
    },
    is_one_price: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "เช็คการส่ง true = gender 0 false = gender 1 or 2"
    },
    insurance_category_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสหมวดหมู่ประกัน",
      references: {
        model: 'insurance_category',
        key: 'id'
      }
    },
    mas_insurance_type_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสประเภทประกัน",
      references: {
        model: 'mas_insurance_type',
        key: 'id'
      }
    },
    haed_highlight: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ไอคอน 3 ตัว"
    },
    number_visitors: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "จำนวนผู้เข้าชม"
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสผู้สร้างประกัน",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insurance',
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
        name: "product_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_code" },
        ]
      },
      {
        name: "[object Object]_mas_insurance_type_id_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "mas_insurance_type_id" },
        ]
      },
      {
        name: "sysm_users_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "insurance_category_id_ibfk_3",
        using: "BTREE",
        fields: [
          { name: "insurance_category_id" },
        ]
      },
    ]
  });
  return insurance;
  }
}
