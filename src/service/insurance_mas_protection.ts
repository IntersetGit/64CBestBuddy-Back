import { initModels, insurance_mas_protection } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateinsuranceMasProtectionService = async (model: any, transaction: any) => {
    return await insurance_mas_protection.bulkCreate(model, { transaction })
}

export const getByInsuranceIdInsuranceMasProtectionService = async (insurance_id: string) => {
    let sql = `SELECT * FROM insurance_mas_protection WHERE insurance_id = $1 ORDER BY sort ASC`
    return sequelizeString(sql, [insurance_id])
}



export default {
    bulkCreateinsuranceMasProtectionService,
    getByInsuranceIdInsuranceMasProtectionService
}