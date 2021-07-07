import { initModels, insurance } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';
import { insuranceinterface, insurance_typeInterface, installmentInterface } from '../interface/insuranceinterface';

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

export const getAllInsuranceService = async (model: installmentInterface) => {
    let sql = `SELECT a.id , a.name , a.img_header, a.img_cover, a.details , a.percentage , a.status , a.is_one_price , a.mas_insurance_type_id
    ,(SELECT name FROM mas_insurance_type WHERE id = a.mas_insurance_type_id) AS mas_insurance_type_name
    ,(SELECT MIN((IF(a.status = 1, b.price_sale, b.price_normal))) FROM insurance_price AS b
    WHERE insurance_id = a.id
    AND mas_installment_id = '${model.installment_id}'
    AND price_normal != 0) as price
    ,(SELECT MIN((IF(a.status = 1, b.price_normal, null))) FROM insurance_price AS b
    WHERE insurance_id = a.id
    AND mas_installment_id = '${model.installment_id}'
    AND price_normal != 0) as price_full

    FROM insurance AS a
    WHERE a.isuse = 1
    `

    if (model.insurance_type_id != "" && model.insurance_type_id != null) {
        sql += `AND (SELECT id FROM mas_insurance_type WHERE id = a.mas_insurance_type_id) = '${model.insurance_type_id}' `
    }

    sql += `ORDER BY a.sort`

    return await sequelizeString(sql);
}


export const getByIdInsuranceService = async (id: string) => {

    let sql = `
    SELECT i.id, i.name, i.product_code
    ,(SELECT JSON_ARRAY(JSON_OBJECT("id", imp.id, "details", imp.details)) 
    FROM insurance_mas_protection AS imp WHERE imp.insurance_id IN 
    (SELECT impt.id FROM insurance AS impt WHERE impt.id)) AS detail
    FROM insurance AS i

    SELECT i.id, i.name, i.product_code
    ,(SELECT JSON_ARRAYAGG((JSON_OBJECT("id", imp.id, "details", imp.details)))
    FROM insurance_mas_protection AS imp WHERE imp.insurance_id IN (multiple )AS detail
    FROM insurance AS i
    `
    return sequelizeString(sql);
}


export const delInsuranceService = async (id: string) => {
    await insurance.destroy({
        where: { id }
    });

    return true
}


export const createInsuranceService = async (model: any, transaction: any) => {
    await insurance.create({
        id: model.id,
        product_code: model.product_code,
        name: model.name,
        img_header: model.img_header,
        img_cover: model.img_cover,
        details: model.details,
        status: model.status,
        percentage: model.percentage,
        is_one_price: model.is_one_price,
        mas_insurance_type_id: model.mas_insurance_type_id,
        isuse: 1,
    }, { transaction })
    return model.id
}


export default {
    addInsuranceService,
    editInsuranceService,
    getByIdInsuranceService,
    delInsuranceService,
    createInsuranceService
}