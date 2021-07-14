import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_applicant, insurance_applicantId } from './insurance_applicant';
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

  // mas_province hasMany insurance_applicant via mas_province_id
  insurance_applicants!: insurance_applicant[];
  getInsurance_applicants!: Sequelize.HasManyGetAssociationsMixin<insurance_applicant>;
  setInsurance_applicants!: Sequelize.HasManySetAssociationsMixin<insurance_applicant, insurance_applicantId>;
  addInsurance_applicant!: Sequelize.HasManyAddAssociationMixin<insurance_applicant, insurance_applicantId>;
  addInsurance_applicants!: Sequelize.HasManyAddAssociationsMixin<insurance_applicant, insurance_applicantId>;
  createInsurance_applicant!: Sequelize.HasManyCreateAssociationMixin<insurance_applicant>;
  removeInsurance_applicant!: Sequelize.HasManyRemoveAssociationMixin<insurance_applicant, insurance_applicantId>;
  removeInsurance_applicants!: Sequelize.HasManyRemoveAssociationsMixin<insurance_applicant, insurance_applicantId>;
  hasInsurance_applicant!: Sequelize.HasManyHasAssociationMixin<insurance_applicant, insurance_applicantId>;
  hasInsurance_applicants!: Sequelize.HasManyHasAssociationsMixin<insurance_applicant, insurance_applicantId>;
  countInsurance_applicants!: Sequelize.HasManyCountAssociationsMixin;
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
