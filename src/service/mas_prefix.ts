import { initModels, mas_prefix } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const GetmasterPrefixService = () => {
    return mas_prefix.findAll()
}

export default {
    GetmasterPrefixService
}

