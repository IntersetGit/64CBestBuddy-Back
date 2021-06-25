import { initModels, mas_province } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetProvicedataService = async() => {
    return await mas_province.findAll();
}

export default {
    GetProvicedataService
}