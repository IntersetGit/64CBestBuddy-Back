import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_order, insurance_orderId } from './insurance_order';
import type { mas_address_province, mas_address_provinceId } from './mas_address_province';

export interface mas_address_districtAttributes {
  id: number;
  provicne_id: number;
  district_name_en: string;
  district_name_th: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_address_districtPk = "id";
export type mas_address_districtId = mas_address_district[mas_address_districtPk];
export type mas_address_districtCreationAttributes = Optional<mas_address_districtAttributes, mas_address_districtPk>;

export class mas_address_district extends Model<mas_address_districtAttributes, mas_address_districtCreationAttributes> implements mas_address_districtAttributes {
  id!: number;
  provicne_id!: number;
  district_name_en!: string;
  district_name_th!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_address_district hasMany insurance_order via district_id
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
  // mas_address_district hasMany insurance_order via district_id_insured
  district_id_insured_insurance_orders!: insurance_order[];
  getDistrict_id_insured_insurance_orders!: Sequelize.HasManyGetAssociationsMixin<insurance_order>;
  setDistrict_id_insured_insurance_orders!: Sequelize.HasManySetAssociationsMixin<insurance_order, insurance_orderId>;
  addDistrict_id_insured_insurance_order!: Sequelize.HasManyAddAssociationMixin<insurance_order, insurance_orderId>;
  addDistrict_id_insured_insurance_orders!: Sequelize.HasManyAddAssociationsMixin<insurance_order, insurance_orderId>;
  createDistrict_id_insured_insurance_order!: Sequelize.HasManyCreateAssociationMixin<insurance_order>;
  removeDistrict_id_insured_insurance_order!: Sequelize.HasManyRemoveAssociationMixin<insurance_order, insurance_orderId>;
  removeDistrict_id_insured_insurance_orders!: Sequelize.HasManyRemoveAssociationsMixin<insurance_order, insurance_orderId>;
  hasDistrict_id_insured_insurance_order!: Sequelize.HasManyHasAssociationMixin<insurance_order, insurance_orderId>;
  hasDistrict_id_insured_insurance_orders!: Sequelize.HasManyHasAssociationsMixin<insurance_order, insurance_orderId>;
  countDistrict_id_insured_insurance_orders!: Sequelize.HasManyCountAssociationsMixin;
  // mas_address_district belongsTo mas_address_province via provicne_id
  provicne!: mas_address_province;
  getProvicne!: Sequelize.BelongsToGetAssociationMixin<mas_address_province>;
  setProvicne!: Sequelize.BelongsToSetAssociationMixin<mas_address_province, mas_address_provinceId>;
  createProvicne!: Sequelize.BelongsToCreateAssociationMixin<mas_address_province>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_district {
    mas_address_district.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    provicne_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "รหัสจังหวัด",
      references: {
        model: 'mas_address_province',
        key: 'id'
      }
    },
    district_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้ออำเภอ\/เขต ภาษาอังกฤษ"
    },
    district_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้ออำเภอ\/เขต ภาษาไทย"
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
    tableName: 'mas_address_district',
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
        name: "code_falcon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_falcon" },
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
        name: "provicne_id",
        using: "BTREE",
        fields: [
          { name: "provicne_id" },
        ]
      },
    ]
  });
  return mas_address_district;
  }
}
