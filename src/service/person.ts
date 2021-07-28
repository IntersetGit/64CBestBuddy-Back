import { initModels, person } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { LoginInterface, UsersInterface } from '../interface/loginInterface'
import { v4 as uuid4 } from 'uuid'

initModels(sequelize);

export const createDatPersonService = async (model: UsersInterface, transaction: any = undefined) => {
    const id = uuid4();
    await person.create({
        id,
        user_id: model.user_id,
        mas_title_name_id: model.mas_title_name_id,
        first_name_th: model.first_name_th,
        first_name_en: model.first_name_en ?? undefined,
        last_name_th: model.last_name_th,
        last_name_en: model.last_name_en ?? undefined,
        nick_name_th: model.nick_name_th,
        nick_name_en: model.nick_name_en ?? undefined,
        gender: model.gender,
        birthday: model.birthday ?? undefined,
        email: model.email,
        id_card: model.id_card ?? undefined,
        tel: model.tel,
        passport_number: model.passport_number ?? undefined,
        insurance_code: model.insurance_code ?? undefined,
        created_by: model.user_id,
        created_date: new Date()
    }, { transaction })
}


export const editDatPersonService = async (model: UsersInterface, transaction: any = undefined) => {
    await person.update({
        mas_title_name_id: model.mas_title_name_id,
        first_name_th: model.first_name_th,
        first_name_en: model.first_name_en ?? undefined,
        last_name_th: model.last_name_th,
        last_name_en: model.last_name_en ?? undefined,
        nick_name_th: model.nick_name_th,
        nick_name_en: model.nick_name_en ?? undefined,
        gender: model.gender,
        birthday: model.birthday ?? undefined,
        email: model.email,
        id_card: model.id_card ?? undefined,
        tel: model.tel,
        passport_number: model.passport_number ?? undefined,
        insurance_code: model.insurance_code ?? undefined,
        updated_by: model.user_id,
        updated_date: new Date
    }, { where: { user_id: model.id } })
}

export const delDatPersonService = async (id: string) => {
    await person.destroy({
        where: { user_id: id }
    })
}

export default {
    createDatPersonService,
    editDatPersonService,
    delDatPersonService
}