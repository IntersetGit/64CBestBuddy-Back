import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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
