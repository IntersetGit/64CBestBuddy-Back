import { initModels, mas_payer_relation } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetPayerRelationDataService = async() => {
    return await mas_payer_relation.findAll();
}

export default {
    GetPayerRelationDataService
}