import type { Sequelize, Model } from "sequelize";
import { SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { mas_beneficiary_relation } from "./mas_beneficiary_relation";
import type { mas_beneficiary_relationAttributes, mas_beneficiary_relationCreationAttributes } from "./mas_beneficiary_relation";
import { mas_district } from "./mas_district";
import type { mas_districtAttributes, mas_districtCreationAttributes } from "./mas_district";
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

export {
  SequelizeMeta,
  mas_beneficiary_relation,
  mas_district,
  mas_marital_status,
  mas_occupation,
  mas_payer_relation,
  mas_province,
  mas_ref_policy_rel,
  mas_sub_district,
  mas_title_name,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  mas_beneficiary_relationAttributes,
  mas_beneficiary_relationCreationAttributes,
  mas_districtAttributes,
  mas_districtCreationAttributes,
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
};

export function initModels(sequelize: Sequelize) {
  SequelizeMeta.initModel(sequelize);
  mas_beneficiary_relation.initModel(sequelize);
  mas_district.initModel(sequelize);
  mas_marital_status.initModel(sequelize);
  mas_occupation.initModel(sequelize);
  mas_payer_relation.initModel(sequelize);
  mas_province.initModel(sequelize);
  mas_ref_policy_rel.initModel(sequelize);
  mas_sub_district.initModel(sequelize);
  mas_title_name.initModel(sequelize);

  mas_sub_district.belongsTo(mas_district, { as: "district", foreignKey: "district_id"});
  mas_district.hasMany(mas_sub_district, { as: "mas_sub_districts", foreignKey: "district_id"});
  mas_district.belongsTo(mas_province, { as: "province", foreignKey: "province_id"});
  mas_province.hasMany(mas_district, { as: "mas_districts", foreignKey: "province_id"});

  return {
    SequelizeMeta: SequelizeMeta,
    mas_beneficiary_relation: mas_beneficiary_relation,
    mas_district: mas_district,
    mas_marital_status: mas_marital_status,
    mas_occupation: mas_occupation,
    mas_payer_relation: mas_payer_relation,
    mas_province: mas_province,
    mas_ref_policy_rel: mas_ref_policy_rel,
    mas_sub_district: mas_sub_district,
    mas_title_name: mas_title_name,
  };
}
