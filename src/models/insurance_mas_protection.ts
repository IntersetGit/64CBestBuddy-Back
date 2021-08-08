import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';
import type { match_protection_plan, match_protection_planId } from './match_protection_plan';

export interface insurance_mas_protectionAttributes {
  id: string;
  insurance_id?: string;
  details?: string;
  sort?: number;
}

export type insurance_mas_protectionPk = "id";
export type insurance_mas_protectionId = insurance_mas_protection[insurance_mas_protectionPk];
export type insurance_mas_protectionCreationAttributes = Optional<insurance_mas_protectionAttributes, insurance_mas_protectionPk>;

export class insurance_mas_protection extends Model<insurance_mas_protectionAttributes, insurance_mas_protectionCreationAttributes> implements insurance_mas_protectionAttributes {
  id!: string;
  insurance_id?: string;
  details?: string;
  sort?: number;

  // insurance_mas_protection belongsTo insurance via insurance_id
  insurance!: insurance;
  getInsurance!: Sequelize.BelongsToGetAssociationMixin<insurance>;
  setInsurance!: Sequelize.BelongsToSetAssociationMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.BelongsToCreateAssociationMixin<insurance>;
  // insurance_mas_protection hasMany match_protection_plan via mas_protection_id
  match_protection_plans!: match_protection_plan[];
  getMatch_protection_plans!: Sequelize.HasManyGetAssociationsMixin<match_protection_plan>;
  setMatch_protection_plans!: Sequelize.HasManySetAssociationsMixin<match_protection_plan, match_protection_planId>;
  addMatch_protection_plan!: Sequelize.HasManyAddAssociationMixin<match_protection_plan, match_protection_planId>;
  addMatch_protection_plans!: Sequelize.HasManyAddAssociationsMixin<match_protection_plan, match_protection_planId>;
  createMatch_protection_plan!: Sequelize.HasManyCreateAssociationMixin<match_protection_plan>;
  removeMatch_protection_plan!: Sequelize.HasManyRemoveAssociationMixin<match_protection_plan, match_protection_planId>;
  removeMatch_protection_plans!: Sequelize.HasManyRemoveAssociationsMixin<match_protection_plan, match_protection_planId>;
  hasMatch_protection_plan!: Sequelize.HasManyHasAssociationMixin<match_protection_plan, match_protection_planId>;
  hasMatch_protection_plans!: Sequelize.HasManyHasAssociationsMixin<match_protection_plan, match_protection_planId>;
  countMatch_protection_plans!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_mas_protection {
    insurance_mas_protection.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักแผนประกัน"
    },
    insurance_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสประกัน",
      references: {
        model: 'insurance',
        key: 'id'
      }
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "รายละเอียดความคุ้มครอง"
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เรียงลำดับ"
    }
  }, {
    sequelize,
    tableName: 'insurance_mas_protection',
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
        name: "insurance_mas_protection_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "insurance_id" },
        ]
      },
    ]
  });
  return insurance_mas_protection;
  }
}
