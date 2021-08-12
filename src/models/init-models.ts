import type { Sequelize, Model } from "sequelize";
import { insurance } from "./insurance";
import type { insuranceAttributes, insuranceCreationAttributes } from "./insurance";
import { insurance_category } from "./insurance_category";
import type { insurance_categoryAttributes, insurance_categoryCreationAttributes } from "./insurance_category";
import { insurance_mas_plan } from "./insurance_mas_plan";
import type { insurance_mas_planAttributes, insurance_mas_planCreationAttributes } from "./insurance_mas_plan";
import { insurance_mas_protection } from "./insurance_mas_protection";
import type { insurance_mas_protectionAttributes, insurance_mas_protectionCreationAttributes } from "./insurance_mas_protection";
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
  insurance_category,
  insurance_mas_plan,
  insurance_mas_protection,
  insurance_price,
  mas_address_district,
  mas_address_province,
  mas_address_sub_district,
  mas_age_range,
  mas_beneficiary_relationship,
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
  insurance_categoryAttributes,
  insurance_categoryCreationAttributes,
  insurance_mas_planAttributes,
  insurance_mas_planCreationAttributes,
  insurance_mas_protectionAttributes,
  insurance_mas_protectionCreationAttributes,
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
  insurance_category.initModel(sequelize);
  insurance_mas_plan.initModel(sequelize);
  insurance_mas_protection.initModel(sequelize);
  insurance_price.initModel(sequelize);
  mas_address_district.initModel(sequelize);
  mas_address_province.initModel(sequelize);
  mas_address_sub_district.initModel(sequelize);
  mas_age_range.initModel(sequelize);
  mas_beneficiary_relationship.initModel(sequelize);
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
  match_protection_plan.belongsTo(insurance_mas_plan, { as: "mas_plan", foreignKey: "mas_plan_id"});
  insurance_mas_plan.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_plan_id"});
  match_protection_plan.belongsTo(insurance_mas_protection, { as: "mas_protection", foreignKey: "mas_protection_id"});
  insurance_mas_protection.hasMany(match_protection_plan, { as: "match_protection_plans", foreignKey: "mas_protection_id"});
  mas_address_sub_district.belongsTo(mas_address_district, { as: "district", foreignKey: "district_id"});
  mas_address_district.hasMany(mas_address_sub_district, { as: "mas_address_sub_districts", foreignKey: "district_id"});
  mas_address_district.belongsTo(mas_address_province, { as: "provicne", foreignKey: "provicne_id"});
  mas_address_province.hasMany(mas_address_district, { as: "mas_address_districts", foreignKey: "provicne_id"});
  insurance_price.belongsTo(mas_age_range, { as: "mas_age_range", foreignKey: "mas_age_range_id"});
  mas_age_range.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_age_range_id"});
  insurance_price.belongsTo(mas_installment, { as: "mas_installment", foreignKey: "mas_installment_id"});
  mas_installment.hasMany(insurance_price, { as: "insurance_prices", foreignKey: "mas_installment_id"});
  insurance.belongsTo(mas_insurance_type, { as: "mas_insurance_type", foreignKey: "mas_insurance_type_id"});
  mas_insurance_type.hasMany(insurance, { as: "insurances", foreignKey: "mas_insurance_type_id"});
  sysm_users.belongsTo(sysm_roles, { as: "role", foreignKey: "roles_id"});
  sysm_roles.hasMany(sysm_users, { as: "sysm_users", foreignKey: "roles_id"});
  insurance.belongsTo(sysm_users, { as: "user", foreignKey: "user_id"});
  sysm_users.hasMany(insurance, { as: "insurances", foreignKey: "user_id"});

  return {
    insurance: insurance,
    insurance_category: insurance_category,
    insurance_mas_plan: insurance_mas_plan,
    insurance_mas_protection: insurance_mas_protection,
    insurance_price: insurance_price,
    mas_address_district: mas_address_district,
    mas_address_province: mas_address_province,
    mas_address_sub_district: mas_address_sub_district,
    mas_age_range: mas_age_range,
    mas_beneficiary_relationship: mas_beneficiary_relationship,
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
