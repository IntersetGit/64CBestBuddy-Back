import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_type_card_numberAttributes {
  id: number;
  name: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_type_card_numberPk = "id";
export type mas_type_card_numberId = mas_type_card_number[mas_type_card_numberPk];
export type mas_type_card_numberCreationAttributes = Optional<mas_type_card_numberAttributes, mas_type_card_numberPk>;

export class mas_type_card_number extends Model<mas_type_card_numberAttributes, mas_type_card_numberCreationAttributes> implements mas_type_card_numberAttributes {
  id!: number;
  name!: string;
  code_cigna?: string;
  code_falcon?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_type_card_number {
    mas_type_card_number.init({
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
      comment: "รหัส ของ falcon"
    }
  }, {
    sequelize,
    tableName: 'mas_type_card_number',
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
  return mas_type_card_number;
  }
}
