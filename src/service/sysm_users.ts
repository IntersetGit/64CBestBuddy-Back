import { initModels, sysm_users } from "../models/init-models";
import { sequelize } from '../models';
import config from '../config'
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { UsersInterface } from '../interface/loginInterface'
import { v4 as uuidv4 } from 'uuid';

initModels(sequelize);

export const filterUsernameUsersService = async (username: string) => {
    return await sequelizeStringFindOne(`
    SELECT a.* , b.first_name_th ,b.last_name_th , b.first_name_en, b.last_name_en ,
    (SELECT roles_name FROM system.sysm_roles WHERE id = a.roles_id) AS roles_name
    FROM system.sysm_users as a
    INNER JOIN bestbuddy_data.dat_person as b ON b.user_id = a.id
    WHERE UPPER(a.username)  = UPPER($1)
    `, [username]);
};

export const registerService = async (model: UsersInterface) => {
    const id = uuidv4()
};

export default {
    filterUsernameUsersService
}