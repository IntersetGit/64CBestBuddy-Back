import { initModels, mas_beneficiary_relationship } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const GetBeneficiaryRelationDataService = async () => {
    return await mas_beneficiary_relationship.findAll();
}

export default {
    GetBeneficiaryRelationDataService
}