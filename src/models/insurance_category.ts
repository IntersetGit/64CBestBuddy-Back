import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';

export interface insurance_categoryAttributes {
  id: string;
  name?: string;
  isuse?: number;
}

export type insurance_categoryPk = "id";
export type insurance_categoryId = insurance_category[insurance_categoryPk];
export type insurance_categoryCreationAttributes = Optional<insurance_categoryAttributes, insurance_categoryPk>;

export class insurance_category extends Model<insurance_categoryAttributes, insurance_categoryCreationAttributes> implements insurance_categoryAttributes {
  id!: string;
  name?: string;
  isuse?: number;

  // insurance_category hasMany insurance via insurance_category_id
  insurances!: insurance[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<insurance>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<insurance, insuranceId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<insurance, insuranceId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<insurance>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<insurance, insuranceId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<insurance, insuranceId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<insurance, insuranceId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<insurance, insuranceId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_category {
    insurance_category.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insurance_category',
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
  return insurance_category;
  }
}
