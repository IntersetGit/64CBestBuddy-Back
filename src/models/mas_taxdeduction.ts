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
export type mas_taxdeductionCreationAttributes = Optional<mas_taxdeductionAttributes, mas_taxdeductionPk>;

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
      comment: "รหัส ของ cigna"
    },
    code_falcon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัส ของ falcon"
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
    ]
  });
  return mas_taxdeduction;
  }
}
