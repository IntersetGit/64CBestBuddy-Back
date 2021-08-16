import { initModels, insurance_order } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const addInsuranceService = async (model: any) => {
    const id = uuidv4();

    // await insurance_order.create({
    //     id,
    //     product_code: model.product_code,
    //     name: model.name,
    //     status: 0,
    //     isuse: 1,
    //     created_by: model.user_id,
    //     created_date: new Date()
    // })
    return id
}




export default {
    addInsuranceService,
}