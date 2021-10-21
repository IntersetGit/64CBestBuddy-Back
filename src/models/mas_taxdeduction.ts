import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_taxdeductionAttributes {
  id: number;
  name: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_taxdeductionPk = "id";
export type mas_taxdeductionId = mas_taxdeduction[mas_taxdeductionPk];
export type mas_taxdeductionOptionalAttributes = "id" | "code_cigna" | "code_falcon";
export type mas_taxdeductionCreationAttributes = Optional<mas_taxdeductionAttributes, mas_taxdeductionOptionalAttributes>;

export class mas_taxdeduction extends Model<mas_taxdeductionAttributes, mas_taxdeductionCreationAttributes> implements mas_taxdeductionAttributes {
  id!: number;
  name!: string;
  code_cigna?: string;
  code_falcon?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_taxdeduction {
    mas_taxdeduction.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "ชื่อ"
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
    tableName: 'mas_taxdeduction',
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
  return mas_taxdeduction;
  }
}
