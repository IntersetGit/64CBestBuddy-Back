import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';

export interface mas_insurance_typeAttributes {
  id: string;
  name?: string;
  isuse?: number;
  sort?: number;
}

export type mas_insurance_typePk = "id";
export type mas_insurance_typeId = mas_insurance_type[mas_insurance_typePk];
export type mas_insurance_typeOptionalAttributes = "id" | "name" | "isuse" | "sort";
export type mas_insurance_typeCreationAttributes = Optional<mas_insurance_typeAttributes, mas_insurance_typeOptionalAttributes>;

export class mas_insurance_type extends Model<mas_insurance_typeAttributes, mas_insurance_typeCreationAttributes> implements mas_insurance_typeAttributes {
  id!: string;
  name?: string;
  isuse?: number;
  sort?: number;

  // mas_insurance_type hasMany insurance via mas_insurance_type_id
  insurances!: insurance[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<insurance>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<insurance, insuranceId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<insurance, insuranceId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<insurance>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<insurance, insuranceId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<insurance, insuranceId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<insurance, insuranceId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<insurance, insuranceId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mas_insurance_type {
    mas_insurance_type.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสหลักประเภทประกัน"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อประเภทประกัน"
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "การใช้งานข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    },
    sort: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "เรียงลำดับ"
    }
  }, {
    sequelize,
    tableName: 'mas_insurance_type',
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
  return mas_insurance_type;
  }
}
