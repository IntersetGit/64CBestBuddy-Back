import { initModels, sysm_users } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { LoginInterface, UsersInterface } from '../interface/loginInterface'
import { v4 as uuid4 } from 'uuid'

initModels(sequelize);

export const createDatPersonService = async (model: any, transaction: any = undefined) => {
    const id = uuid4();
    // await person.create({
    //     id,
    //     user_id: model.id_user,
    //     mas_title_name_id: model.mas_title_name_id,
    //     first_name_th: model.first_name_th,
    //     first_name_en: model.first_name_en ?? undefined,
    //     last_name_th: model.last_name_th,
    //     last_name_en: model.last_name_en ?? undefined,
    //     nick_name_th: model.nick_name_th,
    //     nick_name_en: model.nick_name_en ?? undefined,
    //     gender: model.gender,
    //     birthday: model.birthday ?? undefined,
    //     email: model.email,
    //     id_card: model.id_card ?? undefined,
    //     tel: model.tel,
    //     passport_number: model.passport_number ?? undefined,
    //     insurance_code: model.insurance_code ?? undefined,
    //     created_by: model.user_id,
    //     created_date: new Date()
    // }, { transaction })
}


export const editDatPersonService = async (model: any, transaction: any = undefined) => {
    const _model: any = {
        updated_by: model.user_id,
        updated_date: new Date
    }

    if (model.mas_title_name_id) _model.mas_title_name_id = model.mas_title_name_id
    if (model.first_name_th) _model.first_name_th = model.first_name_th
    if (model.first_name_en) _model.first_name_en = model.first_name_en
    if (model.last_name_th) _model.last_name_th = model.last_name_th
    if (model.last_name_en) _model.last_name_en = model.last_name_en
    if (model.nick_name_th) _model.nick_name_th = model.nick_name_th
    if (model.nick_name_en) _model.nick_name_en = model.nick_name_en
    if (model.gender) _model.gender = model.gender
    if (model.birthday) _model.birthday = model.birthday
    if (model.email) _model.email = model.email
    if (model.id_card) _model.id_card = model.id_card
    if (model.tel) _model.tel = model.tel
    if (model.passport_number) _model.passport_number = model.passport_number
    if (model.insurance_code) _model.insurance_code = model.insurance_code

    // await person.update(_model, { where: { user_id: model.id }, transaction })
}

export const delDatPersonService = async (id: string) => {
    // await person.destroy({
    //     where: { user_id: id }
    // })
}

export default {
    createDatPersonService,
    editDatPersonService,
    delDatPersonService
}