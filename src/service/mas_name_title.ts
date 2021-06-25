import { initModels, mas_title_name } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetNameTitleDataService = async() => {
    return await mas_title_name.findAll();
}

export default {
    GetNameTitleDataService
}