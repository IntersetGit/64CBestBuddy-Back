import { initModels, insurance_order } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const addInsuranceOrderService = async (model: any, transaction: any = null) => {
    const id = uuidv4();
    const _value: any = {
        id,
        protection_date_start: model.protection_date_start,
        protection_date_end: model.protection_date_end,
        prefix_id: model.prefix_id,
        first_name: model.first_name,
        last_name: model.last_name,
        mobile_phone: model.mobile_phone,
        email: model.email,
    }

    if (_value)

        await insurance_order.create(_value, { transaction });
    return id
}




export default {
    addInsuranceOrderService,
}