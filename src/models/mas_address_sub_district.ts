import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_order, insurance_orderId } from './insurance_order';

export interface mas_address_sub_districtAttributes {
  id: number;
  district_id: number;
  sub_district_name_en: string;
  sub_district_name_th: string;
  postal_code: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_address_sub_districtPk = "id";
export type mas_address_sub_districtId = mas_address_sub_district[mas_address_sub_districtPk];
export type mas_address_sub_districtOptionalAttributes = "id" | "code_cigna" | "code_falcon";
export type mas_address_sub_districtCreationAttributes = Optional<mas_address_sub_districtAttributes, mas_address_sub_districtOptionalAttributes>;

export class mas_address_sub_district extends Model<mas_address_sub_districtAttributes, mas_address_sub_districtCreationAttributes> implements mas_address_sub_districtAttributes {
  id!: number;
  district_id!: number;
  sub_district_name_en!: string;
  sub_district_name_th!: string;
  postal_code!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_address_sub_district hasMany insurance_order via sub_district_id
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
  // mas_address_sub_district hasMany insurance_order via sub_district_id_insured
  sub_district_id_insured_insurance_orders!: insurance_order[];
  getSub_district_id_insured_insurance_orders!: Sequelize.HasManyGetAssociationsMixin<insurance_order>;
  setSub_district_id_insured_insurance_orders!: Sequelize.HasManySetAssociationsMixin<insurance_order, insurance_orderId>;
  addSub_district_id_insured_insurance_order!: Sequelize.HasManyAddAssociationMixin<insurance_order, insurance_orderId>;
  addSub_district_id_insured_insurance_orders!: Sequelize.HasManyAddAssociationsMixin<insurance_order, insurance_orderId>;
  createSub_district_id_insured_insurance_order!: Sequelize.HasManyCreateAssociationMixin<insurance_order>;
  removeSub_district_id_insured_insurance_order!: Sequelize.HasManyRemoveAssociationMixin<insurance_order, insurance_orderId>;
  removeSub_district_id_insured_insurance_orders!: Sequelize.HasManyRemoveAssociationsMixin<insurance_order, insurance_orderId>;
  hasSub_district_id_insured_insurance_order!: Sequelize.HasManyHasAssociationMixin<insurance_order, insurance_orderId>;
  hasSub_district_id_insured_insurance_orders!: Sequelize.HasManyHasAssociationsMixin<insurance_order, insurance_orderId>;
  countSub_district_id_insured_insurance_orders!: Sequelize.HasManyCountAssociationsMixin;
  // mas_address_sub_district belongsTo mas_address_sub_district via district_id
  district!: mas_address_sub_district;
  getDistrict!: Sequelize.BelongsToGetAssociationMixin<mas_address_sub_district>;
  setDistrict!: Sequelize.BelongsToSetAssociationMixin<mas_address_sub_district, mas_address_sub_districtId>;
  createDistrict!: Sequelize.BelongsToCreateAssociationMixin<mas_address_sub_district>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_sub_district {
    mas_address_sub_district.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ไอดี อำเภอ\/เขต",
      references: {
        model: 'mas_address_sub_district',
        key: 'id'
      }
    },
    sub_district_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อตาราง ตำบล\/แขวง ภาษาอังกฤษ"
    },
    sub_district_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อตาราง ตำบล\/แขวง ภาษาไทย"
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "รหัสไปรษณีย์"
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
    }
  }, {
    sequelize,
    tableName: 'mas_address_sub_district',
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
      {
        name: "district_id",
        using: "BTREE",
        fields: [
          { name: "district_id" },
        ]
      },
    ]
  });
  return mas_address_sub_district;
  }
}
