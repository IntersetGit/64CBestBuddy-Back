import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_occupationAttributes {
  id: number;
  name: string;
  risk_class_falcon?: string;
  original_text_falcon?: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_occupationPk = "id";
export type mas_occupationId = mas_occupation[mas_occupationPk];
export type mas_occupationCreationAttributes = Optional<mas_occupationAttributes, mas_occupationPk>;

export class mas_occupation extends Model<mas_occupationAttributes, mas_occupationCreationAttributes> implements mas_occupationAttributes {
  id!: number;
  name!: string;
  risk_class_falcon?: string;
  original_text_falcon?: string;
  code_cigna?: string;
  code_falcon?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_occupation {
    mas_occupation.init({
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
    risk_class_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ระดับความเสี่ยง ของ falcon"
    },
    original_text_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ข้อความต้นฉบับ ของ falcon"
    },
    code_cigna: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ cigna",
      unique: "code_cigna"
    },
    code_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ falcon",
      unique: "code_falcon"
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
      {
        name: "code_cigna",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_cigna" },
        ]
      },
      {
        name: "code_falcon",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_falcon" },
        ]
      },
    ]
  });
  return mas_occupation;
  }
}
