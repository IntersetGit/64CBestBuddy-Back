import { initModels, mas_age_range } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);


export const GetMasAgeRangeDataService = async () => {
    return await mas_age_range.findAll({
        order: [['sort', 'asc']]
    });
}

export default {
    GetMasAgeRangeDataService
}