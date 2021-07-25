import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_applicant, insurance_applicantId } from './insurance_applicant';
import type { insurance_beneficiary, insurance_beneficiaryId } from './insurance_beneficiary';
import type { person, personId } from './person';

export interface mas_title_nameAttributes {
  id: number;
  title_name: string;
  isuse?: number;
}

export type mas_title_namePk = "id";
export type mas_title_nameId = mas_title_name[mas_title_namePk];
export type mas_title_nameCreationAttributes = Optional<mas_title_nameAttributes, mas_title_namePk>;

export class mas_title_name extends Model<mas_title_nameAttributes, mas_title_nameCreationAttributes> implements mas_title_nameAttributes {
  id!: number;
  title_name!: string;
  isuse?: number;

  // mas_title_name hasMany insurance_applicant via mas_title_name_id
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
  // mas_title_name hasMany insurance_beneficiary via mas_title_name_id
  insurance_beneficiaries!: insurance_beneficiary[];
  getInsurance_beneficiaries!: Sequelize.HasManyGetAssociationsMixin<insurance_beneficiary>;
  setInsurance_beneficiaries!: Sequelize.HasManySetAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  addInsurance_beneficiary!: Sequelize.HasManyAddAssociationMixin<insurance_beneficiary, insurance_beneficiaryId>;
  addInsurance_beneficiaries!: Sequelize.HasManyAddAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  createInsurance_beneficiary!: Sequelize.HasManyCreateAssociationMixin<insurance_beneficiary>;
  removeInsurance_beneficiary!: Sequelize.HasManyRemoveAssociationMixin<insurance_beneficiary, insurance_beneficiaryId>;
  removeInsurance_beneficiaries!: Sequelize.HasManyRemoveAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  hasInsurance_beneficiary!: Sequelize.HasManyHasAssociationMixin<insurance_beneficiary, insurance_beneficiaryId>;
  hasInsurance_beneficiaries!: Sequelize.HasManyHasAssociationsMixin<insurance_beneficiary, insurance_beneficiaryId>;
  countInsurance_beneficiaries!: Sequelize.HasManyCountAssociationsMixin;
  // mas_title_name hasMany person via mas_title_name_id
  people!: person[];
  getPeople!: Sequelize.HasManyGetAssociationsMixin<person>;
  setPeople!: Sequelize.HasManySetAssociationsMixin<person, personId>;
  addPerson!: Sequelize.HasManyAddAssociationMixin<person, personId>;
  addPeople!: Sequelize.HasManyAddAssociationsMixin<person, personId>;
  createPerson!: Sequelize.HasManyCreateAssociationMixin<person>;
  removePerson!: Sequelize.HasManyRemoveAssociationMixin<person, personId>;
  removePeople!: Sequelize.HasManyRemoveAssociationsMixin<person, personId>;
  hasPerson!: Sequelize.HasManyHasAssociationMixin<person, personId>;
  hasPeople!: Sequelize.HasManyHasAssociationsMixin<person, personId>;
  countPeople!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_title_name {
    mas_title_name.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะใช้งานข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    }
  }, {
    sequelize,
    tableName: 'mas_title_name',
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
  return mas_title_name;
  }
}
