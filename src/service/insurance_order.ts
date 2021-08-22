import { initModels, insurance_order } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const addInsuranceOrderService = async (model: any, transaction: any = null) => {
    const id = uuidv4();
    const _value: any = {
        id,
        insurance_id: model.insurance_id,
        protection_date_start: model.protection_date_start,
        protection_date_end: model.protection_date_end,
        prefix_id: model.prefix_id,
        first_name: model.first_name,
        last_name: model.last_name,
        mobile_phone: model.mobile_phone,
        email: model.email,
        status: model.status ?? 1,
    }

    if (model.insurance_code) _value.insurance_code = model.insurance_code;
    if (model.phone) _value.phone = model.phone;
    if (model.birthday) _value.birthday = model.birthday;
    if (model.age) _value.age = model.age;
    if (model.occupation_id) _value.occupation_id = model.occupation_id;
    if (model.height) _value.height = model.height;
    if (model.weight) _value.weight = model.weight;
    if (model.bmi) _value.bmi = model.bmi;
    if (model.insurance_price_id) _value.insurance_price_id = model.insurance_price_id;
    if (model.gender_id) _value.gender_id = model.gender_id;
    if (model.type_card_number_id) _value.type_card_number_id = model.type_card_number_id;
    if (model.card_number) _value.card_number = model.card_number;
    if (model.house_no) _value.house_no = model.house_no;
    if (model.village_no) _value.village_no = model.village_no;
    if (model.lane) _value.lane = model.lane;
    if (model.village) _value.village = model.village;
    if (model.road) _value.road = model.road;
    if (model.province_id) _value.province_id = model.province_id;
    if (model.district_id) _value.district_id = model.district_id;
    if (model.sub_district_id) _value.sub_district_id = model.sub_district_id;
    if (model.beneficiary_status) _value.beneficiary_status = model.beneficiary_status;
    if (model.insured_status) _value.insured_status = model.insured_status;
    if (model.prefix_id_insured) _value.prefix_id_insured = model.prefix_id_insured;
    if (model.first_name_insured) _value.first_name_insured = model.first_name_insured;
    if (model.last_name_insured) _value.last_name_insured = model.last_name_insured;
    if (model.type_card_number_id_insured) _value.type_card_number_id_insured = model.type_card_number_id_insured;
    if (model.card_number_insured) _value.card_number_insured = model.card_number_insured;
    if (model.gender_id_insured) _value.gender_id_insured = model.gender_id_insured;
    if (model.mobile_phone_insured) _value.mobile_phone_insured = model.mobile_phone_insured;
    if (model.phone_insured) _value.phone_insured = model.phone_insured;
    if (model.email_insured) _value.email_insured = model.email_insured;
    if (model.beneficiary_id_insured) _value.beneficiary_id_insured = model.beneficiary_id_insured;
    if (model.house_no_insured) _value.house_no_insured = model.house_no_insured;
    if (model.village_no_insured) _value.village_no_insured = model.village_no_insured;
    if (model.lane_insured) _value.lane_insured = model.lane_insured;
    if (model.village_insured) _value.village_insured = model.village_insured;
    if (model.road_insured) _value.road_insured = model.road_insured;
    if (model.province_id_insured) _value.province_id_insured = model.province_id_insured;
    if (model.district_id_insured) _value.district_id_insured = model.district_id_insured;
    if (model.sub_district_id_insured) _value.sub_district_id_insured = model.sub_district_id_insured;
    if (model.status_tax) _value.status_tax = model.status_tax;

    await insurance_order.create(_value, { transaction });
    return id
}

