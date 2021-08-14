import { initModels, mas_prefix } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const GetmasterPrefixService = async (search: any) => {
    let SQL = `SELECT * FROM mas_prefix
    WHERE isuse = 1  `

    if (search) {
        if (search === 'falcon') {
            SQL += ` AND code_falcon  is NOT NULL `
        } else if (search === 'cigna') {
            SQL += ` AND code_cigna  is NOT NULL `
        } else {
            SQL += ` AND isuse is NULL `
        }
    }
    return await sequelizeString(SQL)
    // return mas_prefix.findAll()
}

export default {
    GetmasterPrefixService
}

