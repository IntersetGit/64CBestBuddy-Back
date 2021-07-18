import { initModels, insurance_price } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateInsurancePriceService = async (model: any, transaction: any) => {
    return await insurance_price.bulkCreate(model, { transaction })
}

export const getPriceInsuranceService = async (model: any) => {

    let sql = `SELECT b.id, b.age_range,
    (IF(d.status = 1, a.price_sale , a.price_normal)) AS price
    FROM insurance_price AS a
    INNER JOIN mas_age_range AS b ON a.mas_age_range_id = b.id
    INNER JOIN insurance_mas_plan AS c ON a.mas_plan_id = c.id
    INNER JOIN insurance AS d ON a.insurance_id = d.id
    WHERE a.insurance_id = $1
    AND $2 BETWEEN b.age_start AND b.age_end
    AND a.gender = (IF(d.is_one_price = 0, $3, 0))
    AND a.mas_plan_id = $4
    AND a.mas_installment_id = $5 `
    const data: any = await sequelizeString(sql, [model.insurance_id, model.age, model.gender, model.mas_plan_id, model.mas_installment_id])
    data.price = data.price ?? "-"
    return data
}


export default {
    bulkCreateInsurancePriceService,
}