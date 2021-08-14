import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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
