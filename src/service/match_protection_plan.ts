import { initModels, match_protection_plan } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';

initModels(sequelize);

export const bulkCreateMatchProtectionPlanService = async (model: any, transaction: any) => {
    return await match_protection_plan.bulkCreate(model, { transaction })
}

export const getDataByProtectionIdService = async (protection_id: string) => {

    let sql = ` SELECT a.id,
    b.id AS mas_plan_id ,
    c.id AS mas_protection_id,
    a.value

    FROM match_protection_plan AS a
    INNER JOIN insurance_mas_plan AS b ON a.mas_plan_id = b.id
    INNER JOIN insurance_mas_protection AS c ON a.mas_protection_id = c.id
    WHERE a.mas_protection_id = $1
    ORDER BY b.sort ASC `

    return await sequelizeString(sql, [protection_id])
}



export default {
    getDataByProtectionIdService,
    bulkCreateMatchProtectionPlanService,
}