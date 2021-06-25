import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_beneficiary_relationAttributes {
  id: number;
  codename: string;
}

export type mas_beneficiary_relationPk = "id";
export type mas_beneficiary_relationId = mas_beneficiary_relation[mas_beneficiary_relationPk];
export type mas_beneficiary_relationCreationAttributes = Optional<mas_beneficiary_relationAttributes, mas_beneficiary_relationPk>;

export class mas_beneficiary_relation extends Model<mas_beneficiary_relationAttributes, mas_beneficiary_relationCreationAttributes> implements mas_beneficiary_relationAttributes {
  id!: number;
  codename!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_beneficiary_relation {
    mas_beneficiary_relation.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_beneficiary_relation',
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
  return mas_beneficiary_relation;
  }
}
