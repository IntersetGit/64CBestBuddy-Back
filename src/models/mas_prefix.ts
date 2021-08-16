import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_beneficiary, insurance_beneficiaryId } from './insurance_beneficiary';
import type { insurance_order, insurance_orderId } from './insurance_order';
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

  // mas_prefix hasMany insurance_beneficiary via prefix_id
  insurance_beneficiaries!: insurance_beneficiary[];
  getInsurance_beneficiaries!: Sequelize.HasManyGetAssociationsMixin<insurance_beneficiary>;
  setInsurance_beneficiaries!: Sequelize.HasManySetAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  addInsurance_beneficiary!: Sequelize.HasManyAddAssociationMixin<insurance_beneficiary, insurance_beneficiaryId>;
  addInsurance_beneficiaries!: Sequelize.HasManyAddAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  createInsurance_beneficiary!: Sequelize.HasManyCreateAssociationMixin<insurance_beneficiary>;
  removeInsurance_beneficiary!: Sequelize.HasManyRemoveAssociationMixin<insurance_beneficiary, insurance_beneficiaryId>;
  removeInsurance_beneficiaries!: Sequelize.HasManyRemoveAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  hasInsurance_beneficiary!: Sequelize.HasManyHasAssociationMixin<insurance_beneficiary, insurance_beneficiaryId>;
  hasInsurance_beneficiaries!: Sequelize.HasManyHasAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  countInsurance_beneficiaries!: Sequelize.HasManyCountAssociationsMixin;
  // mas_prefix hasMany insurance_order via prefix_id
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
  // mas_prefix hasMany insurance_order via prefix_id_insured
  prefix_id_insured_insurance_orders!: insurance_order[];
  getPrefix_id_insured_insurance_orders!: Sequelize.HasManyGetAssociationsMixin<insurance_order>;
  setPrefix_id_insured_insurance_orders!: Sequelize.HasManySetAssociationsMixin<insurance_order, insurance_orderId>;
  addPrefix_id_insured_insurance_order!: Sequelize.HasManyAddAssociationMixin<insurance_order, insurance_orderId>;
  addPrefix_id_insured_insurance_orders!: Sequelize.HasManyAddAssociationsMixin<insurance_order, insurance_orderId>;
  createPrefix_id_insured_insurance_order!: Sequelize.HasManyCreateAssociationMixin<insurance_order>;
  removePrefix_id_insured_insurance_order!: Sequelize.HasManyRemoveAssociationMixin<insurance_order, insurance_orderId>;
  removePrefix_id_insured_insurance_orders!: Sequelize.HasManyRemoveAssociationsMixin<insurance_order, insurance_orderId>;
  hasPrefix_id_insured_insurance_order!: Sequelize.HasManyHasAssociationMixin<insurance_order, insurance_orderId>;
  hasPrefix_id_insured_insurance_orders!: Sequelize.HasManyHasAssociationsMixin<insurance_order, insurance_orderId>;
  countPrefix_id_insured_insurance_orders!: Sequelize.HasManyCountAssociationsMixin;
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
