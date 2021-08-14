import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_address_district, mas_address_districtId } from './mas_address_district';

export interface mas_address_provinceAttributes {
  id: number;
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
  provicne_name_en!: string;
  provicne_name_th!: string;
  code_cigna?: string;
  code_falcon?: string;

  // mas_address_province hasMany mas_address_district via provicne_id
  mas_address_districts!: mas_address_district[];
  getMas_address_districts!: Sequelize.HasManyGetAssociationsMixin<mas_address_district>;
  setMas_address_districts!: Sequelize.HasManySetAssociationsMixin<mas_address_district, mas_address_districtId>;
  addMas_address_district!: Sequelize.HasManyAddAssociationMixin<mas_address_district, mas_address_districtId>;
  addMas_address_districts!: Sequelize.HasManyAddAssociationsMixin<mas_address_district, mas_address_districtId>;
  createMas_address_district!: Sequelize.HasManyCreateAssociationMixin<mas_address_district>;
  removeMas_address_district!: Sequelize.HasManyRemoveAssociationMixin<mas_address_district, mas_address_districtId>;
  removeMas_address_districts!: Sequelize.HasManyRemoveAssociationsMixin<mas_address_district, mas_address_districtId>;
  hasMas_address_district!: Sequelize.HasManyHasAssociationMixin<mas_address_district, mas_address_districtId>;
  hasMas_address_districts!: Sequelize.HasManyHasAssociationsMixin<mas_address_district, mas_address_districtId>;
  countMas_address_districts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_address_province {
    mas_address_province.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    provicne_name_en: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื้อจังหวัด ภาษาอังกฤษ"
    },
    provicne_name_th: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "โค้ดจังหวัด"
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
  return mas_address_province;
  }
}