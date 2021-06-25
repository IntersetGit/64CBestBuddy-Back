import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_payer_relationAttributes {
  id: string;
  codename: string;
}

export type mas_payer_relationPk = "id";
export type mas_payer_relationId = mas_payer_relation[mas_payer_relationPk];
export type mas_payer_relationCreationAttributes = Optional<mas_payer_relationAttributes, mas_payer_relationPk>;

export class mas_payer_relation extends Model<mas_payer_relationAttributes, mas_payer_relationCreationAttributes> implements mas_payer_relationAttributes {
  id!: string;
  codename!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_payer_relation {
    mas_payer_relation.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_payer_relation',
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
  return mas_payer_relation;
  }
}
