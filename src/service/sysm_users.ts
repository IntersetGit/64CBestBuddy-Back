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
        created_by: model.user_id ? model.user_id : id,
        created_date: new Date(),
    }, { transaction })
    return id
}

export const filterUsernameUsersService = async (username: string) => {
    return await sequelizeStringFindOne(`
    SELECT a.* ,
    (SELECT roles_name FROM sysm_roles WHERE id = a.roles_id) AS roles_name
    FROM sysm_users as a
    WHERE UPPER(a.username)  = UPPER($1)
    `, [username]);
}

export const updateService = async (model: UsersInterface, transaction: any = undefined) => {

    const _model: any = {
        isuse: 1,
        updated_by: model.user_id,
        updated_date: new Date()
    }
    if (model.username) _model.username = model.username
    if (model.email) _model.email = model.email
    if (model.roles_id) _model.roles_id = model.roles_id

    await sysm_users.update(_model, { where: { id: model.id }, transaction })
}

export const updateStatusUsersService = async (id: string, refresh_token: string) => {
    await sysm_users.update({
        status_login: 1,
        refresh_token: undefined,
        updated_by: id,
        updated_date: new Date()
    }, { where: { id } })
}

export const delUserService = async (id: string) => {
    await sysm_users.update({
        isuse: 0
    }, { where: { id } })
}

export const getByidUserService = async (id: any) => {
    return await sequelizeStringFindOne(`
        SELECT su.id
        ,su.username
        ,su.email
        ,su.isuse
        ,su.mas_prefix_id
        ,(SELECT name FROM mas_prefix WHERE id = su.mas_prefix_id ) AS prefix
        ,su.first_name
        ,su.last_name
        ,su.nick_name
        ,su.tel
        ,su.id_card
        ,su.birthday
        ,su.gender
        ,su.passport_number
        ,su.insurance_code
        ,(SELECT id FROM sysm_roles WHERE id = su.roles_id) AS role_id
        ,(SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) AS role
        ,su.created_by
        ,su.created_date
        ,su.updated_by
        ,su.updated_date

        FROM sysm_users su
        WHERE su.isuse = 1 AND su.id = $1`, [id])
}


export const getAllusersService = async (search: any, limit: any) => {
    let sql = `
        SELECT su.id
        ,su.username
        ,su.email
        ,su.isuse
        ,(SELECT name FROM mas_prefix WHERE id = su.mas_prefix_id ) AS prefix
        ,su.first_name
        ,su.last_name
        ,su.nick_name
        ,su.tel
        ,su.id_card
        ,su.birthday
        ,su.gender
        ,su.passport_number
        ,su.insurance_code
        ,(SELECT id FROM sysm_roles WHERE id = su.roles_id) AS role_id
        ,(SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) AS role
        ,su.created_by
        ,su.created_date
        ,su.updated_by
        ,su.updated_date

        FROM sysm_users su
        WHERE su.isuse = 1`

    let sql_count = `
        SELECT COUNT(su.id) AS count

        FROM sysm_users su
        WHERE su.isuse = 1`

    if (search) {
        sql += ` AND su.username LIKE '%${search}%'
        OR su.email LIKE '%${search}%'
        OR su.first_name LIKE '%${search}%'
        OR su.last_name LIKE '%${search}%' 
        OR (SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) LIKE '%${search}%' `

        sql_count += ` AND su.username LIKE '%${search}%'
        OR su.email LIKE '%${search}%'
        OR su.first_name LIKE '%${search}%'
        OR su.last_name LIKE '%${search}%' 
        OR (SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) LIKE '%${search}%' `
    }

    sql += ` LIMIT ${limit} `

    const result_count: any = await sequelizeString(sql_count)
    const count: number = result_count.length > 0 ? Number(result_count[0].count) : 0
    return {
        data: await sequelizeString(sql),
        count
    }

}

export const getByiduserService_ = async (id: string) => {
    return await sysm_users.findByPk(id)
}

export default {
    registerService,
    filterUsernameUsersService,
    updateStatusUsersService,
    delUserService,
    getByidUserService,
    getByiduserService_,
    getAllusersService
}