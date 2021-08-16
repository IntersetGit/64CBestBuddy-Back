import { initModels, insurance_beneficiary } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const addInsuranceBeneficiaryService = async (model: any, transaction: any = null) => {
    const id = uuidv4();
    const _value: any = {
        id,
        insurance_order_id: model.insurance_order_id,
        prefix_id: model.prefix_id,
        first_name: model.first_name,
        last_name: model.last_name,
        beneficiary_id: model.beneficiary_id,
        ratio: model.ratio,
    }

    await insurance_beneficiary.create(_value, { transaction });
    return id
}

export const destroyInsuranceBeneficiaryService = async (id: any, transaction: any = null) => {
    await insurance_beneficiary.destroy({
        where: { id }, transaction
    });
    return true
}


export default {
    addInsuranceBeneficiaryService,
    destroyInsuranceBeneficiaryService,
}