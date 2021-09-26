import { Request, Response, NextFunction } from 'express'
import axios from 'axios';
import config from '../config';
import { getewayToken, getGrandCode } from '../service/falcon_api';
import { result, DecryptCryptoJS } from '../util';
import { initModels, insurance_order } from "../models/init-models";
import { sequelize } from '../models';

initModels(sequelize)

const token_falcon: any = {}

/** ขั้นตอนยืนยันรหัส policyId */
export const confirmFalcon = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { token } = req.body

        // const { urlOfPaySuccess, urlOfPayFailure } = await DecryptCryptoJS(token)

        const models: any = {
            username: config.USERNAME_FALCON,
            password: config.PASSWORD_FALCON
        }
        const models_: any = {
            username: config.USERNAME_FALCON_LOGIN,
            password: config.PASSWORD_FALCON_LOGIN,
        }

        /** ดึง PolicyId */
        const policy = await getPolicyId(id)

        /** เรียก token */
        const res_: any = await getewayToken(models)
        console.log(res_);

        /** เรียก grandCode */
        const res__ = await getGrandCode(models_, res_.access_token)
        console.log(res__);

        token_falcon.access_token = res_.access_token
        token_falcon.grand_code = res__.data
        token_falcon.policy = policy?.policy_id

        if (!policy?.policy_id) {
            const err: any = new Error('ต้องมี policy_id')
            err.statusCode = 500
            throw err
        }
        if (!res__.data) {
            const error: any = new Error('ต้องมี grand_code');
            error.statusCode = 500;
            throw error;
        }

        if (!res_.access_token) {
            const error: any = new Error('ต้องมี access_token');
            error.statusCode = 500;
            throw error;
        }

        const res_confirm: any = await axios.get(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/confirm/${policy?.policy_id}`, {
            headers: {
                Authorization: 'Bearer' + res_.access_token,
                grantCode: res__.data
            }
        })
        console.log(res_confirm.data.data);

        const pay_quotation = {
            policyId: res_confirm.data.data.policyId,
            payMode: {
                payMode: "twoCTwoP",
                urlOfPaySuccess: "https://buy.bbd.co.th", // redirect
                urlOfPayFailure: "https://www.google.co.th/?hl=th",
                extInfo: {}
            }
        }

        /** ขั้นตอนการชำระเงิน */
        const res_pay: any = await axios.post(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/pay`, pay_quotation, {
            headers: {
                Authorization: 'Bearer' + res_.access_token,
                grantCode: res__.data
            }
        })

        console.log(res_pay.data.data);
        result(res, res_pay.data.data);

    } catch (error) {
        next(error)
    }

}

export const pay = async (req: Request, res: Response, next: NextFunction) => {
    try {

        if (!token_falcon.policy) {
            const err: any = new Error('ไม่มี Token Falcon')
            err.statusCode = 500
            throw err
        }

        const pay_quotation = {
            policyId: token_falcon.policy,
            payMode: {
                payMode: "twoCTwoP",
                urlOfPaySuccess: "https://buy.bbd.co.th",// redirect
                urlOfPayFailure: "",
                extInfo: {}
            }
        }

        /** ขั้นตอนการชำระเงิน */
        const res_pay: any = await axios.post(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/pay`, pay_quotation, {
            headers: {
                Authorization: 'Bearer' + token_falcon.access_token,
                grantCode: token_falcon.grand_code
            }
        })

        console.log(res_pay.data.data);
        result(res, res_pay.data.data);

    } catch (error) {
        next(error)
    }
}

const getPolicyId = async (id: string) => {
    return await insurance_order.findOne({ where: { id } })
}

export default {
    confirmFalcon
}
