import { Request, Response, NextFunction } from 'express'
import {
    registerService,
    updateService,
    filterUsernameUsersService,
    delUserService,
    getByidUserService,
    getByiduserService_
} from '../service/sysm_users';
import { addRoleService } from '../service/sysm_roles'
import { createDatPersonService, editDatPersonService, delDatPersonService } from '../service/person';
import { result, decodeToken, encryptPassword } from '../util/index'
import { UsersInterface } from '../interface/loginInterface'
import messages from '../messages/index'
import { sequelize } from "../models";
import config from '../config'
import { checkToken } from '../middleware/refreshToken'


export const mangeUsersAccountControlles = async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
        const decode: any = await decodeToken(req.headers['authorization'])
        const model: UsersInterface = req.body
        model.user_id = decode.user_id

        if (decode.roles_id != "d150a1a7-0c8f-47b8-8e5b-f37322a63896") {
            const error: any = new Error(messages.errorUnauthorized);
            error.statusCode = 401;
            throw error;
        }
        //ดึงข้อมูล user
        const refresh_token_: any = await getByiduserService_(model.user_id)
        const token_: any = await checkToken(refresh_token_.refresh_token, decode)

        const _res: any = await filterUsernameUsersService(model.username);

        if (_res) {
            const error: any = new Error(messages.errorRegister);
            error.statusCode = config.STATUS_CODE_ERROR;
            throw error;
        }

        if (model.id) {
            await updateService(model)
            await editDatPersonService(model)
            result(res, model.id, 201)

        } else {
            model.password = await encryptPassword(model.password);
            model.user_id = await registerService(model, transaction);
            await createDatPersonService(model, transaction);

            await transaction.commit();
            result(res, model.user_id, 201)
        }

    } catch (error) {
        if (transaction) await transaction.rollback();
        next(error);
    }

}

export const delUserAccountControlles = async (req: Request, res: Response, next: NextFunction) => {
    // const transaction = await sequelize.transaction();
    try {
        const decode: any = await decodeToken(req.headers['authorization'])
        const { id } = req.params

        if (decode.roles_id != "d150a1a7-0c8f-47b8-8e5b-f37322a63896") {
            const error: any = new Error(messages.errorUnauthorized);
            error.statusCode = 401;
            throw error;
        }

        if (id) {
            await delDatPersonService(id)
            await delUserService(id)

            // await transaction.commit();
            result(res, id)
        }


    } catch (error) {
        // if (transaction) await transaction.rollback();
        next(error);
    }
}

export const getByidUserAccountControlles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization'])
        const { id } = req.params

        result(res, await getByidUserService(id))
    } catch (error) {
        next(error);
    }
}


export const addRoleControlles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization'])
        const { roles_name } = req.body

        if (decode.roles_id != "d150a1a7-0c8f-47b8-8e5b-f37322a63896") {
            const error: any = new Error(messages.errorUnauthorized);
            error.statusCode = 401;
            throw error;
        }

        result(res, await addRoleService(roles_name))

    } catch (error) {
        next(error);
    }
}

export default {
    mangeUsersAccountControlles,
    delUserAccountControlles,
    getByidUserAccountControlles,
    addRoleControlles
}