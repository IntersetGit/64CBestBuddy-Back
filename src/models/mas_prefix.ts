import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_prefixAttributes {
  id: number;
  prefix_id?: string;
  name: string;
  code_cigna?: string;
  code_falcon?: string;
  isuse?: number;
}

export type mas_prefixPk = "id";
export type mas_prefixId = mas_prefix[mas_prefixPk];
export type mas_prefixCreationAttributes = Optional<mas_prefixAttributes, mas_prefixPk>;

export class mas_prefix extends Model<mas_prefixAttributes, mas_prefixCreationAttributes> implements mas_prefixAttributes {
  id!: number;
  prefix_id?: string;
  name!: string;
  code_cigna?: string;
  code_falcon?: string;
  isuse?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_prefix {
    mas_prefix.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prefix_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code_cigna: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ cigna"
    },
    code_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ falcon"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_prefix',
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
  return mas_prefix;
  }
}
