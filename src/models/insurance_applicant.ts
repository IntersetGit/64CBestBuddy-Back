import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';
import type { insurance_beneficiary, insurance_beneficiaryId } from './insurance_beneficiary';
import type { mas_district, mas_districtId } from './mas_district';
import type { mas_marital_status, mas_marital_statusId } from './mas_marital_status';
import type { mas_occupation, mas_occupationId } from './mas_occupation';
import type { mas_payer_relation, mas_payer_relationId } from './mas_payer_relation';
import type { mas_province, mas_provinceId } from './mas_province';
import type { mas_sub_district, mas_sub_districtId } from './mas_sub_district';
import type { mas_title_name, mas_title_nameId } from './mas_title_name';

export interface insurance_applicantAttributes {
  id: string;
  insurance_id: string;
  mas_title_name_id: number;
  mas_marital_status_id?: number;
  mas_occupation_id?: number;
  id_number?: string;
  first_name?: string;
  last_name?: string;
  birthday?: string;
  age?: number;
  hight?: number;
  weight?: number;
  address?: string;
  additional_address?: string;
  nationality?: string;
  email?: string;
  phone?: string;
  mas_province_id?: string;
  mas_district_id?: string;
  mas_sub_district_id?: string;
  mas_payer_relation_id?: string;
}

export type insurance_applicantPk = "id";
export type insurance_applicantId = insurance_applicant[insurance_applicantPk];
export type insurance_applicantCreationAttributes = Optional<insurance_applicantAttributes, insurance_applicantPk>;

export class insurance_applicant extends Model<insurance_applicantAttributes, insurance_applicantCreationAttributes> implements insurance_applicantAttributes {
  id!: string;
  insurance_id!: string;
  mas_title_name_id!: number;
  mas_marital_status_id?: number;
  mas_occupation_id?: number;
  id_number?: string;
  first_name?: string;
  last_name?: string;
  birthday?: string;
  age?: number;
  hight?: number;
  weight?: number;
  address?: string;
  additional_address?: string;
  nationality?: string;
  email?: string;
  phone?: string;
  mas_province_id?: string;
  mas_district_id?: string;
  mas_sub_district_id?: string;
  mas_payer_relation_id?: string;

