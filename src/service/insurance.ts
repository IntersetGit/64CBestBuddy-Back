import { initModels, insurance } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';
import { insuranceinterface } from '../interface/insuranceinterface';

initModels(sequelize);

export const addInsuranceService = async (model: insuranceinterface) => {
    const id = uuidv4();
    
    await insurance.create({
        id,
        name: model.name,
        status: 1,
        isuse: 1,
    })
    return id
}

export const editInsuranceService = async (model: insuranceinterface) => {
    await insurance.update({
        name: model.name
    }, {where: {id: model.id}})

    return model.id
}

export const getAllInsuranceService = async () => {
    return await insurance.findAll({
        where: {isuse: 1}
    });
}


export const getByIdInsuranceService = async (id: string) => {

    let sql = `SELECT a.*, b.* FROM insurance a
    INNER JOIN insurance_mas_plan b ON b.insurance_id = a.id 
    WHERE a.id = '${id}' ORDER BY b.sort`
    
    return await sequelizeString(sql)
    
}


export const delInsuranceService = async (id: string) => {
    await insurance.destroy({
        where: {id}
    });

    return true
}


export default {
    addInsuranceService,
    editInsuranceService,
    getByIdInsuranceService,
    delInsuranceService
}