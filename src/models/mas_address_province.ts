import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_address_provinceAttributes {
  id: number;
  add_id?: string;
  provicne_code?: string;
  provicne_name_en: string;
  provicne_name_th: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_address_provincePk = "id";
export type mas_address_provinceId = mas_address_province[mas_address_provincePk];
export type mas_address_provinceCreationAttributes = Optional<mas_address_provinceAttributes, mas_address_provincePk>;

export class mas_address_province extends Model<mas_address_provinceAttributes, mas_address_provinceCreationAttributes> implements mas_address_provinceAttributes {
  id!: number;
  add_id?: string;
  provicne_code?: string;
  provicne_name_en!: string;
  provicne_name_th!: string;
  code_cigna?: string;
  code_falcon?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_province {
    mas_address_province.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    add_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสหลักจังหวัด"
    },
    provicne_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "โค้ดจังหวัด"
    },
    provicne_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อจังหวัด ภาษาอังกฤษ"
    },
    provicne_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อจังหวัด ภาษาไทย"
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
    tableName: 'mas_address_province',
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
        name: "add_id",
        using: "BTREE",
        fields: [
          { name: "add_id" },
        ]
      },
    ]
  });
  return mas_address_province;
  }
}
