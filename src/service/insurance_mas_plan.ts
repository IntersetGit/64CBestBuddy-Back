import { initModels, insurance_mas_plan } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateInsuranceMasPlanService = async (model: any, transaction: any) => {
    return await insurance_mas_plan.bulkCreate(model, { transaction })
}


export default {
    bulkCreateInsuranceMasPlanService,
}