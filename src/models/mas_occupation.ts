import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_occupationAttributes {
  id: number;
  occupation_name: string;
}

export type mas_occupationPk = "id";
export type mas_occupationId = mas_occupation[mas_occupationPk];
export type mas_occupationCreationAttributes = Optional<mas_occupationAttributes, mas_occupationPk>;

export class mas_occupation extends Model<mas_occupationAttributes, mas_occupationCreationAttributes> implements mas_occupationAttributes {
  id!: number;
  occupation_name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_occupation {
    mas_occupation.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    occupation_name: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    ]
  });
  return mas_occupation;
  }
}
