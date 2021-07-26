import { Request, Response, NextFunction } from 'express'
import { registerService, updateService, filterUsernameUsersService, delUserService } from '../service/sysm_users';
import { createDatPersonService, editDatPersonService, delDatPersonService } from '../service/person';
import { result, decodeToken, encryptPassword } from '../util/index'
import { UsersInterface } from '../interface/loginInterface'
import messages from '../messages/index'
import { sequelize } from "../models";
import config from '../config'


export const mangeUsersAccount = async (req: Request, res: Response, next: NextFunction) => {
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

export const delUserAccount = async (req: Request, res: Response, next: NextFunction) => {
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

export default {
    mangeUsersAccount,
    delUserAccount
}