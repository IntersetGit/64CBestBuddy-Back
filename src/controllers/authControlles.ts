import { Request, Response, NextFunction } from "express";
import messages from '../messages'
import config from '../config'
import { checkPassword, encryptPassword, result, decodeToken } from '../util';
import { LoginInterface, UsersInterface } from '../interface/loginInterface'
import { filterUsernameUsersService, registerService, updateStatusUsersService } from "../service/sysm_users";
import jwt from 'jsonwebtoken'
import { sequelize } from "../models";
import { createDatPersonService } from "../service/person";
import { checkToken } from '../middleware/refreshToken'

let refreshTokens: any = []

export const loginControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { username, password }: LoginInterface = req.body

        const _res: any = await filterUsernameUsersService(username)

        if (!_res) {
            const error: any = new Error(messages.errorUserNot);
            error.statusCode = config.STATUS_CODE_ERROR;
            throw error;
        }

        const passwordecrypt = await checkPassword(password, _res.password); //เช็ค password ตรงไหม

        if (!passwordecrypt) {
            const error: any = new Error(messages.errorPasswordUser);
            error.statusCode = config.STATUS_CODE_ERROR;
            throw error;
        }
        const model = {
            user_id: _res.id,
            username: _res.username,
            roles_id: _res.roles_id,
            roles_name: _res.roles_name,
            first_name: _res.first_name,
            last_name: _res.last_name,
            nick_name: _res.nick_name,
        }

        //สร้าง token
        const token = await generateAccessToken(model)
        const refreshToken = await jwt.sign(model, config.JWT_SECRET_REFRESH ?? "");
        await updateStatusUsersService(model.user_id, refreshToken)
        refreshTokens.push(refreshToken)
        result(res, {
            token,
            refreshToken
        })

    } catch (error) {
        next(error);
    }
}

export const registerControllers = async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
        const model: UsersInterface = req.body
        const _res: any = await filterUsernameUsersService(model.username);

        if (_res) {
            const error: any = new Error(messages.errorRegister);
            error.statusCode = config.STATUS_CODE_ERROR;
            throw error;
        }

        model.password = await encryptPassword(model.password)
        model.user_id = await registerService(model, transaction)
        await createDatPersonService(model, transaction)

        await transaction.commit();
        result(res, model.user_id)
    } catch (error) {
        if (transaction) await transaction.rollback();
        next(error);
    }
}


export const logoutControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode = await decodeToken(req.headers['authorization'])
        const model: any = req.body
        // model.user_id = decode.user_id

    } catch (error) {
        next(error);
    }
}


export const refreshTokenControllers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.body
        if (!token) res.sendStatus(401)

        if (config.NODE_ENV == "production") if (!refreshTokens.includes(token)) res.sendStatus(403)
        jwt.verify(token, config.JWT_SECRET_REFRESH ?? "", async (err: any, _res: any) => {
            if (err) res.sendStatus(403)
            const _model = {
                user_id: _res.user_id,
                username: _res.username,
                roles_id: _res.roles_id,
                roles_name: _res.roles_name,
                first_name_th: _res.first_name_th,
                last_name_th: _res.last_name_th,
                first_name_en: _res.first_name_en,
                last_name_en: _res.last_name_en,
                nick_name_th: _res.nick_name_th,
                nick_name_en: _res.nick_name_en,
            }
            const token = await generateAccessToken(_model)
            result(res, token)
        })
    } catch (error) {
        next(error);
    }
};

const generateAccessToken = async (model: any) => {
    return await jwt.sign(model, config.JWT_SECRET || "", {
        expiresIn: "30m"
    });
}


export default {
    loginControllers,
    registerControllers,
    logoutControllers,
    refreshTokenControllers
}