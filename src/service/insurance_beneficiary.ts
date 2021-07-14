import { initModels, insurance_beneficiary } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { insuranceApplicantInterfaceAndBeneficiaryInterface } from '../interface/insuranceinterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);


export const createInsuranceBeneficiaryService = async (model: insuranceApplicantInterfaceAndBeneficiaryInterface, applicant_id: string) => {
    const id = uuidv4();
    await insurance_beneficiary.create({
        id,
        mas_title_name_id: model.mas_title_name_id,
        mas_payer_relation_id: model.mas_payer_relation_id,
        insurance_applicant_id: applicant_id,
        first_name: model.first_name,
        last_name: model.last_name
    })
    return id
}

export default {
    createInsuranceBeneficiaryService
}