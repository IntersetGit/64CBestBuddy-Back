import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';
import type { insurance_beneficiary, insurance_beneficiaryId } from './insurance_beneficiary';
import type { insurance_price, insurance_priceId } from './insurance_price';
import type { mas_address_district, mas_address_districtId } from './mas_address_district';
import type { mas_address_province, mas_address_provinceId } from './mas_address_province';
import type { mas_address_sub_district, mas_address_sub_districtId } from './mas_address_sub_district';
import type { mas_beneficiary_relationship, mas_beneficiary_relationshipId } from './mas_beneficiary_relationship';
import type { mas_gender, mas_genderId } from './mas_gender';
import type { mas_occupation, mas_occupationId } from './mas_occupation';
import type { mas_prefix, mas_prefixId } from './mas_prefix';
import type { mas_type_card_number, mas_type_card_numberId } from './mas_type_card_number';

export interface insurance_orderAttributes {
  id: string;
  policy_id?: string;
  insurance_code?: string;
  insurance_id: string;
  protection_date_start: string;
  protection_date_end: string;
  prefix_id: number;
  first_name: string;
  last_name: string;
  mobile_phone: string;
  phone?: string;
  email: string;
  birthday?: string;
  age?: number;
  occupation_id?: number;
  height?: number;
  weight?: number;
  bmi?: number;
  insurance_price_id?: string;
  gender_id?: number;
  type_card_number_id?: number;
  card_number?: string;
  house_no?: string;
  village_no?: string;
  lane?: string;
  village?: string;
  road?: string;
  province_id?: number;
  district_id?: number;
  sub_district_id?: number;
  beneficiary_status?: '1' | '2';
  insured_status?: '1' | '2';
  prefix_id_insured?: number;
  first_name_insured?: string;
  last_name_insured?: string;
  type_card_number_id_insured?: number;
  card_number_insured?: string;
  gender_id_insured?: number;
  mobile_phone_insured?: string;
  phone_insured?: string;
  email_insured?: string;
  beneficiary_id_insured?: number;
  house_no_insured?: string;
  village_no_insured?: string;
  lane_insured?: string;
  village_insured?: string;
  road_insured?: string;
  province_id_insured?: number;
  district_id_insured?: number;
  sub_district_id_insured?: number;
  status_tax?: '1' | '2';
  created_date?: Date;
  update_date?: Date;
  status?: '1' | '2' | '3';
}

export type insurance_orderPk = "id";
export type insurance_orderId = insurance_order[insurance_orderPk];
export type insurance_orderCreationAttributes = Optional<insurance_orderAttributes, insurance_orderPk>;

export class insurance_order extends Model<insurance_orderAttributes, insurance_orderCreationAttributes> implements insurance_orderAttributes {
  id!: string;
  policy_id?: string;
  insurance_code?: string;
  insurance_id!: string;
  protection_date_start!: string;
  protection_date_end!: string;
  prefix_id!: number;
  first_name!: string;
  last_name!: string;
  mobile_phone!: string;
  phone?: string;
  email!: string;
  birthday?: string;
  age?: number;
  occupation_id?: number;
  height?: number;
  weight?: number;
  bmi?: number;
  insurance_price_id?: string;
  gender_id?: number;
  type_card_number_id?: number;
  card_number?: string;
  house_no?: string;
  village_no?: string;
  lane?: string;
  village?: string;
  road?: string;
  province_id?: number;
  district_id?: number;
  sub_district_id?: number;
  beneficiary_status?: '1' | '2';
  insured_status?: '1' | '2';
  prefix_id_insured?: number;
  first_name_insured?: string;
  last_name_insured?: string;
  type_card_number_id_insured?: number;
  card_number_insured?: string;
  gender_id_insured?: number;
  mobile_phone_insured?: string;
  phone_insured?: string;
  email_insured?: string;
  beneficiary_id_insured?: number;
  house_no_insured?: string;
  village_no_insured?: string;
  lane_insured?: string;
  village_insured?: string;
  road_insured?: string;
  province_id_insured?: number;
  district_id_insured?: number;
  sub_district_id_insured?: number;
  status_tax?: '1' | '2';
  created_date?: Date;
  update_date?: Date;
  status?: '1' | '2' | '3';

