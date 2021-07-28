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
        email: model.email,
        roles_id: model.roles_id,
        isuse: 1,
    }, { where: { id: model.id } })
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
        isuse: 2
    }, { where: { id } })
}

export const getByidUserService = async (id: any) => {
    return await sequelizeStringFindOne(`
        SELECT su.id
        ,su.username
        ,su.email
        ,(SELECT title_name FROM mas_title_name WHERE id = ps.mas_title_name_id ) AS title_name
        ,ps.first_name_th
        ,ps.last_name_en
        ,(SELECT id FROM sysm_roles WHERE id = su.roles_id) AS role_id
        ,(SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) AS role

        FROM sysm_users su
        INNER JOIN person ps ON su.id = ps.user_id
        WHERE su.isuse = 1 AND su.id = $1`, [id])
}


export const getAllusersService = async (search: any, limit: any) => {
    let sql = `
        SELECT su.id
        ,su.username
        ,su.email
        ,(SELECT title_name FROM mas_title_name WHERE id = ps.mas_title_name_id ) AS title_name
        ,ps.first_name_th
        ,ps.last_name_th
        ,(SELECT id FROM sysm_roles WHERE id = su.roles_id) AS role_id
        ,(SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) AS role

        FROM sysm_users su
        INNER JOIN person ps ON su.id = ps.user_id
        WHERE su.isuse = 1`

    let sql_count = `
        SELECT COUNT(su.id) AS count

        FROM sysm_users su
        INNER JOIN person ps ON su.id = ps.user_id
        WHERE su.isuse = 1`

    if (search) {
        sql += ` AND su.username LIKE '%${search}%'
        OR su.email LIKE '%${search}%'
        OR ps.first_name_th LIKE '%${search}%'
        OR ps.last_name_th LIKE '%${search}%' 
        OR (SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) LIKE '%${search}%' `

        sql_count += ` AND su.username LIKE '%${search}%'
        OR su.email LIKE '%${search}%'
        OR ps.first_name_th LIKE '%${search}%'
        OR ps.last_name_th LIKE '%${search}%' 
        OR (SELECT roles_name FROM sysm_roles WHERE id = su.roles_id) LIKE '%${search}%'`
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