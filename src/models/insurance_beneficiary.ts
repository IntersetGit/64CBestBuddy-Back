import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_order, insurance_orderId } from './insurance_order';
import type { mas_beneficiary_relationship, mas_beneficiary_relationshipId } from './mas_beneficiary_relationship';
import type { mas_prefix, mas_prefixId } from './mas_prefix';

export interface insurance_beneficiaryAttributes {
  id: string;
  insurance_order_id: string;
  prefix_id: number;
  first_name: string;
  last_name: string;
  beneficiary_id: number;
  ratio: number;
  sort: number;
}

export type insurance_beneficiaryPk = "id";
export type insurance_beneficiaryId = insurance_beneficiary[insurance_beneficiaryPk];
export type insurance_beneficiaryOptionalAttributes = "id";
export type insurance_beneficiaryCreationAttributes = Optional<insurance_beneficiaryAttributes, insurance_beneficiaryOptionalAttributes>;

export class insurance_beneficiary extends Model<insurance_beneficiaryAttributes, insurance_beneficiaryCreationAttributes> implements insurance_beneficiaryAttributes {
  id!: string;
  insurance_order_id!: string;
  prefix_id!: number;
  first_name!: string;
  last_name!: string;
  beneficiary_id!: number;
  ratio!: number;
  sort!: number;

  // insurance_beneficiary belongsTo insurance_order via insurance_order_id
  insurance_order!: insurance_order;
  getInsurance_order!: Sequelize.BelongsToGetAssociationMixin<insurance_order>;
  setInsurance_order!: Sequelize.BelongsToSetAssociationMixin<insurance_order, insurance_orderId>;
  createInsurance_order!: Sequelize.BelongsToCreateAssociationMixin<insurance_order>;
  // insurance_beneficiary belongsTo mas_beneficiary_relationship via beneficiary_id
  beneficiary!: mas_beneficiary_relationship;
  getBeneficiary!: Sequelize.BelongsToGetAssociationMixin<mas_beneficiary_relationship>;
  setBeneficiary!: Sequelize.BelongsToSetAssociationMixin<mas_beneficiary_relationship, mas_beneficiary_relationshipId>;
  createBeneficiary!: Sequelize.BelongsToCreateAssociationMixin<mas_beneficiary_relationship>;
  // insurance_beneficiary belongsTo mas_prefix via prefix_id
  prefix!: mas_prefix;
  getPrefix!: Sequelize.BelongsToGetAssociationMixin<mas_prefix>;
  setPrefix!: Sequelize.BelongsToSetAssociationMixin<mas_prefix, mas_prefixId>;
  createPrefix!: Sequelize.BelongsToCreateAssociationMixin<mas_prefix>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_beneficiary {
    insurance_beneficiary.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    insurance_order_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'insurance_order',
        key: 'id'
      }
    },
    prefix_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "คำนำหน้า",
      references: {
        model: 'mas_prefix',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อ"
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "นามสกุล"
    },
    beneficiary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ความสัมพันธ์",
      references: {
        model: 'mas_beneficiary_relationship',
        key: 'id'
      }
    },
    ratio: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false,
      comment: "อัตราส่วน"
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ลำดับ"
    }
  }, {
    sequelize,
    tableName: 'insurance_beneficiary',
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
        name: "insurance_order_id",
        using: "BTREE",
        fields: [
          { name: "insurance_order_id" },
        ]
      },
      {
        name: "prefix_id",
        using: "BTREE",
        fields: [
          { name: "prefix_id" },
        ]
      },
      {
        name: "beneficiary_id",
        using: "BTREE",
        fields: [
          { name: "beneficiary_id" },
        ]
      },
    ]
  });
  return insurance_beneficiary;
  }
}
