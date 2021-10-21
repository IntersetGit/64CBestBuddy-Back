import type { Sequelize, Model } from "sequelize";
import { insurance } from "./insurance";
import type { insuranceAttributes, insuranceCreationAttributes } from "./insurance";
import { insurance_beneficiary } from "./insurance_beneficiary";
import type { insurance_beneficiaryAttributes, insurance_beneficiaryCreationAttributes } from "./insurance_beneficiary";
import { insurance_category } from "./insurance_category";
import type { insurance_categoryAttributes, insurance_categoryCreationAttributes } from "./insurance_category";
import { insurance_mas_plan } from "./insurance_mas_plan";
import type { insurance_mas_planAttributes, insurance_mas_planCreationAttributes } from "./insurance_mas_plan";
import { insurance_mas_protection } from "./insurance_mas_protection";
import type { insurance_mas_protectionAttributes, insurance_mas_protectionCreationAttributes } from "./insurance_mas_protection";
import { insurance_order } from "./insurance_order";
import type { insurance_orderAttributes, insurance_orderCreationAttributes } from "./insurance_order";
import { insurance_price } from "./insurance_price";
import type { insurance_priceAttributes, insurance_priceCreationAttributes } from "./insurance_price";
import { mas_address_district } from "./mas_address_district";
import type { mas_address_districtAttributes, mas_address_districtCreationAttributes } from "./mas_address_district";
import { mas_address_province } from "./mas_address_province";
import type { mas_address_provinceAttributes, mas_address_provinceCreationAttributes } from "./mas_address_province";
import { mas_address_sub_district } from "./mas_address_sub_district";
import type { mas_address_sub_districtAttributes, mas_address_sub_districtCreationAttributes } from "./mas_address_sub_district";
import { mas_age_range } from "./mas_age_range";
import type { mas_age_rangeAttributes, mas_age_rangeCreationAttributes } from "./mas_age_range";
import { mas_beneficiary_relationship } from "./mas_beneficiary_relationship";
import type { mas_beneficiary_relationshipAttributes, mas_beneficiary_relationshipCreationAttributes } from "./mas_beneficiary_relationship";
import { mas_gender } from "./mas_gender";
import type { mas_genderAttributes, mas_genderCreationAttributes } from "./mas_gender";
import { mas_installment } from "./mas_installment";
import type { mas_installmentAttributes, mas_installmentCreationAttributes } from "./mas_installment";
import { mas_insurance_type } from "./mas_insurance_type";
import type { mas_insurance_typeAttributes, mas_insurance_typeCreationAttributes } from "./mas_insurance_type";
import { mas_occupation } from "./mas_occupation";
import type { mas_occupationAttributes, mas_occupationCreationAttributes } from "./mas_occupation";
import { mas_prefix } from "./mas_prefix";
import type { mas_prefixAttributes, mas_prefixCreationAttributes } from "./mas_prefix";
import { mas_taxdeduction } from "./mas_taxdeduction";
import type { mas_taxdeductionAttributes, mas_taxdeductionCreationAttributes } from "./mas_taxdeduction";
import { mas_type_card_number } from "./mas_type_card_number";
import type { mas_type_card_numberAttributes, mas_type_card_numberCreationAttributes } from "./mas_type_card_number";
import { match_protection_plan } from "./match_protection_plan";
import type { match_protection_planAttributes, match_protection_planCreationAttributes } from "./match_protection_plan";
import { sysm_roles } from "./sysm_roles";
import type { sysm_rolesAttributes, sysm_rolesCreationAttributes } from "./sysm_roles";
import { sysm_users } from "./sysm_users";
import type { sysm_usersAttributes, sysm_usersCreationAttributes } from "./sysm_users";

export {
  insurance,
  insurance_beneficiary,
  insurance_category,
  insurance_mas_plan,
  insurance_mas_protection,
  insurance_order,
  insurance_price,
  mas_address_district,
  mas_address_province,
  mas_address_sub_district,
  mas_age_range,
  mas_beneficiary_relationship,
  mas_gender,
  mas_installment,
  mas_insurance_type,
  mas_occupation,
  mas_prefix,
  mas_taxdeduction,
  mas_type_card_number,
  match_protection_plan,
  sysm_roles,
  sysm_users,
};