  // insurance_applicant belongsTo insurance via insurance_id
  insurance!: insurance;
  getInsurance!: Sequelize.BelongsToGetAssociationMixin<insurance>;
  setInsurance!: Sequelize.BelongsToSetAssociationMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.BelongsToCreateAssociationMixin<insurance>;
  // insurance_applicant hasMany insurance_beneficiary via insurance_applicant_id
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
  // insurance_applicant belongsTo mas_district via mas_district_id
  mas_district!: mas_district;
  getMas_district!: Sequelize.BelongsToGetAssociationMixin<mas_district>;
  setMas_district!: Sequelize.BelongsToSetAssociationMixin<mas_district, mas_districtId>;
  createMas_district!: Sequelize.BelongsToCreateAssociationMixin<mas_district>;
  // insurance_applicant belongsTo mas_marital_status via mas_marital_status_id
  mas_marital_status!: mas_marital_status;
  getMas_marital_status!: Sequelize.BelongsToGetAssociationMixin<mas_marital_status>;
  setMas_marital_status!: Sequelize.BelongsToSetAssociationMixin<mas_marital_status, mas_marital_statusId>;
  createMas_marital_status!: Sequelize.BelongsToCreateAssociationMixin<mas_marital_status>;
  // insurance_applicant belongsTo mas_occupation via mas_occupation_id
  mas_occupation!: mas_occupation;
  getMas_occupation!: Sequelize.BelongsToGetAssociationMixin<mas_occupation>;
  setMas_occupation!: Sequelize.BelongsToSetAssociationMixin<mas_occupation, mas_occupationId>;
  createMas_occupation!: Sequelize.BelongsToCreateAssociationMixin<mas_occupation>;
  // insurance_applicant belongsTo mas_payer_relation via mas_payer_relation_id
  mas_payer_relation!: mas_payer_relation;
  getMas_payer_relation!: Sequelize.BelongsToGetAssociationMixin<mas_payer_relation>;
  setMas_payer_relation!: Sequelize.BelongsToSetAssociationMixin<mas_payer_relation, mas_payer_relationId>;
  createMas_payer_relation!: Sequelize.BelongsToCreateAssociationMixin<mas_payer_relation>;
  // insurance_applicant belongsTo mas_province via mas_province_id
  mas_province!: mas_province;
  getMas_province!: Sequelize.BelongsToGetAssociationMixin<mas_province>;
  setMas_province!: Sequelize.BelongsToSetAssociationMixin<mas_province, mas_provinceId>;
  createMas_province!: Sequelize.BelongsToCreateAssociationMixin<mas_province>;
  // insurance_applicant belongsTo mas_sub_district via mas_sub_district_id
  mas_sub_district!: mas_sub_district;
  getMas_sub_district!: Sequelize.BelongsToGetAssociationMixin<mas_sub_district>;
  setMas_sub_district!: Sequelize.BelongsToSetAssociationMixin<mas_sub_district, mas_sub_districtId>;
  createMas_sub_district!: Sequelize.BelongsToCreateAssociationMixin<mas_sub_district>;
  // insurance_applicant belongsTo mas_title_name via mas_title_name_id
  mas_title_name!: mas_title_name;
  getMas_title_name!: Sequelize.BelongsToGetAssociationMixin<mas_title_name>;
  setMas_title_name!: Sequelize.BelongsToSetAssociationMixin<mas_title_name, mas_title_nameId>;
  createMas_title_name!: Sequelize.BelongsToCreateAssociationMixin<mas_title_name>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_applicant {
    insurance_applicant.init({
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "รหัสผู้ขอประกัน"
    },
    insurance_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "รหัสตารางประกัน",
      references: {
        model: 'insurance',
        key: 'id'
      }
    },
    mas_title_name_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "รหัสคำนำหน้าชื่อ",
      references: {
        model: 'mas_title_name',
        key: 'id'
      }
    },
    mas_marital_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "รหัสสถานภาพ",
      references: {
        model: 'mas_marital_status',
        key: 'id'
      }
    },
    mas_occupation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "รหัสอาชีพ",
      references: {
        model: 'mas_occupation',
        key: 'id'
      }
    },
    id_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เลขประชาชน"
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "ชื่อจริง"
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "นามสกุล"
    },
    birthday: {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "ปีเกิด"
    },
    age: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "อายุ"
    },
    hight: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ส่วนสูง"
    },
    weight: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "น้ำหนัก"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ที่อยู่"
    },
    additional_address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ที่อยู่เพิ่มเติม"
    },
    nationality: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "สัญชาติ"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "email"
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เบอร์โทรติดต่อ"
    },
    mas_province_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสจังหวัด",
      references: {
        model: 'mas_province',
        key: 'id'
      }
    },
    mas_district_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสอำเภอ",
      references: {
        model: 'mas_district',
        key: 'id'
      }
    },
    mas_sub_district_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสตำบล",
      references: {
        model: 'mas_sub_district',
        key: 'id'
      }
    },
    mas_payer_relation_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "รหัสความสัมพันธ์กับผู้ขอเอาประกัน",
      references: {
        model: 'mas_payer_relation',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'insurance_applicant',
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
        name: "mas_title_name_id",
        using: "BTREE",
        fields: [
          { name: "mas_title_name_id" },
        ]
      },
      {
        name: "mas_marital_status_id",
        using: "BTREE",
        fields: [
          { name: "mas_marital_status_id" },
        ]
      },
      {
        name: "mas_occupation_id",
        using: "BTREE",
        fields: [
          { name: "mas_occupation_id" },
        ]
      },
      {
        name: "mas_province_id",
        using: "BTREE",
        fields: [
          { name: "mas_province_id" },
        ]
      },
      {
        name: "mas_district_id",
        using: "BTREE",
        fields: [
          { name: "mas_district_id" },
        ]
      },
      {
        name: "mas_sub_district_id",
        using: "BTREE",
        fields: [
          { name: "mas_sub_district_id" },
        ]
      },
      {
        name: "mas_payer_relation_id",
        using: "BTREE",
        fields: [
          { name: "mas_payer_relation_id" },
        ]
      },
      {
        name: "insurance_applicant_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "insurance_id" },
        ]
      },
    ]
  });
  return insurance_applicant;
  }
}