export const updateInsuranceOrderService = async (model: any, transaction: any = null) => {

    const _value: any = {}
    if (model.insurance_id) _value.insurance_id = model.insurance_id;
    if (model.protection_date_start) _value.protection_date_start = model.protection_date_start;
    if (model.protection_date_end) _value.protection_date_end = model.protection_date_end;
    if (model.prefix_id) _value.prefix_id = model.prefix_id;
    if (model.first_name) _value.first_name = model.first_name;
    if (model.last_name) _value.last_name = model.last_name;
    if (model.mobile_phone) _value.mobile_phone = model.mobile_phone;
    if (model.email) _value.email = model.email;
    if (model.insurance_code) _value.insurance_code = model.insurance_code;
    if (model.phone) _value.phone = model.phone;
    if (model.birthday) _value.birthday = model.birthday;
    if (model.age) _value.age = model.age;
    if (model.occupation_id) _value.occupation_id = model.occupation_id;
    if (model.height) _value.height = model.height;
    if (model.weight) _value.weight = model.weight;
    if (model.bmi) _value.bmi = model.bmi;
    if (model.insurance_price_id) _value.insurance_price_id = model.insurance_price_id;
    if (model.gender_id) _value.gender_id = model.gender_id;
    if (model.type_card_number_id) _value.type_card_number_id = model.type_card_number_id;
    if (model.card_number) _value.card_number = model.card_number;
    if (model.house_no) _value.house_no = model.house_no;
    if (model.village_no) _value.village_no = model.village_no;
    if (model.lane) _value.lane = model.lane;
    if (model.village) _value.village = model.village;
    if (model.road) _value.road = model.road;
    if (model.province_id) _value.province_id = model.province_id;
    if (model.district_id) _value.district_id = model.district_id;
    if (model.sub_district_id) _value.sub_district_id = model.sub_district_id;
    if (model.beneficiary_status) _value.beneficiary_status = model.beneficiary_status;
    if (model.insured_status) _value.insured_status = model.insured_status;
    if (model.prefix_id_insured || model.prefix_id_insured === null) _value.prefix_id_insured = model.prefix_id_insured;
    if (model.first_name_insured || model.first_name_insured === null) _value.first_name_insured = model.first_name_insured;
    if (model.last_name_insured || model.last_name_insured === null) _value.last_name_insured = model.last_name_insured;
    if (model.type_card_number_id_insured || model.type_card_number_id_insured === null) _value.type_card_number_id_insured = model.type_card_number_id_insured;
    if (model.card_number_insured || model.card_number_insured === null) _value.card_number_insured = model.card_number_insured;
    if (model.gender_id_insured || model.gender_id_insured === null) _value.gender_id_insured = model.gender_id_insured;
    if (model.mobile_phone_insured || model.mobile_phone_insured === null) _value.mobile_phone_insured = model.mobile_phone_insured;
    if (model.phone_insured || model.phone_insured === null) _value.phone_insured = model.phone_insured;
    if (model.email_insured || model.email_insured === null) _value.email_insured = model.email_insured;
    if (model.beneficiary_id_insured || model.beneficiary_id_insured === null) _value.beneficiary_id_insured = model.beneficiary_id_insured;
    if (model.house_no_insured || model.house_no_insured === null) _value.house_no_insured = model.house_no_insured;
    if (model.village_no_insured || model.village_no_insured === null) _value.village_no_insured = model.village_no_insured;
    if (model.lane_insured || model.lane_insured === null) _value.lane_insured = model.lane_insured;
    if (model.village_insured || model.village_insured === null) _value.village_insured = model.village_insured;
    if (model.road_insured || model.road_insured === null) _value.road_insured = model.road_insured;
    if (model.province_id_insured || model.province_id_insured === null) _value.province_id_insured = model.province_id_insured;
    if (model.district_id_insured || model.district_id_insured === null) _value.district_id_insured = model.district_id_insured;
    if (model.sub_district_id_insured || model.sub_district_id_insured === null) _value.sub_district_id_insured = model.sub_district_id_insured;
    if (model.status_tax) _value.status_tax = model.status_tax;
    if (model.status) _value.status = model.status;

    await insurance_order.update(_value, { where: { id: model.id }, transaction });
    return model.id
}


export const getByIdInsuranceOrderService = async (id: string) => {
    let sql = `
    SELECT
    *,
        (SELECT CONCAT('[', GROUP_CONCAT(JSON_OBJECT(
        'id', aa.id
        ,'insurance_order_id', aa.insurance_order_id
        ,'prefix_id', aa.prefix_id
        ,'prefix_name', bb.name
        ,'first_name', aa.first_name
        ,'last_name', aa.last_name
        ,'beneficiary_id', aa.beneficiary_id
        ,'ratio', aa.ratio
        ,'sort', aa.sort
        ) ORDER BY aa.sort ASC), ']')
        
    FROM insurance_beneficiary AS aa
    INNER JOIN mas_prefix AS bb ON aa.prefix_id = bb.id
    WHERE a.id = aa.insurance_order_id) AS beneficiary
    
	,(SELECT postal_code FROM mas_address_sub_district WHERE id = a.sub_district_id) AS postal_code
	,(SELECT postal_code FROM mas_address_sub_district WHERE id = a.sub_district_id_insured) AS postal_code_insured

	,(SELECT risk_class_falcon FROM mas_occupation WHERE id = a.occupation_id) AS occupation_risk_class

    ,(SELECT IF(isr.status = 1 , ip.price_sale , ip.price_normal)
	FROM insurance_price AS ip
	INNER JOIN insurance AS isr ON isr.id = ip.insurance_id
	WHERE ip.id = a.insurance_price_id) AS price

	,(SELECT mi.name
	FROM insurance_price AS ip
	INNER JOIN mas_installment AS mi ON mi.id = ip.mas_installment_id
	WHERE ip.id = a.insurance_price_id ) AS installment_name

    ,(SELECT mas_plan_id FROM insurance_price WHERE id = a.insurance_price_id) AS insurance_plan_id
    
    FROM insurance_order AS a
    WHERE a.id = $1 `
    return sequelizeStringFindOne(sql, [id])
}



export default {
    addInsuranceOrderService,
    updateInsuranceOrderService,
}