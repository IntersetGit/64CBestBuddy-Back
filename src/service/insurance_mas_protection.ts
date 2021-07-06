import { initModels, insurance_mas_protection } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateinsuranceMasProtectionService = async (model: any, transaction: any) => {
    return await insurance_mas_protection.bulkCreate(model, { transaction })
}


export default {
    bulkCreateinsuranceMasProtectionService,
}