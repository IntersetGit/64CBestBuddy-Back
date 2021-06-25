import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_district, mas_districtId } from './mas_district';

export interface mas_provinceAttributes {
  id: string;
  name: string;
}

export type mas_provincePk = "id";
export type mas_provinceId = mas_province[mas_provincePk];
export type mas_provinceCreationAttributes = Optional<mas_provinceAttributes, mas_provincePk>;

export class mas_province extends Model<mas_provinceAttributes, mas_provinceCreationAttributes> implements mas_provinceAttributes {
  id!: string;
  name!: string;

  // mas_province hasMany mas_district via province_id
  mas_districts!: mas_district[];
  getMas_districts!: Sequelize.HasManyGetAssociationsMixin<mas_district>;
  setMas_districts!: Sequelize.HasManySetAssociationsMixin<mas_district, mas_districtId>;
  addMas_district!: Sequelize.HasManyAddAssociationMixin<mas_district, mas_districtId>;
  addMas_districts!: Sequelize.HasManyAddAssociationsMixin<mas_district, mas_districtId>;
  createMas_district!: Sequelize.HasManyCreateAssociationMixin<mas_district>;
  removeMas_district!: Sequelize.HasManyRemoveAssociationMixin<mas_district, mas_districtId>;
  removeMas_districts!: Sequelize.HasManyRemoveAssociationsMixin<mas_district, mas_districtId>;
  hasMas_district!: Sequelize.HasManyHasAssociationMixin<mas_district, mas_districtId>;
  hasMas_districts!: Sequelize.HasManyHasAssociationsMixin<mas_district, mas_districtId>;
  countMas_districts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_province {
    mas_province.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_province',
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
  return mas_province;
  }
}
