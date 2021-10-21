import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_order, insurance_orderId } from './insurance_order';

export interface mas_occupationAttributes {
  id: number;
  name: string;
  risk_class_falcon?: string;
  original_text_falcon?: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_occupationPk = "id";
export type mas_occupationId = mas_occupation[mas_occupationPk];
export type mas_occupationOptionalAttributes = "id" | "risk_class_falcon" | "original_text_falcon" | "code_cigna" | "code_falcon";
export type mas_occupationCreationAttributes = Optional<mas_occupationAttributes, mas_occupationOptionalAttributes>;

export class mas_occupation extends Model<mas_occupationAttributes, mas_occupationCreationAttributes> implements mas_occupationAttributes {
  id!: number;
  name!: string;
  risk_class_falcon?: string;
  original_text_falcon?: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_occupation hasMany insurance_order via occupation_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_occupation {
    mas_occupation.init({
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
    risk_class_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ระดับความเสี่ยง ของ falcon"
    },
    original_text_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ข้อความต้นฉบับ ของ falcon"
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
    tableName: 'mas_occupation',
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
  return mas_occupation;
  }
}
