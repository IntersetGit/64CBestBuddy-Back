import { initModels, mas_installment } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);


export const GetMasInstallmentDataService = async () => {
    return await mas_installment.findAll({
        order: [['sort', 'asc']]
    });
}

export const getInstallmentByIdInsuranceService = async (insurance_id: string) => {
    let sql = ` SELECT b.id AS id , b.name AS name , b.sort AS sort
    FROM insurance_price AS a
    INNER JOIN mas_installment AS b ON a.mas_installment_id = b.id
    WHERE a.insurance_id = $1
    GROUP BY id , name , sort
    ORDER BY b.sort `
    return sequelizeString(sql, [insurance_id])
}


export default {
    GetMasInstallmentDataService,
    getInstallmentByIdInsuranceService
}