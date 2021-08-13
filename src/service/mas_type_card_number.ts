import { initModels, mas_type_card_number } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetTypeCardNumberDataService = async () => {
    return await mas_type_card_number.findAll();
}

export default {
    GetTypeCardNumberDataService
}