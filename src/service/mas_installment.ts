import { initModels, mas_installment } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);


export const GetMasInstallmentDataService = async() => {
    return await mas_installment.findAll({
        order: [['sort', 'asc']]
    });
}

export default {
    GetMasInstallmentDataService
}