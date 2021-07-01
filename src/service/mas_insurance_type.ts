import { initModels, mas_insurance_type } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetMasInsuranceTypeService = async() => {
    return await mas_insurance_type.findAll();
}

export default {
    GetMasInsuranceTypeService
}