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

export const getAllInsuranceService = async (model: any) => {
    let sql = `SELECT a.id , a.name ,  a.img_cover, a.img_header , a.details  , a.mas_insurance_type_id
    ,(SELECT name FROM mas_insurance_type WHERE id = a.mas_insurance_type_id) AS mas_insurance_type_name

    ,(SELECT IF(a.status = 1, price_sale, price_normal) FROM insurance_price
    WHERE insurance_id = a.id
    AND is_show_price = 1
    LIMIT 1) AS price

    ,(SELECT SUBSTRING(mins.name, 4)  FROM insurance_price AS pins
    INNER JOIN mas_installment AS mins ON pins.mas_installment_id = mins.id
    WHERE insurance_id = a.id
    AND is_show_price = 1
    LIMIT 1) AS installment_name
    FROM insurance AS a
    WHERE a.isuse = 1
    `

    if (model.mas_insurance_type_id) {
        sql += `AND a.mas_insurance_type_id = '${model.mas_insurance_type_id}' `
    }

    if (model.order_by == "asc") sql += ` ORDER BY price ASC `
    else if (model.order_by == "desc") sql += ` ORDER BY price DESC `
    else sql += ` ORDER BY a.sort `


    return await sequelizeString(sql);
}

export const getImagesHeaderInsuranceService = async () => {
    return await sequelizeString(`SELECT a.img_header FROM insurance AS a WHERE a.isuse = 1 AND a.img_header IS NOT null ORDER BY a.sort LIMIT 5`);
}


export const getByIdInsuranceService = async (id: string) => {
    /** เอาอายุที่น้อย และมาก ที่สุดของแต่ละประกันใน subqurey */
    let sql = `
    SELECT a.*
    ,(SELECT min(mar.age_start)
    FROM mas_age_range AS mar
    INNER JOIN insurance_price AS ip ON mar.id = ip.mas_age_range_id
    INNER JOIN insurance AS i ON i.id = ip.insurance_id) as age_young
    ,(SELECT max(mar.age_start)
    FROM mas_age_range AS mar
    INNER JOIN insurance_price AS ip ON mar.id = ip.mas_age_range_id
    INNER JOIN insurance AS i ON i.id = ip.insurance_id) as age_old

    FROM insurance AS a
    WHERE a.id = $1`

    return sequelizeStringFindOne(sql, [id])
    // return insurance.findByPk(id)
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
    createInsuranceService,
    getImagesHeaderInsuranceService
}