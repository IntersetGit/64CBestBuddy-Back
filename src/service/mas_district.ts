import { initModels, mas_district } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetDistrictDataService = async() => {
    return await mas_district.findAll();
}

export default {
    GetDistrictDataService
}