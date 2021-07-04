import { initModels, insurance } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';
import { insuranceinterface, insurance_type } from '../interface/insuranceinterface';

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
    }, { where: { id: model.id } })

    return model.id
}

export const getAllInsuranceService = async (model: insurance_type) => {
    let sql = `SELECT a.*
    ,(SELECT b.price_normal FROM insurance_price b
    INNER JOIN mas_installment AS c ON b.mas_installment_id = c.id
    WHERE b.id IS NOT NULL LIMIT 1) AS price_normal
    ,(SELECT imp.details FROM insurance_mas_protection AS imp WHERE a.id IN
    (SELECT a.id FROM insurance_mas_protection AS a WHERE a.id = 'e7956b7e-d83b-4c71-9914-4f9010647f47')) AS details

    FROM insurance AS a
    INNER JOIN mas_insurance_type AS d ON a.mas_insurance_type_id = d.id
    WHERE a.isuse = 1
    `
    if (model.insurance_id != null && model.insurance_id != "") {
        sql += `AND d.id = '${model.insurance_id}'`
    }

    sql += `ORDER BY a.sort`

    return await sequelizeString(sql);
}


export const getByIdInsuranceService = async (id: string) => {

    let sql = `SELECT a.*, b.* FROM insurance a
    INNER JOIN insurance_mas_plan b ON b.insurance_id = a.id 
    WHERE a.id = '${id}' ORDER BY b.sort`

    return await sequelizeString(sql)

}


export const delInsuranceService = async (id: string) => {
    await insurance.destroy({
        where: { id }
    });

    return true
}


export default {
    addInsuranceService,
    editInsuranceService,
    getByIdInsuranceService,
    delInsuranceService
}