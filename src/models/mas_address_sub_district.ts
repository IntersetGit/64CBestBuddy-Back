import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_address_sub_districtAttributes {
  id: number;
  sub_district_id: string;
  district_id: string;
  sub_district_name_en: string;
  sub_district_name_th: string;
  postal_code: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_address_sub_districtPk = "id";
export type mas_address_sub_districtId = mas_address_sub_district[mas_address_sub_districtPk];
export type mas_address_sub_districtCreationAttributes = Optional<mas_address_sub_districtAttributes, mas_address_sub_districtPk>;

export class mas_address_sub_district extends Model<mas_address_sub_districtAttributes, mas_address_sub_districtCreationAttributes> implements mas_address_sub_districtAttributes {
  id!: number;
  sub_district_id!: string;
  district_id!: string;
  sub_district_name_en!: string;
  sub_district_name_th!: string;
  postal_code!: string;
  code_cigna?: string;
  code_falcon?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_sub_district {
    mas_address_sub_district.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_district_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "รหัสหลักตำบล"
    },
    district_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ไอดี อำเภอ\/เขต"
    },
    sub_district_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อตาราง ตำบล\/แขวง ภาษาอังกฤษ"
    },
    sub_district_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อตาราง ตำบล\/แขวง ภาษาไทย"
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "รหัสไปรษณีย์"
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
    tableName: 'mas_address_sub_district',
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
  return mas_address_sub_district;
  }
}
