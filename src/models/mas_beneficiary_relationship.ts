import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_beneficiary, insurance_beneficiaryId } from './insurance_beneficiary';
import type { insurance_order, insurance_orderId } from './insurance_order';

export interface mas_beneficiary_relationshipAttributes {
  id: number;
  name: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_beneficiary_relationshipPk = "id";
export type mas_beneficiary_relationshipId = mas_beneficiary_relationship[mas_beneficiary_relationshipPk];
export type mas_beneficiary_relationshipCreationAttributes = Optional<mas_beneficiary_relationshipAttributes, mas_beneficiary_relationshipPk>;

export class mas_beneficiary_relationship extends Model<mas_beneficiary_relationshipAttributes, mas_beneficiary_relationshipCreationAttributes> implements mas_beneficiary_relationshipAttributes {
  id!: number;
  name!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_beneficiary_relationship hasMany insurance_beneficiary via beneficiary_id
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
  // mas_beneficiary_relationship hasMany insurance_order via beneficiary_id_insured
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

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_beneficiary_relationship {
    mas_beneficiary_relationship.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อ"
    },
    code_cigna: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ cigna"
    },
    code_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ falcon "
    }
  }, {
    sequelize,
    tableName: 'mas_beneficiary_relationship',
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
    ]
  });
  return mas_beneficiary_relationship;
  }
}
