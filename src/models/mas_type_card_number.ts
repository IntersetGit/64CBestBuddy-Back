import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_order, insurance_orderId } from './insurance_order';

export interface mas_type_card_numberAttributes {
  id: number;
  name: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_type_card_numberPk = "id";
export type mas_type_card_numberId = mas_type_card_number[mas_type_card_numberPk];
export type mas_type_card_numberCreationAttributes = Optional<mas_type_card_numberAttributes, mas_type_card_numberPk>;

export class mas_type_card_number extends Model<mas_type_card_numberAttributes, mas_type_card_numberCreationAttributes> implements mas_type_card_numberAttributes {
  id!: number;
  name!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_type_card_number hasMany insurance_order via type_card_number_id
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
  // mas_type_card_number hasMany insurance_order via type_card_number_id_insured
  type_card_number_id_insured_insurance_orders!: insurance_order[];
  getType_card_number_id_insured_insurance_orders!: Sequelize.HasManyGetAssociationsMixin<insurance_order>;
  setType_card_number_id_insured_insurance_orders!: Sequelize.HasManySetAssociationsMixin<insurance_order, insurance_orderId>;
  addType_card_number_id_insured_insurance_order!: Sequelize.HasManyAddAssociationMixin<insurance_order, insurance_orderId>;
  addType_card_number_id_insured_insurance_orders!: Sequelize.HasManyAddAssociationsMixin<insurance_order, insurance_orderId>;
  createType_card_number_id_insured_insurance_order!: Sequelize.HasManyCreateAssociationMixin<insurance_order>;
  removeType_card_number_id_insured_insurance_order!: Sequelize.HasManyRemoveAssociationMixin<insurance_order, insurance_orderId>;
  removeType_card_number_id_insured_insurance_orders!: Sequelize.HasManyRemoveAssociationsMixin<insurance_order, insurance_orderId>;
  hasType_card_number_id_insured_insurance_order!: Sequelize.HasManyHasAssociationMixin<insurance_order, insurance_orderId>;
  hasType_card_number_id_insured_insurance_orders!: Sequelize.HasManyHasAssociationsMixin<insurance_order, insurance_orderId>;
  countType_card_number_id_insured_insurance_orders!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_type_card_number {
    mas_type_card_number.init({
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
      comment: "รหัส ของ falcon"
    }
  }, {
    sequelize,
    tableName: 'mas_type_card_number',
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
  return mas_type_card_number;
  }
}
