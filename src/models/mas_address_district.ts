import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_address_province, mas_address_provinceId } from './mas_address_province';

export interface mas_address_districtAttributes {
  id: number;
  district_id: string;
  provicne_id: string;
  district_name_en: string;
  district_name_th: string;
  code_cigna?: string;
  code_falcon?: string;
}

export type mas_address_districtPk = "id";
export type mas_address_districtId = mas_address_district[mas_address_districtPk];
export type mas_address_districtCreationAttributes = Optional<mas_address_districtAttributes, mas_address_districtPk>;

export class mas_address_district extends Model<mas_address_districtAttributes, mas_address_districtCreationAttributes> implements mas_address_districtAttributes {
  id!: number;
  district_id!: string;
  provicne_id!: string;
  district_name_en!: string;
  district_name_th!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_address_district belongsTo mas_address_province via provicne_id
  provicne!: mas_address_province;
  getProvicne!: Sequelize.BelongsToGetAssociationMixin<mas_address_province>;
  setProvicne!: Sequelize.BelongsToSetAssociationMixin<mas_address_province, mas_address_provinceId>;
  createProvicne!: Sequelize.BelongsToCreateAssociationMixin<mas_address_province>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_district {
    mas_address_district.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    district_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "รหัสหลักอำเภอ"
    },
    provicne_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "รหัสจังหวัด",
      references: {
        model: 'mas_address_province',
        key: 'provicne_code'
      }
    },
    district_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้ออำเภอ\/เขต ภาษาอังกฤษ"
    },
    district_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้ออำเภอ\/เขต ภาษาไทย"
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
    tableName: 'mas_address_district',
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
        name: "mas_address_district_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "provicne_id" },
        ]
      },
    ]
  });
  return mas_address_district;
  }
}
