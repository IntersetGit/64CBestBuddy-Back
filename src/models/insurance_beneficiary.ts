import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_applicant, insurance_applicantId } from './insurance_applicant';
import type { mas_payer_relation, mas_payer_relationId } from './mas_payer_relation';
import type { mas_title_name, mas_title_nameId } from './mas_title_name';

export interface insurance_beneficiaryAttributes {
  id: string;
  mas_title_name_id: number;
  mas_payer_relation_id?: string;
  insurance_applicant_id?: string;
  first_name?: string;
  last_name?: string;
}

export type insurance_beneficiaryPk = "id";
export type insurance_beneficiaryId = insurance_beneficiary[insurance_beneficiaryPk];
export type insurance_beneficiaryCreationAttributes = Optional<insurance_beneficiaryAttributes, insurance_beneficiaryPk>;

export class insurance_beneficiary extends Model<insurance_beneficiaryAttributes, insurance_beneficiaryCreationAttributes> implements insurance_beneficiaryAttributes {
  id!: string;
  mas_title_name_id!: number;
  mas_payer_relation_id?: string;
  insurance_applicant_id?: string;
  first_name?: string;
  last_name?: string;

  // insurance_beneficiary belongsTo insurance_applicant via insurance_applicant_id
  insurance_applicant!: insurance_applicant;
  getInsurance_applicant!: Sequelize.BelongsToGetAssociationMixin<insurance_applicant>;
  setInsurance_applicant!: Sequelize.BelongsToSetAssociationMixin<insurance_applicant, insurance_applicantId>;
  createInsurance_applicant!: Sequelize.BelongsToCreateAssociationMixin<insurance_applicant>;
  // insurance_beneficiary belongsTo mas_payer_relation via mas_payer_relation_id
  mas_payer_relation!: mas_payer_relation;
  getMas_payer_relation!: Sequelize.BelongsToGetAssociationMixin<mas_payer_relation>;
  setMas_payer_relation!: Sequelize.BelongsToSetAssociationMixin<mas_payer_relation, mas_payer_relationId>;
  createMas_payer_relation!: Sequelize.BelongsToCreateAssociationMixin<mas_payer_relation>;
  // insurance_beneficiary belongsTo mas_title_name via mas_title_name_id
  mas_title_name!: mas_title_name;
  getMas_title_name!: Sequelize.BelongsToGetAssociationMixin<mas_title_name>;
  setMas_title_name!: Sequelize.BelongsToSetAssociationMixin<mas_title_name, mas_title_nameId>;
  createMas_title_name!: Sequelize.BelongsToCreateAssociationMixin<mas_title_name>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_beneficiary {
    insurance_beneficiary.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักผู้รับผลประโยนช์"
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
    mas_payer_relation_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสความสัมพันธ์กับผู้ขอเอาประกัน",
      references: {
        model: 'mas_payer_relation',
        key: 'id'
      }
    },
    insurance_applicant_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสผู้ขอประกัน",
      references: {
        model: 'insurance_applicant',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อจริงผู้รับผลประโยชน์"
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "นามสกุลผู้รับผลประโยชน์"
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
        name: "mas_title_name_id",
        using: "BTREE",
        fields: [
          { name: "mas_title_name_id" },
        ]
      },
      {
        name: "mas_payer_relation_id",
        using: "BTREE",
        fields: [
          { name: "mas_payer_relation_id" },
        ]
      },
      {
        name: "insurance_applicant_id",
        using: "BTREE",
        fields: [
          { name: "insurance_applicant_id" },
        ]
      },
    ]
  });
  return insurance_beneficiary;
  }
}
