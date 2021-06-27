import { initModels, mas_marital_status } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetMaritalStatusDataService = async() => {
    return await mas_marital_status.findAll();
}

export default {
    GetMaritalStatusDataService
}