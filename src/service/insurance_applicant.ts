import { initModels, insurance_applicant } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { insuranceApplicantInterfaceAndBeneficiaryInterface } from '../interface/insuranceinterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const createInsuranceApplicantService = async (model: insuranceApplicantInterfaceAndBeneficiaryInterface) => {
    const id = uuidv4()
    await insurance_applicant.create({
        id,
        insurance_id: model.insurance_id,
        mas_title_name_id: model.mas_title_name_id,
        mas_marital_status_id: model.mas_marital_status_id,
        mas_occupation_id: model.mas_occupation_id,
        id_number: model.id_number,
        first_name: model.first_name,
        last_name: model.last_name,
        birthday: model.birthday,
        age: model.age,
        hight: model.hight,
        weight: model.weight,
        address: model.address,
        additional_address: model.additional_address,
        nationality: model.nationality,
        email: model.email,
        phone: model.phone,
        mas_province_id: model.mas_province_id,
        mas_district_id: model.mas_district_id,
        mas_sub_district_id: model.mas_sub_district_id,
        mas_payer_relation_id: model.mas_payer_relation_id
    })
    return id
}

export default {
    createInsuranceApplicantService
}