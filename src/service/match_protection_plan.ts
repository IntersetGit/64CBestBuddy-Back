import { initModels, match_protection_plan } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateMatchProtectionPlanService = async (model: any, transaction: any) => {
    return await match_protection_plan.bulkCreate(model, { transaction })
}


export default {
    bulkCreateMatchProtectionPlanService,
}