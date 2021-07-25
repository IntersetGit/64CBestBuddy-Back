import type { Sequelize, Model } from "sequelize";
import { SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { insurance } from "./insurance";
import type { insuranceAttributes, insuranceCreationAttributes } from "./insurance";
import { insurance_applicant } from "./insurance_applicant";
import type { insurance_applicantAttributes, insurance_applicantCreationAttributes } from "./insurance_applicant";
import { insurance_beneficiary } from "./insurance_beneficiary";
import type { insurance_beneficiaryAttributes, insurance_beneficiaryCreationAttributes } from "./insurance_beneficiary";
import { insurance_mas_plan } from "./insurance_mas_plan";
import type { insurance_mas_planAttributes, insurance_mas_planCreationAttributes } from "./insurance_mas_plan";
import { insurance_mas_protection } from "./insurance_mas_protection";
import type { insurance_mas_protectionAttributes, insurance_mas_protectionCreationAttributes } from "./insurance_mas_protection";
import { insurance_price } from "./insurance_price";
import type { insurance_priceAttributes, insurance_priceCreationAttributes } from "./insurance_price";
import { mas_age_range } from "./mas_age_range";
import type { mas_age_rangeAttributes, mas_age_rangeCreationAttributes } from "./mas_age_range";
import { mas_beneficiary_relation } from "./mas_beneficiary_relation";
import type { mas_beneficiary_relationAttributes, mas_beneficiary_relationCreationAttributes } from "./mas_beneficiary_relation";
import { mas_district } from "./mas_district";
import type { mas_districtAttributes, mas_districtCreationAttributes } from "./mas_district";
import { mas_installment } from "./mas_installment";
import type { mas_installmentAttributes, mas_installmentCreationAttributes } from "./mas_installment";
import { mas_insurance_type } from "./mas_insurance_type";
import type { mas_insurance_typeAttributes, mas_insurance_typeCreationAttributes } from "./mas_insurance_type";
import { mas_marital_status } from "./mas_marital_status";
import type { mas_marital_statusAttributes, mas_marital_statusCreationAttributes } from "./mas_marital_status";
import { mas_occupation } from "./mas_occupation";
import type { mas_occupationAttributes, mas_occupationCreationAttributes } from "./mas_occupation";
import { mas_payer_relation } from "./mas_payer_relation";
import type { mas_payer_relationAttributes, mas_payer_relationCreationAttributes } from "./mas_payer_relation";
import { mas_province } from "./mas_province";
import type { mas_provinceAttributes, mas_provinceCreationAttributes } from "./mas_province";
import { mas_ref_policy_rel } from "./mas_ref_policy_rel";
import type { mas_ref_policy_relAttributes, mas_ref_policy_relCreationAttributes } from "./mas_ref_policy_rel";
import { mas_sub_district } from "./mas_sub_district";
import type { mas_sub_districtAttributes, mas_sub_districtCreationAttributes } from "./mas_sub_district";
import { mas_title_name } from "./mas_title_name";
import type { mas_title_nameAttributes, mas_title_nameCreationAttributes } from "./mas_title_name";
import { match_protection_plan } from "./match_protection_plan";
import type { match_protection_planAttributes, match_protection_planCreationAttributes } from "./match_protection_plan";
import { person } from "./person";
import type { personAttributes, personCreationAttributes } from "./person";
import { sysm_roles } from "./sysm_roles";
import type { sysm_rolesAttributes, sysm_rolesCreationAttributes } from "./sysm_roles";
import { sysm_users } from "./sysm_users";
import type { sysm_usersAttributes, sysm_usersCreationAttributes } from "./sysm_users";

export {
  SequelizeMeta,
  insurance,
  insurance_applicant,
  insurance_beneficiary,
  insurance_mas_plan,
  insurance_mas_protection,
  insurance_price,
  mas_age_range,
  mas_beneficiary_relation,
  mas_district,
  mas_installment,
  mas_insurance_type,
  mas_marital_status,
  mas_occupation,
  mas_payer_relation,
  mas_province,
  mas_ref_policy_rel,
  mas_sub_district,
  mas_title_name,
  match_protection_plan,
  person,
  sysm_roles,
  sysm_users,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  insuranceAttributes,
  insuranceCreationAttributes,
  insurance_applicantAttributes,
  insurance_applicantCreationAttributes,
  insurance_beneficiaryAttributes,
  insurance_beneficiaryCreationAttributes,
  insurance_mas_planAttributes,
  insurance_mas_planCreationAttributes,
  insurance_mas_protectionAttributes,
  insurance_mas_protectionCreationAttributes,
  insurance_priceAttributes,
  insurance_priceCreationAttributes,
  mas_age_rangeAttributes,
  mas_age_rangeCreationAttributes,
  mas_beneficiary_relationAttributes,
  mas_beneficiary_relationCreationAttributes,
  mas_districtAttributes,
  mas_districtCreationAttributes,
  mas_installmentAttributes,
  mas_installmentCreationAttributes,
  mas_insurance_typeAttributes,
  mas_insurance_typeCreationAttributes,
  mas_marital_statusAttributes,
  mas_marital_statusCreationAttributes,
  mas_occupationAttributes,
  mas_occupationCreationAttributes,
  mas_payer_relationAttributes,
  mas_payer_relationCreationAttributes,
  mas_provinceAttributes,
  mas_provinceCreationAttributes,
  mas_ref_policy_relAttributes,
  mas_ref_policy_relCreationAttributes,
  mas_sub_districtAttributes,
  mas_sub_districtCreationAttributes,
  mas_title_nameAttributes,
  mas_title_nameCreationAttributes,
  match_protection_planAttributes,
  match_protection_planCreationAttributes,
  personAttributes,
  personCreationAttributes,
  sysm_rolesAttributes,
  sysm_rolesCreationAttributes,
  sysm_usersAttributes,
  sysm_usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  SequelizeMeta.initModel(sequelize);
  insurance.initModel(sequelize);
  insurance_applicant.initModel(sequelize);
  insurance_beneficiary.initModel(sequelize);
  insurance_mas_plan.initModel(sequelize);
  insurance_mas_protection.initModel(sequelize);
  insurance_price.initModel(sequelize);
  mas_age_range.initModel(sequelize);
  mas_beneficiary_relation.initModel(sequelize);
  mas_district.initModel(sequelize);
  mas_installment.initModel(sequelize);
  mas_insurance_type.initModel(sequelize);
  mas_marital_status.initModel(sequelize);
  mas_occupation.initModel(sequelize);
  mas_payer_relation.initModel(sequelize);
  mas_province.initModel(sequelize);
  mas_ref_policy_rel.initModel(sequelize);
  mas_sub_district.initModel(sequelize);
  mas_title_name.initModel(sequelize);
  match_protection_plan.initModel(sequelize);
  person.initModel(sequelize);
  sysm_roles.initModel(sequelize);
  sysm_users.initModel(sequelize);

  insurance_applicant.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "insurance_id"});
  insurance_mas_plan.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_mas_plan, { as: "insurance_mas_plans", foreignKey: "insurance_id"});
  insurance_mas_protection.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_mas_protection, { as: "insurance_mas_protections", foreignKey: "insurance_id"});
  insurance_beneficiary.belongsTo(insurance_applicant, { as: "insurance_applicant", foreignKey: "insurance_applicant_id"});
  insurance_applicant.hasMany(insurance_beneficiary, { as: "insurance_beneficiaries", foreignKey: "insurance_applicant_id"});
  match_protection_plan.belongsTo(insurance_mas_plan, { as: "mas_plan", foreignKey: "mas_plan_id"});
  insurance_mas_plan.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_plan_id"});
  match_protection_plan.belongsTo(insurance_mas_protection, { as: "mas_protection", foreignKey: "mas_protection_id"});
  insurance_mas_protection.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_protection_id"});
  insurance_price.belongsTo(mas_age_range, { as: "mas_age_range", foreignKey: "mas_age_range_id"});
  mas_age_range.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_age_range_id"});
  insurance_applicant.belongsTo(mas_district, { as: "mas_district", foreignKey: "mas_district_id"});
  mas_district.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_district_id"});
  mas_sub_district.belongsTo(mas_district, { as: "district", foreignKey: "district_id"});
  mas_district.hasMany(mas_sub_district, { as: "mas_sub_districts", foreignKey: "district_id"});
  insurance_price.belongsTo(mas_installment, { as: "mas_installment", foreignKey: "mas_installment_id"});
  mas_installment.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_installment_id"});
  insurance.belongsTo(mas_insurance_type, { as: "mas_insurance_type", foreignKey: "mas_insurance_type_id"});
  mas_insurance_type.hasMany(insurance, { as: "insurances", foreignKey: "mas_insurance_type_id"});
  insurance_applicant.belongsTo(mas_marital_status, { as: "mas_marital_status", foreignKey: "mas_marital_status_id"});
  mas_marital_status.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_marital_status_id"});
  insurance_applicant.belongsTo(mas_occupation, { as: "mas_occupation", foreignKey: "mas_occupation_id"});
  mas_occupation.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_occupation_id"});
  insurance_applicant.belongsTo(mas_payer_relation, { as: "mas_payer_relation", foreignKey: "mas_payer_relation_id"});
  mas_payer_relation.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_payer_relation_id"});
  insurance_beneficiary.belongsTo(mas_payer_relation, { as: "mas_payer_relation", foreignKey: "mas_payer_relation_id"});
  mas_payer_relation.hasMany(insurance_beneficiary, { as: "insurance_beneficiaries", foreignKey: "mas_payer_relation_id"});
  insurance_applicant.belongsTo(mas_province, { as: "mas_province", foreignKey: "mas_province_id"});
  mas_province.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_province_id"});
  mas_district.belongsTo(mas_province, { as: "province", foreignKey: "province_id"});
  mas_province.hasMany(mas_district, { as: "mas_districts", foreignKey: "province_id"});
  insurance_applicant.belongsTo(mas_sub_district, { as: "mas_sub_district", foreignKey: "mas_sub_district_id"});
  mas_sub_district.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_sub_district_id"});
  insurance_applicant.belongsTo(mas_title_name, { as: "mas_title_name", foreignKey: "mas_title_name_id"});
  mas_title_name.hasMany(insurance_applicant, { as: "insurance_applicants", foreignKey: "mas_title_name_id"});
  insurance_beneficiary.belongsTo(mas_title_name, { as: "mas_title_name", foreignKey: "mas_title_name_id"});
  mas_title_name.hasMany(insurance_beneficiary, { as: "insurance_beneficiaries", foreignKey: "mas_title_name_id"});
  person.belongsTo(mas_title_name, { as: "mas_title_name", foreignKey: "mas_title_name_id"});
  mas_title_name.hasMany(person, { as: "people", foreignKey: "mas_title_name_id"});
  sysm_users.belongsTo(sysm_roles, { as: "role", foreignKey: "roles_id"});
  sysm_roles.hasMany(sysm_users, { as: "sysm_users", foreignKey: "roles_id"});
  person.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(person, { as: "people", foreignKey: "user_id"});
  person.belongsTo(sysm_users, { as: "created_by_sysm_user", foreignKey: "created_by"});
  sysm_users.hasMany(person, { as: "created_by_people", foreignKey: "created_by"});
  person.belongsTo(sysm_users, { as: "updated_by_sysm_user", foreignKey: "updated_by"});
  sysm_users.hasMany(person, { as: "updated_by_people", foreignKey: "updated_by"});

  return {
    SequelizeMeta: SequelizeMeta,
    insurance: insurance,
    insurance_applicant: insurance_applicant,
    insurance_beneficiary: insurance_beneficiary,
    insurance_mas_plan: insurance_mas_plan,
    insurance_mas_protection: insurance_mas_protection,
    insurance_price: insurance_price,
    mas_age_range: mas_age_range,
    mas_beneficiary_relation: mas_beneficiary_relation,
    mas_district: mas_district,
    mas_installment: mas_installment,
    mas_insurance_type: mas_insurance_type,
    mas_marital_status: mas_marital_status,
    mas_occupation: mas_occupation,
    mas_payer_relation: mas_payer_relation,
    mas_province: mas_province,
    mas_ref_policy_rel: mas_ref_policy_rel,
    mas_sub_district: mas_sub_district,
    mas_title_name: mas_title_name,
    match_protection_plan: match_protection_plan,
    person: person,
    sysm_roles: sysm_roles,
    sysm_users: sysm_users,
  };
}