export type {
  insuranceAttributes,
  insuranceCreationAttributes,
  insurance_beneficiaryAttributes,
  insurance_beneficiaryCreationAttributes,
  insurance_categoryAttributes,
  insurance_categoryCreationAttributes,
  insurance_mas_planAttributes,
  insurance_mas_planCreationAttributes,
  insurance_mas_protectionAttributes,
  insurance_mas_protectionCreationAttributes,
  insurance_orderAttributes,
  insurance_orderCreationAttributes,
  insurance_priceAttributes,
  insurance_priceCreationAttributes,
  mas_address_districtAttributes,
  mas_address_districtCreationAttributes,
  mas_address_provinceAttributes,
  mas_address_provinceCreationAttributes,
  mas_address_sub_districtAttributes,
  mas_address_sub_districtCreationAttributes,
  mas_age_rangeAttributes,
  mas_age_rangeCreationAttributes,
  mas_beneficiary_relationshipAttributes,
  mas_beneficiary_relationshipCreationAttributes,
  mas_genderAttributes,
  mas_genderCreationAttributes,
  mas_installmentAttributes,
  mas_installmentCreationAttributes,
  mas_insurance_typeAttributes,
  mas_insurance_typeCreationAttributes,
  mas_occupationAttributes,
  mas_occupationCreationAttributes,
  mas_prefixAttributes,
  mas_prefixCreationAttributes,
  mas_taxdeductionAttributes,
  mas_taxdeductionCreationAttributes,
  mas_type_card_numberAttributes,
  mas_type_card_numberCreationAttributes,
  match_protection_planAttributes,
  match_protection_planCreationAttributes,
  sysm_rolesAttributes,
  sysm_rolesCreationAttributes,
  sysm_usersAttributes,
  sysm_usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  insurance.initModel(sequelize);
  insurance_beneficiary.initModel(sequelize);
  insurance_category.initModel(sequelize);
  insurance_mas_plan.initModel(sequelize);
  insurance_mas_protection.initModel(sequelize);
  insurance_order.initModel(sequelize);
  insurance_price.initModel(sequelize);
  mas_address_district.initModel(sequelize);
  mas_address_province.initModel(sequelize);
  mas_address_sub_district.initModel(sequelize);
  mas_age_range.initModel(sequelize);
  mas_beneficiary_relationship.initModel(sequelize);
  mas_gender.initModel(sequelize);
  mas_installment.initModel(sequelize);
  mas_insurance_type.initModel(sequelize);
  mas_occupation.initModel(sequelize);
  mas_prefix.initModel(sequelize);
  mas_taxdeduction.initModel(sequelize);
  mas_type_card_number.initModel(sequelize);
  match_protection_plan.initModel(sequelize);
  sysm_roles.initModel(sequelize);
  sysm_users.initModel(sequelize);

  insurance_mas_plan.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_mas_plan, { as: "insurance_mas_plans", foreignKey: "insurance_id"});
  insurance_mas_protection.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_mas_protection, { as: "insurance_mas_protections", foreignKey: "insurance_id"});
  insurance_order.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "insurance_id"});
  insurance.belongsTo(insurance_category, { as: "insurance_category", foreignKey: "insurance_category_id"});
  insurance_category.hasMany(insurance, { as: "insurances", foreignKey: "insurance_category_id"});
  match_protection_plan.belongsTo(insurance_mas_plan, { as: "mas_plan", foreignKey: "mas_plan_id"});
  insurance_mas_plan.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_plan_id"});
  match_protection_plan.belongsTo(insurance_mas_protection, { as: "mas_protection", foreignKey: "mas_protection_id"});
  insurance_mas_protection.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_protection_id"});
  insurance_beneficiary.belongsTo(insurance_order, { as: "insurance_order", foreignKey: "insurance_order_id"});
  insurance_order.hasMany(insurance_beneficiary, { as: "insurance_beneficiaries", foreignKey: "insurance_order_id"});
  insurance_order.belongsTo(insurance_price, { as: "insurance_price", foreignKey: "insurance_price_id"});
  insurance_price.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "insurance_price_id"});
  insurance_order.belongsTo(mas_address_district, { as: "district", foreignKey: "district_id"});
  mas_address_district.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "district_id"});
  insurance_order.belongsTo(mas_address_district, { as: "district_id_insured_mas_address_district", foreignKey: "district_id_insured"});
  mas_address_district.hasMany(insurance_order, { as: "district_id_insured_insurance_orders", foreignKey: "district_id_insured"});
  insurance_order.belongsTo(mas_address_province, { as: "province", foreignKey: "province_id"});
  mas_address_province.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "province_id"});
  insurance_order.belongsTo(mas_address_province, { as: "province_id_insured_mas_address_province", foreignKey: "province_id_insured"});
  mas_address_province.hasMany(insurance_order, { as: "province_id_insured_insurance_orders", foreignKey: "province_id_insured"});
  mas_address_district.belongsTo(mas_address_province, { as: "provicne", foreignKey: "provicne_id"});
  mas_address_province.hasMany(mas_address_district, { as: "mas_address_districts", foreignKey: "provicne_id"});
  insurance_order.belongsTo(mas_address_sub_district, { as: "sub_district", foreignKey: "sub_district_id"});
  mas_address_sub_district.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "sub_district_id"});
  insurance_order.belongsTo(mas_address_sub_district, { as: "sub_district_id_insured_mas_address_sub_district", foreignKey: "sub_district_id_insured"});
  mas_address_sub_district.hasMany(insurance_order, { as: "sub_district_id_insured_insurance_orders", foreignKey: "sub_district_id_insured"});
  mas_address_sub_district.belongsTo(mas_address_sub_district, { as: "district", foreignKey: "district_id"});
  mas_address_sub_district.hasMany(mas_address_sub_district, { as: "mas_address_sub_districts", foreignKey: "district_id"});
  insurance_price.belongsTo(mas_age_range, { as: "mas_age_range", foreignKey: "mas_age_range_id"});
  mas_age_range.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_age_range_id"});
  insurance_beneficiary.belongsTo(mas_beneficiary_relationship, { as: "beneficiary", foreignKey: "beneficiary_id"});
  mas_beneficiary_relationship.hasMany(insurance_beneficiary, { as: "insurance_beneficiaries", foreignKey: "beneficiary_id"});
  insurance_order.belongsTo(mas_beneficiary_relationship, { as: "beneficiary_id_insured_mas_beneficiary_relationship", foreignKey: "beneficiary_id_insured"});
  mas_beneficiary_relationship.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "beneficiary_id_insured"});
  insurance_order.belongsTo(mas_gender, { as: "gender_id_insured_mas_gender", foreignKey: "gender_id_insured"});
  mas_gender.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "gender_id_insured"});
  insurance_price.belongsTo(mas_installment, { as: "mas_installment", foreignKey: "mas_installment_id"});
  mas_installment.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_installment_id"});
  insurance.belongsTo(mas_insurance_type, { as: "mas_insurance_type", foreignKey: "mas_insurance_type_id"});
  mas_insurance_type.hasMany(insurance, { as: "insurances", foreignKey: "mas_insurance_type_id"});
  insurance_order.belongsTo(mas_occupation, { as: "occupation", foreignKey: "occupation_id"});
  mas_occupation.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "occupation_id"});
  insurance_beneficiary.belongsTo(mas_prefix, { as: "prefix", foreignKey: "prefix_id"});
  mas_prefix.hasMany(insurance_beneficiary, { as: "insurance_beneficiaries", foreignKey: "prefix_id"});
  insurance_order.belongsTo(mas_prefix, { as: "prefix", foreignKey: "prefix_id"});
  mas_prefix.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "prefix_id"});
  insurance_order.belongsTo(mas_prefix, { as: "prefix_id_insured_mas_prefix", foreignKey: "prefix_id_insured"});
  mas_prefix.hasMany(insurance_order, { as: "prefix_id_insured_insurance_orders", foreignKey: "prefix_id_insured"});
  sysm_users.belongsTo(mas_prefix, { as: "mas_prefix", foreignKey: "mas_prefix_id"});
  mas_prefix.hasMany(sysm_users, { as: "sysm_users", foreignKey: "mas_prefix_id"});
  insurance_order.belongsTo(mas_type_card_number, { as: "type_card_number", foreignKey: "type_card_number_id"});
  mas_type_card_number.hasMany(insurance_order, { as: "insurance_orders", foreignKey: "type_card_number_id"});
  insurance_order.belongsTo(mas_type_card_number, { as: "type_card_number_id_insured_mas_type_card_number", foreignKey: "type_card_number_id_insured"});
  mas_type_card_number.hasMany(insurance_order, { as: "type_card_number_id_insured_insurance_orders", foreignKey: "type_card_number_id_insured"});
  sysm_users.belongsTo(sysm_roles, { as: "role", foreignKey: "roles_id"});
  sysm_roles.hasMany(sysm_users, { as: "sysm_users", foreignKey: "roles_id"});
  insurance.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(insurance, { as: "insurances", foreignKey: "user_id"});

  return {
    insurance: insurance,
    insurance_beneficiary: insurance_beneficiary,
    insurance_category: insurance_category,
    insurance_mas_plan: insurance_mas_plan,
    insurance_mas_protection: insurance_mas_protection,
    insurance_order: insurance_order,
    insurance_price: insurance_price,
    mas_address_district: mas_address_district,
    mas_address_province: mas_address_province,
    mas_address_sub_district: mas_address_sub_district,
    mas_age_range: mas_age_range,
    mas_beneficiary_relationship: mas_beneficiary_relationship,
    mas_gender: mas_gender,
    mas_installment: mas_installment,
    mas_insurance_type: mas_insurance_type,
    mas_occupation: mas_occupation,
    mas_prefix: mas_prefix,
    mas_taxdeduction: mas_taxdeduction,
    mas_type_card_number: mas_type_card_number,
    match_protection_plan: match_protection_plan,
    sysm_roles: sysm_roles,
    sysm_users: sysm_users,
  };
}
