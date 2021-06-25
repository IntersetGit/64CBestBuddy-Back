import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_title_nameAttributes {
  id: number;
  title_name: string;
}

export type mas_title_namePk = "id";
export type mas_title_nameId = mas_title_name[mas_title_namePk];
export type mas_title_nameCreationAttributes = Optional<mas_title_nameAttributes, mas_title_namePk>;

export class mas_title_name extends Model<mas_title_nameAttributes, mas_title_nameCreationAttributes> implements mas_title_nameAttributes {
  id!: number;
  title_name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_title_name {
    mas_title_name.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_title_name',
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
  return mas_title_name;
  }
}
