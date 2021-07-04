import { initModels, mas_insurance_type } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetMasInsuranceTypeService = async () => {

    let sql = `SELECT COUNT(b.id) AS count, a.* 
    FROM mas_insurance_type a
    LEFT JOIN insurance b ON b.mas_insurance_type_id = a.id
    WHERE a.isuse = 1
    GROUP BY a.name
    ORDER BY a.sort`

    let count_sql = `
    SELECT COUNT(a.id) AS count FROM mas_insurance_type a
    INNER JOIN insurance b ON b.mas_insurance_type_id = a.id
    WHERE a.isuse = 1`

    return {
        data: await sequelizeString(sql),
        all_count: await sequelizeStringFindOne(count_sql)
    }
}

export default {
    GetMasInsuranceTypeService
}