import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_province, mas_provinceId } from './mas_province';
import type { mas_sub_district, mas_sub_districtId } from './mas_sub_district';

export interface mas_districtAttributes {
  id: string;
  name: string;
  province_id: string;
}

export type mas_districtPk = "id";
export type mas_districtId = mas_district[mas_districtPk];
export type mas_districtCreationAttributes = Optional<mas_districtAttributes, mas_districtPk>;

export class mas_district extends Model<mas_districtAttributes, mas_districtCreationAttributes> implements mas_districtAttributes {
  id!: string;
  name!: string;
  province_id!: string;

  // mas_district hasMany mas_sub_district via district_id
  mas_sub_districts!: mas_sub_district[];
  getMas_sub_districts!: Sequelize.HasManyGetAssociationsMixin<mas_sub_district>;
  setMas_sub_districts!: Sequelize.HasManySetAssociationsMixin<mas_sub_district, mas_sub_districtId>;
  addMas_sub_district!: Sequelize.HasManyAddAssociationMixin<mas_sub_district, mas_sub_districtId>;
  addMas_sub_districts!: Sequelize.HasManyAddAssociationsMixin<mas_sub_district, mas_sub_districtId>;
  createMas_sub_district!: Sequelize.HasManyCreateAssociationMixin<mas_sub_district>;
  removeMas_sub_district!: Sequelize.HasManyRemoveAssociationMixin<mas_sub_district, mas_sub_districtId>;
  removeMas_sub_districts!: Sequelize.HasManyRemoveAssociationsMixin<mas_sub_district, mas_sub_districtId>;
  hasMas_sub_district!: Sequelize.HasManyHasAssociationMixin<mas_sub_district, mas_sub_districtId>;
  hasMas_sub_districts!: Sequelize.HasManyHasAssociationsMixin<mas_sub_district, mas_sub_districtId>;
  countMas_sub_districts!: Sequelize.HasManyCountAssociationsMixin;
  // mas_district belongsTo mas_province via province_id
  province!: mas_province;
  getProvince!: Sequelize.BelongsToGetAssociationMixin<mas_province>;
  setProvince!: Sequelize.BelongsToSetAssociationMixin<mas_province, mas_provinceId>;
  createProvince!: Sequelize.BelongsToCreateAssociationMixin<mas_province>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_district {
    mas_district.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    province_id: {
      type: DataTypes.STRING(11),
      allowNull: false,
      references: {
        model: 'mas_province',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mas_district',
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
        name: "province_id",
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
    ]
  });
  return mas_district;
  }
}
