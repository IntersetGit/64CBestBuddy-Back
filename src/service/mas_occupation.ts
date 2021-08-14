import { initModels, mas_occupation } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetOccupationDataService = async (search: any) => {
    let SQL = `SELECT * FROM mas_occupation
    WHERE id is not null `

    if (search) {
        if (search === 'falcon') {
            SQL += ` AND code_falcon  is NOT NULL `
        } else if (search === 'cigna') {
            SQL += ` AND code_cigna  is NOT NULL `
        } else {
            SQL += ` AND id is NULL `
        }
    }
    return await sequelizeString(SQL)
    // return await mas_occupation.findAll();
}

export default {
    GetOccupationDataService
}