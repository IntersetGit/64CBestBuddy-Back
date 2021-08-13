import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_address_district, mas_address_districtId } from './mas_address_district';

export interface mas_address_sub_districtAttributes {
  id: number;
  district_id: number;
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
  district_id!: number;
  sub_district_name_en!: string;
  sub_district_name_th!: string;
  postal_code!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_address_sub_district belongsTo mas_address_district via district_id
  district!: mas_address_district;
  getDistrict!: Sequelize.BelongsToGetAssociationMixin<mas_address_district>;
  setDistrict!: Sequelize.BelongsToSetAssociationMixin<mas_address_district, mas_address_districtId>;
  createDistrict!: Sequelize.BelongsToCreateAssociationMixin<mas_address_district>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_sub_district {
    mas_address_sub_district.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ไอดี อำเภอ\/เขต",
      references: {
        model: 'mas_address_district',
        key: 'id'
      }
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
      {
        name: "district_id",
        using: "BTREE",
        fields: [
          { name: "district_id" },
        ]
      },
    ]
  });
  return mas_address_sub_district;
  }
}