  // insurance_order belongsTo insurance via insurance_id
  insurance!: insurance;
  getInsurance!: Sequelize.BelongsToGetAssociationMixin<insurance>;
  setInsurance!: Sequelize.BelongsToSetAssociationMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.BelongsToCreateAssociationMixin<insurance>;
  // insurance_order hasMany insurance_beneficiary via insurance_order_id
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
  // insurance_order belongsTo insurance_price via insurance_price_id
  insurance_price!: insurance_price;
  getInsurance_price!: Sequelize.BelongsToGetAssociationMixin<insurance_price>;
  setInsurance_price!: Sequelize.BelongsToSetAssociationMixin<insurance_price, insurance_priceId>;
  createInsurance_price!: Sequelize.BelongsToCreateAssociationMixin<insurance_price>;
  // insurance_order belongsTo mas_address_district via district_id
  district!: mas_address_district;
  getDistrict!: Sequelize.BelongsToGetAssociationMixin<mas_address_district>;
  setDistrict!: Sequelize.BelongsToSetAssociationMixin<mas_address_district, mas_address_districtId>;
  createDistrict!: Sequelize.BelongsToCreateAssociationMixin<mas_address_district>;
  // insurance_order belongsTo mas_address_district via district_id_insured
  district_id_insured_mas_address_district!: mas_address_district;
  getDistrict_id_insured_mas_address_district!: Sequelize.BelongsToGetAssociationMixin<mas_address_district>;
  setDistrict_id_insured_mas_address_district!: Sequelize.BelongsToSetAssociationMixin<mas_address_district, mas_address_districtId>;
  createDistrict_id_insured_mas_address_district!: Sequelize.BelongsToCreateAssociationMixin<mas_address_district>;
  // insurance_order belongsTo mas_address_province via province_id
  province!: mas_address_province;
  getProvince!: Sequelize.BelongsToGetAssociationMixin<mas_address_province>;
  setProvince!: Sequelize.BelongsToSetAssociationMixin<mas_address_province, mas_address_provinceId>;
  createProvince!: Sequelize.BelongsToCreateAssociationMixin<mas_address_province>;
  // insurance_order belongsTo mas_address_province via province_id_insured
  province_id_insured_mas_address_province!: mas_address_province;
  getProvince_id_insured_mas_address_province!: Sequelize.BelongsToGetAssociationMixin<mas_address_province>;
  setProvince_id_insured_mas_address_province!: Sequelize.BelongsToSetAssociationMixin<mas_address_province, mas_address_provinceId>;
  createProvince_id_insured_mas_address_province!: Sequelize.BelongsToCreateAssociationMixin<mas_address_province>;
  // insurance_order belongsTo mas_address_sub_district via sub_district_id
  sub_district!: mas_address_sub_district;
  getSub_district!: Sequelize.BelongsToGetAssociationMixin<mas_address_sub_district>;
  setSub_district!: Sequelize.BelongsToSetAssociationMixin<mas_address_sub_district, mas_address_sub_districtId>;
  createSub_district!: Sequelize.BelongsToCreateAssociationMixin<mas_address_sub_district>;
  // insurance_order belongsTo mas_address_sub_district via sub_district_id_insured
  sub_district_id_insured_mas_address_sub_district!: mas_address_sub_district;
  getSub_district_id_insured_mas_address_sub_district!: Sequelize.BelongsToGetAssociationMixin<mas_address_sub_district>;
  setSub_district_id_insured_mas_address_sub_district!: Sequelize.BelongsToSetAssociationMixin<mas_address_sub_district, mas_address_sub_districtId>;
  createSub_district_id_insured_mas_address_sub_district!: Sequelize.BelongsToCreateAssociationMixin<mas_address_sub_district>;
  // insurance_order belongsTo mas_beneficiary_relationship via beneficiary_id_insured
  beneficiary_id_insured_mas_beneficiary_relationship!: mas_beneficiary_relationship;
  getBeneficiary_id_insured_mas_beneficiary_relationship!: Sequelize.BelongsToGetAssociationMixin<mas_beneficiary_relationship>;
  setBeneficiary_id_insured_mas_beneficiary_relationship!: Sequelize.BelongsToSetAssociationMixin<mas_beneficiary_relationship, mas_beneficiary_relationshipId>;
  createBeneficiary_id_insured_mas_beneficiary_relationship!: Sequelize.BelongsToCreateAssociationMixin<mas_beneficiary_relationship>;
  // insurance_order belongsTo mas_gender via gender_id_insured
  gender_id_insured_mas_gender!: mas_gender;
  getGender_id_insured_mas_gender!: Sequelize.BelongsToGetAssociationMixin<mas_gender>;
  setGender_id_insured_mas_gender!: Sequelize.BelongsToSetAssociationMixin<mas_gender, mas_genderId>;
  createGender_id_insured_mas_gender!: Sequelize.BelongsToCreateAssociationMixin<mas_gender>;
  // insurance_order belongsTo mas_occupation via occupation_id
  occupation!: mas_occupation;
  getOccupation!: Sequelize.BelongsToGetAssociationMixin<mas_occupation>;
  setOccupation!: Sequelize.BelongsToSetAssociationMixin<mas_occupation, mas_occupationId>;
  createOccupation!: Sequelize.BelongsToCreateAssociationMixin<mas_occupation>;
  // insurance_order belongsTo mas_prefix via prefix_id
  prefix!: mas_prefix;
  getPrefix!: Sequelize.BelongsToGetAssociationMixin<mas_prefix>;
  setPrefix!: Sequelize.BelongsToSetAssociationMixin<mas_prefix, mas_prefixId>;
  createPrefix!: Sequelize.BelongsToCreateAssociationMixin<mas_prefix>;
  // insurance_order belongsTo mas_prefix via prefix_id_insured
  prefix_id_insured_mas_prefix!: mas_prefix;
  getPrefix_id_insured_mas_prefix!: Sequelize.BelongsToGetAssociationMixin<mas_prefix>;
  setPrefix_id_insured_mas_prefix!: Sequelize.BelongsToSetAssociationMixin<mas_prefix, mas_prefixId>;
  createPrefix_id_insured_mas_prefix!: Sequelize.BelongsToCreateAssociationMixin<mas_prefix>;
  // insurance_order belongsTo mas_type_card_number via type_card_number_id
  type_card_number!: mas_type_card_number;
  getType_card_number!: Sequelize.BelongsToGetAssociationMixin<mas_type_card_number>;
  setType_card_number!: Sequelize.BelongsToSetAssociationMixin<mas_type_card_number, mas_type_card_numberId>;
  createType_card_number!: Sequelize.BelongsToCreateAssociationMixin<mas_type_card_number>;
  // insurance_order belongsTo mas_type_card_number via type_card_number_id_insured
  type_card_number_id_insured_mas_type_card_number!: mas_type_card_number;
  getType_card_number_id_insured_mas_type_card_number!: Sequelize.BelongsToGetAssociationMixin<mas_type_card_number>;
  setType_card_number_id_insured_mas_type_card_number!: Sequelize.BelongsToSetAssociationMixin<mas_type_card_number, mas_type_card_numberId>;
  createType_card_number_id_insured_mas_type_card_number!: Sequelize.BelongsToCreateAssociationMixin<mas_type_card_number>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_order {
    insurance_order.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    policy_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสยืนยัน falcon"
    },
    insurance_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสประกัน"
    },
    insurance_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ไอดี ตาราง insurance",
      references: {
        model: 'insurance',
        key: 'id'
      }
    },
    protection_date_start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "วันที่เริ่มคุ้มครอง"
    },
    protection_date_end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "วันสิ้นสุดความคุ้มครอง"
    },
    prefix_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ไอดี ตาราง mas_prefix",
      references: {
        model: 'mas_prefix',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "ชื่อ"
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "นามสกุล"
    },
    mobile_phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "โทรศัพท์มือ"
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เบอร์โทรศัพท์"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "อีเมล"
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันเดือนปีเกิด (ค.ศ.)"
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "อายุ"
    },
    occupation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ไอดี ตาราง mas_occupation",
      references: {
        model: 'mas_occupation',
        key: 'id'
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ส่วนสูง"
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "น้ำหนัก"
    },
    bmi: {
      type: DataTypes.FLOAT(11,2),
      allowNull: true,
      comment: "BMI"
    },
    insurance_price_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ตาราง insurance_price",
      references: {
        model: 'insurance_price',
        key: 'id'
      }
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ไอดี ตาราง mas_gender"
    },
    type_card_number_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ไอดี ตาราง mas_type_card_number",
      references: {
        model: 'mas_type_card_number',
        key: 'id'
      }
    },
    card_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เลขที่บัตร"
    },
    house_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "บ้านเลขที่"
    },
    village_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "หมู่"
    },
    lane: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ซอย"
    },
    village: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "หมู่บ้าน"
    },
    road: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ถนน"
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "จังหวัด",
      references: {
        model: 'mas_address_province',
        key: 'id'
      }
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "อำเภอ",
      references: {
        model: 'mas_address_district',
        key: 'id'
      }
    },
    sub_district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ตำบล",
      references: {
        model: 'mas_address_sub_district',
        key: 'id'
      }
    },
    beneficiary_status: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true,
      defaultValue: "1",
      comment: "ผู้รับผลประโยชน์ 1 = ทายาทตามกฎหมาย 2 = อื่นๆ"
    },
    insured_status: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true,
      defaultValue: "1",
      comment: "ผู้ถือกรมธรรม์ 1 = เหมือนผู้เอาประกันภัย 2 = บุคคลอื่น"
    },
    prefix_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "คำนำหน้า ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_prefix',
        key: 'id'
      }
    },
    first_name_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อ ผู้ถือกรมธรรม์"
    },
    last_name_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "นามสกุล ผู้ถือกรมธรรม์"
    },
    type_card_number_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ประเภทบัตร ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_type_card_number',
        key: 'id'
      }
    },
    card_number_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เลขที่บัตร ผู้ถือกรมธรรม์"
    },
    gender_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เพศ ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_gender',
        key: 'id'
      }
    },
    mobile_phone_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "โทรศัพท์มือ ผู้ถือกรมธรรม์"
    },
    phone_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เบอร์โทรศัพท์ ผู้ถือกรมธรรม์"
    },
    email_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "อีเมล ผู้ถือกรมธรรม์"
    },
    beneficiary_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ความสัมพันธ์ ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_beneficiary_relationship',
        key: 'id'
      }
    },
    house_no_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "บ้านเลขที่ ผู้ถือกรมธรรม์"
    },
    village_no_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "หมู่ ผู้ถือกรมธรรม์"
    },
    lane_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ซอย ผู้ถือกรมธรรม์"
    },
    village_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "หมู่บ้าน ผู้ถือกรมธรรม์"
    },
    road_insured: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ถนน ผู้ถือกรมธรรม์"
    },
    province_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "จังหวัด ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_address_province',
        key: 'id'
      }
    },
    district_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "อำเภอ ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_address_district',
        key: 'id'
      }
    },
    sub_district_id_insured: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ตำบล ผู้ถือกรมธรรม์",
      references: {
        model: 'mas_address_sub_district',
        key: 'id'
      }
    },
    status_tax: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true,
      comment: "ผู้ขอเอาประกันภัยประสงค์จะใช้สิทธิขอยกเว้นภาษีเงินได้ตามกฎหมายว่าด้วยภาษีอากรหรือไม่\r\n\r\n1 = ไม่\r\n2 =  ประสงค์"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "วันเวลาที่สร้าง"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "วันเวลาที่แก้ไข"
    },
    status: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      defaultValue: "1",
      comment: "1 = ยังไม่ได้กรอกคำถามสุขภาพ\r\n2 = ยังไม่ได้ชำระเงิน\r\n3 = เสร็จสิ้น"
    }
  }, {
    sequelize,
    tableName: 'insurance_order',
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
        name: "insurance_id",
        using: "BTREE",
        fields: [
          { name: "insurance_id" },
        ]
      },
      {
        name: "prefix_id",
        using: "BTREE",
        fields: [
          { name: "prefix_id" },
        ]
      },
      {
        name: "occupation_id",
        using: "BTREE",
        fields: [
          { name: "occupation_id" },
        ]
      },
      {
        name: "type_card_number_id",
        using: "BTREE",
        fields: [
          { name: "type_card_number_id" },
        ]
      },
      {
        name: "province_id",
        using: "BTREE",
        fields: [
          { name: "province_id" },
        ]
      },
      {
        name: "district_id",
        using: "BTREE",
        fields: [
          { name: "district_id" },
        ]
      },
      {
        name: "sub_district_id",
        using: "BTREE",
        fields: [
          { name: "sub_district_id" },
        ]
      },
      {
        name: "prefix_id_insured",
        using: "BTREE",
        fields: [
          { name: "prefix_id_insured" },
        ]
      },
      {
        name: "type_card_number_id_insured",
        using: "BTREE",
        fields: [
          { name: "type_card_number_id_insured" },
        ]
      },
      {
        name: "gender_id_insured",
        using: "BTREE",
        fields: [
          { name: "gender_id_insured" },
        ]
      },
      {
        name: "beneficiary_id_insured",
        using: "BTREE",
        fields: [
          { name: "beneficiary_id_insured" },
        ]
      },
      {
        name: "province_id_insured",
        using: "BTREE",
        fields: [
          { name: "province_id_insured" },
        ]
      },
      {
        name: "district_id_insured",
        using: "BTREE",
        fields: [
          { name: "district_id_insured" },
        ]
      },
      {
        name: "sub_district_id_insured",
        using: "BTREE",
        fields: [
          { name: "sub_district_id_insured" },
        ]
      },
      {
        name: "insurance_price_id",
        using: "BTREE",
        fields: [
          { name: "insurance_price_id" },
        ]
      },
    ]
  });
  return insurance_order;
  }
}
