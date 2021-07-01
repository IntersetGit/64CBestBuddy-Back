import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_mas_plan, insurance_mas_planId } from './insurance_mas_plan';
import type { insurance_mas_protection, insurance_mas_protectionId } from './insurance_mas_protection';

export interface match_protection_planAttributes {
  id: string;
  mas_plan_id?: string;
  mas_protection_id?: string;
  value?: string;
}

export type match_protection_planPk = "id";
export type match_protection_planId = match_protection_plan[match_protection_planPk];
export type match_protection_planCreationAttributes = Optional<match_protection_planAttributes, match_protection_planPk>;

export class match_protection_plan extends Model<match_protection_planAttributes, match_protection_planCreationAttributes> implements match_protection_planAttributes {
  id!: string;
  mas_plan_id?: string;
  mas_protection_id?: string;
  value?: string;

  // match_protection_plan belongsTo insurance_mas_plan via mas_plan_id
  mas_plan!: insurance_mas_plan;
  getMas_plan!: Sequelize.BelongsToGetAssociationMixin<insurance_mas_plan>;
  setMas_plan!: Sequelize.BelongsToSetAssociationMixin<insurance_mas_plan, insurance_mas_planId>;
  createMas_plan!: Sequelize.BelongsToCreateAssociationMixin<insurance_mas_plan>;
  // match_protection_plan belongsTo insurance_mas_protection via mas_protection_id
  mas_protection!: insurance_mas_protection;
  getMas_protection!: Sequelize.BelongsToGetAssociationMixin<insurance_mas_protection>;
  setMas_protection!: Sequelize.BelongsToSetAssociationMixin<insurance_mas_protection, insurance_mas_protectionId>;
  createMas_protection!: Sequelize.BelongsToCreateAssociationMixin<insurance_mas_protection>;

  static initModel(sequelize: Sequelize.Sequelize): typeof match_protection_plan {
    match_protection_plan.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักราคาความคุ้มครอง"
    },
    mas_plan_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสแผนประกัน",
      references: {
        model: 'insurance_mas_plan',
        key: 'id'
      }
    },
    mas_protection_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสความคุ้มครอง",
      references: {
        model: 'insurance_mas_protection',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ราคาความคุ้มครอง"
    }
  }, {
    sequelize,
    tableName: 'match_protection_plan',
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
        name: "mas_plan_id",
        using: "BTREE",
        fields: [
          { name: "mas_plan_id" },
        ]
      },
      {
        name: "mas_protection_id",
        using: "BTREE",
        fields: [
          { name: "mas_protection_id" },
        ]
      },
    ]
  });
  return match_protection_plan;
  }
}
