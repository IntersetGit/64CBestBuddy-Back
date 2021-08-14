import { initModels, mas_address_sub_district } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';
import { insuranceinterface, insurance_typeInterface, installmentInterface } from '../interface/insuranceinterface';

initModels(sequelize);

export const GetAllSubDistrictService = async (search: any) => {
    let SQL = `SELECT * FROM mas_address_sub_district
    WHERE id is NOT NULL `

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
    // return await mas_address_sub_district.findAll()
}

export default {
    GetAllSubDistrictService
}