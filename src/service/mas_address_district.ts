import { initModels, mas_address_district } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';
import { insuranceinterface, insurance_typeInterface, installmentInterface } from '../interface/insuranceinterface';

initModels(sequelize);

export const GetAllDistrictService = async () => {
    return await mas_address_district.findAll()
}

export default {
    GetAllDistrictService
}