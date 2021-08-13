import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface mas_address_districtAttributes {
  id: number;
  district_id?: number;
  provicne_id: string;
  district_name_en: string;
  district_name_th: string;
  code_cigna: string;
  code_falcon: string;
}

export type mas_address_districtPk = "id";
export type mas_address_districtId = mas_address_district[mas_address_districtPk];
export type mas_address_districtCreationAttributes = Optional<mas_address_districtAttributes, mas_address_districtPk>;

export class mas_address_district extends Model<mas_address_districtAttributes, mas_address_districtCreationAttributes> implements mas_address_districtAttributes {
  id!: number;
  district_id?: number;
  provicne_id!: string;
  district_name_en!: string;
  district_name_th!: string;
  code_cigna!: string;
  code_falcon!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_district {
    mas_address_district.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "รหัสหลักอำเภอ"
    },
    provicne_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "รหัสจังหวัด"
    },
    district_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้ออำเภอ\/เขต ภาษาอังกฤษ\t"
    },
    district_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้ออำเภอ\/เขต ภาษาไทย\t"
    },
    code_cigna: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "รหัส ของ cigna"
    },
    code_falcon: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
        name: "mas_address_province_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "provicne_id" },
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
  return mas_address_district;
  }
}
