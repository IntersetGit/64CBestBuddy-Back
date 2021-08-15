import { initModels, insurance_category } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { insuranceApplicantInterfaceAndBeneficiaryInterface } from '../interface/insuranceinterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetAllInsuranceCategoryService = async () => {
    return await insurance_category.findAll()
}

export default {
    GetAllInsuranceCategoryService
}