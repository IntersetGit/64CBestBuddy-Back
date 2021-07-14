import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_applicant, insurance_applicantId } from './insurance_applicant';

export interface mas_marital_statusAttributes {
  id: number;
  codename: string;
}

export type mas_marital_statusPk = "id";
export type mas_marital_statusId = mas_marital_status[mas_marital_statusPk];
export type mas_marital_statusCreationAttributes = Optional<mas_marital_statusAttributes, mas_marital_statusPk>;

export class mas_marital_status extends Model<mas_marital_statusAttributes, mas_marital_statusCreationAttributes> implements mas_marital_statusAttributes {
  id!: number;
  codename!: string;

  // mas_marital_status hasMany insurance_applicant via mas_marital_status_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_marital_status {
    mas_marital_status.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_marital_status',
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
  return mas_marital_status;
  }
}
