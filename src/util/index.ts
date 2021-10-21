import { Response } from "express";
import { sequelize } from '../models'
import { initModels } from "../models/init-models";
import bcrypt from 'bcryptjs'
import jwt_decode from 'jwt-decode'
import messages from '../messages';
import config from '../config';
import CryptoJS from 'crypto-js'

// import models into sequelize instance
initModels(sequelize);

export const sequelizeString = async (sql: string, bind?: number[] | string[]) => {
    const res = await sequelize.query(sql, { bind: bind });
    return res[0].length > 0 ? res[0] : [];
}

export const sequelizeStringFindOne = async (sql: string, bind?: number[] | string[]) => {
    const res = await sequelize.query(sql, { bind: bind });
    return res[0].length > 0 ? res[0][0] : null;
}

/* เข้ารหัส Password */
export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(5);
    const hashPassword: string = await bcrypt.hash(password, salt);
    return hashPassword;
}

/* ตรวจสอบ Password */
export const checkPassword = async (password: string, passwordDB: string) => {
    const isValid = await bcrypt.compare(password, passwordDB);
    return isValid;
}

/* ถอดรหัส Token */
export const decodeToken = async (auth: any) => {
    const authHeader = auth;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        const error: any = new Error(messages.errorUserNot);
        error.statusCode = config.STATUS_CODE_ERROR;
        throw error;
    }
    return jwt_decode(token);
}

/* ผลลัพค่า */
export const result = async (res: Response, data: any, status: number = config.STATUS_CODE) => {
    return res.status(status).json({
        items: data,
        status_code: status,
    });
}

/* เข้ารหัส */
export const EncryptCryptoJS = (code: any) => {
    const secretKey: any = config.SECRET_KEY_CODE
    const encJson = CryptoJS.AES.encrypt(JSON.stringify(code), secretKey).toString()
    const encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))
    return encData
}

/* ถอดรหัส */
export const DecryptCryptoJS = (code: any) => {
    const secretKey: any = config.SECRET_KEY_CODE
    const decData = CryptoJS.enc.Base64.parse(code).toString(CryptoJS.enc.Utf8)
    const bytes = CryptoJS.AES.decrypt(decData, secretKey).toString(CryptoJS.enc.Utf8)
    return JSON.parse(bytes)
}

export default {
    sequelizeString,
    sequelizeStringFindOne,
    encryptPassword,
    checkPassword,
    decodeToken,
    result,
    EncryptCryptoJS,
    DecryptCryptoJS,
}