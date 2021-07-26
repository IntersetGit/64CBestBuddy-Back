import { initModels, sysm_users } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { v4 as uuid4 } from 'uuid';
import { LoginInterface, UsersInterface } from '../interface/loginInterface'

initModels(sequelize);

export const registerService = async (model: UsersInterface, transaction: any = undefined) => {
    const id = uuid4();
    await sysm_users.create({
        id,
        username: model.username,
        password: model.password,
        email: model.email,
        roles_id: model.roles_id,
        isuse: 1,
        status_login: 0,
        created_by: model.user_id ?? id,
        created_date: new Date(),
    }, { transaction })
    return id
}

export const filterUsernameUsersService = async (username: string) => {
    return await sequelizeStringFindOne(`
    SELECT a.* , b.first_name_th ,b.last_name_th , b.first_name_en, b.last_name_en ,
    (SELECT roles_name FROM sysm_roles WHERE id = a.roles_id) AS roles_name
    FROM sysm_users as a
    INNER JOIN person as b ON b.user_id = a.id
    WHERE UPPER(a.username)  = UPPER($1)
    `, [username]);
}

export const updateService = async (model: UsersInterface, transaction: any = undefined) => {
    await sysm_users.update({
        username: model.username,
        password: model.password,
        email: model.email,
        roles_id: model.roles_id,
        isuse: 1,
        status_login: 1,
    }, { where: { id: model.id } })
}

export const updateStatusUsersService = async (id: string) => {
    await sysm_users.update({
        status_login: 1,
        updated_by: id,
        updated_date: new Date()
    }, { where: { id } })
}

export const delUserService = async (id: string) => {
    await sysm_users.destroy({
        where: { id }
    })
}

export default {
    registerService,
    filterUsernameUsersService,
    updateStatusUsersService,
    delUserService
}