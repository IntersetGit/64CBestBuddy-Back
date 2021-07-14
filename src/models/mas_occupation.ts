import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_applicant, insurance_applicantId } from './insurance_applicant';

export interface mas_occupationAttributes {
  id: number;
  occupation_name: string;
}

export type mas_occupationPk = "id";
export type mas_occupationId = mas_occupation[mas_occupationPk];
export type mas_occupationCreationAttributes = Optional<mas_occupationAttributes, mas_occupationPk>;

export class mas_occupation extends Model<mas_occupationAttributes, mas_occupationCreationAttributes> implements mas_occupationAttributes {
  id!: number;
  occupation_name!: string;

  // mas_occupation hasMany insurance_applicant via mas_occupation_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_occupation {
    mas_occupation.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    occupation_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_occupation',
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
  return mas_occupation;
  }
}
