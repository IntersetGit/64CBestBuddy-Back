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
        product_code: model.product_code,
        name: model.name,
        status: 0,
        isuse: 1,
        created_by: model.user_id,
        created_date: new Date()
    })
    return id
}

export const editInsuranceService = async (model: insuranceinterface) => {
    await insurance.update({
        product_code: model.product_code,
        name: model.name,
        isuse: model.isuse ?? undefined,
        updated_by: model.user_id,
        updated_date: new Date()
    }, { where: { id: model.id } })

    return model.id
}

export const getAllInsuranceService = async (model: any) => {
    let sql = `SELECT a.id , a.name , a.img_cover, a.img_header , a.details  , a.mas_insurance_type_id , irc.id AS category_id , irc.name AS category_name
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
    INNER JOIN insurance_category AS irc ON irc.id = a.insurance_category_id
    WHERE a.isuse = 1
    `

    if (model.mas_insurance_type_id) {
        sql += `AND a.mas_insurance_type_id = $2 `
    }

    if (model.insurance_category_id) sql += `AND irc.id = $1`

    if (model.order_by == "asc") sql += ` ORDER BY price ASC `
    else if (model.order_by == "desc") sql += ` ORDER BY price DESC `
    else sql += ` ORDER BY a.sort `


    return await sequelizeString(sql, [model.insurance_category_id, model.mas_insurance_type_id]);
}

export const getImagesHeaderInsuranceService = async (insurance_category_id: any) => {
    let sql = `SELECT a.img_header FROM insurance AS a WHERE a.isuse = 1`
    if (insurance_category_id) sql += ` AND a.insurance_category_id = '${insurance_category_id}'`

    sql += ` ORDER BY a.sort LIMIT 5`
    return await sequelizeString(sql);
}


export const getByIdInsuranceService = async (id: string) => {
    /** เอาอายุที่น้อย และมาก ที่สุดของแต่ละประกันใน subqurey */
    let sql = `
   
    SELECT 
    a.id
    ,a.insurance_category_id as category_id 
    ,irc.name as category_name
    ,a.product_code
    ,a.name
    ,a.img_header
    ,a.img_cover
    ,a.details
    ,a.note
    ,a.status
    ,a.percentage
    ,a.isuse
    ,a.sort
    ,a.is_one_price
    ,a.mas_insurance_type_id
    ,a.haed_highlight
    ,a.number_visitors as count
    ,(SELECT min(mar.age_start)
    FROM mas_age_range AS mar
    INNER JOIN insurance_price AS ip ON mar.id = ip.mas_age_range_id
    INNER JOIN insurance AS i ON i.id = ip.insurance_id
    WHERE ip.insurance_id = $1) as age_start
    ,(SELECT max(mar.age_end)
    FROM mas_age_range AS mar
    INNER JOIN insurance_price AS ip ON mar.id = ip.mas_age_range_id
    INNER JOIN insurance AS i ON i.id = ip.insurance_id
    WHERE ip.insurance_id = $1) as age_end

    FROM insurance AS a
    INNER JOIN insurance_category AS irc ON irc.id = a.insurance_category_id
    WHERE a.id = $1`

    const result_sql: any = await sequelizeStringFindOne(sql, [id])
    result_sql.count = result_sql.count + 1;
    await insurance.update({
        number_visitors: result_sql.count
    }, { where: { id } })

    return result_sql

}


export const delInsuranceService = async (id: string) => {
    await insurance.update({
        isuse: 2
    }, { where: { id } });

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

/** เลือกซื้อแผนประกัน */
export const getByInsuranceAndInstallmentService = async (model: any) => {
    let sql = `SELECT ir.id
    , ir.name AS insurance_name
    , mit.name AS insurance_type

    , (SELECT imp.name 
    FROM insurance_mas_plan imp 
    INNER JOIN insurance irr ON irr.id = imp.insurance_id
    WHERE imp.id = $2) AS plan_name

    , (SELECT mpp.value
    FROM insurance_mas_plan imp
    INNER JOIN insurance irr ON irr.id = imp.insurance_id
    INNER JOIN match_protection_plan mpp ON imp.id = mpp.mas_plan_id
    WHERE mpp.id = $3) AS value

    , (SELECT ip.price_normal
    FROM insurance_mas_plan imp
    INNER JOIN insurance irr ON irr.id = imp.insurance_id
    INNER JOIN insurance_price ip ON imp.id = ip.mas_plan_id
    INNER JOIN mas_installment mi ON ip.mas_installment_id = mi.id
    INNER JOIN mas_age_range mar ON ip.mas_age_range_id = mar.id
    WHERE irr.id = $1
    AND imp.id = $2
    AND mi.id = $4
    AND mar.id = $5) AS price

    FROM insurance ir
    INNER JOIN mas_insurance_type mit ON ir.mas_insurance_type_id = mit.id
    WHERE ir.id = $1
    `
    const result_sql: any = await sequelizeStringFindOne(sql, [model.id, model.mas_plan_id, model.match_id, model.mas_installment_id, model.mas_age_range_id])
    result_sql.price = result_sql.price ?? '-'
    return result_sql
}


export default {
    addInsuranceService,
    editInsuranceService,
    getByIdInsuranceService,
    delInsuranceService,
    createInsuranceService,
    getImagesHeaderInsuranceService,
    getByInsuranceAndInstallmentService
}