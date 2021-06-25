import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_marital_statusAttributes {
  id: number;
  codename: string;
}

export type mas_marital_statusPk = "id";
export type mas_marital_statusId = mas_marital_status[mas_marital_statusPk];
export type mas_marital_statusCreationAttributes = Optional<mas_marital_statusAttributes, mas_marital_statusPk>;

export class mas_marital_status extends Model<mas_marital_statusAttributes, mas_marital_statusCreationAttributes> implements mas_marital_statusAttributes {
  id!: number;
  codename!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_marital_status {
    mas_marital_status.init({
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
    tableName: 'mas_marital_status',
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
  return mas_marital_status;
  }
}
