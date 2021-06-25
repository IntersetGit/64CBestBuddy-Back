import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { mas_district, mas_districtId } from './mas_district';

export interface mas_sub_districtAttributes {
  id: string;
  name: string;
  district_id: string;
  post_code: number;
}

export type mas_sub_districtPk = "id";
export type mas_sub_districtId = mas_sub_district[mas_sub_districtPk];
export type mas_sub_districtCreationAttributes = Optional<mas_sub_districtAttributes, mas_sub_districtPk>;

export class mas_sub_district extends Model<mas_sub_districtAttributes, mas_sub_districtCreationAttributes> implements mas_sub_districtAttributes {
  id!: string;
  name!: string;
  district_id!: string;
  post_code!: number;

  // mas_sub_district belongsTo mas_district via district_id
  district!: mas_district;
  getDistrict!: Sequelize.BelongsToGetAssociationMixin<mas_district>;
  setDistrict!: Sequelize.BelongsToSetAssociationMixin<mas_district, mas_districtId>;
  createDistrict!: Sequelize.BelongsToCreateAssociationMixin<mas_district>;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_sub_district {
    mas_sub_district.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    district_id: {
      type: DataTypes.STRING(11),
      allowNull: false,
      references: {
        model: 'mas_district',
        key: 'id'
      }
    },
    post_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_sub_district',
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
  return mas_sub_district;
  }
}
