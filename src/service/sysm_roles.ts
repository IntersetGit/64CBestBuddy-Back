import { initModels, sysm_roles } from "../models/init-models";
import { sequelize } from '../models';
import { sequelizeString, sequelizeStringFindOne } from '../util';
import { v4 as uuid4 } from 'uuid'

initModels(sequelize);

export const getAllSysmRolesService = async () => {
    return await sysm_roles.findAll();
}

export const addRoleService = async (roles_name: string) => {
    const id = uuid4()
    await sysm_roles.create({
        id,
        roles_name
    })
    return id
}

export default {
    getAllSysmRolesService,
    addRoleService
}