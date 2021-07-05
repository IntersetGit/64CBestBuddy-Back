import { initModels, insurance_price } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateInsurancePriceService = async (model: any, transaction: any) => {
    return await insurance_price.bulkCreate(model, { transaction })
}


export default {
    bulkCreateInsurancePriceService,
}