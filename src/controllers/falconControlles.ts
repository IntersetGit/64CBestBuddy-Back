import { Request, Response, NextFunction } from 'express'
import axios from 'axios';
import config from '../config';
import { getewayToken, getGrandCode } from '../service/falcon_api';
import { result } from '../util';
import { initModels, insurance_order } from "../models/init-models";
import { sequelize } from '../models';

initModels(sequelize)

/** ขั้นตอนยืนยันรหัส policyId */
export const confirm_falcon = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const models: any = {
            username: config.USERNAME_FALCON,
            password: config.PASSWORD_FALCON
        }
        const models_: any = {
            username: config.USERNAME_FALCON_LOGIN,
            password: config.PASSWORD_FALCON_LOGIN,
        }

        /** ดึง PolicyId */
        const policy_id = await getPolicyId(id)

        /** เรียก token */
        const res_: any = await getewayToken(models)
        console.log(res_);

        /** เรียก grandCode */
        const res__ = await getGrandCode(models_, res_.access_token)
        console.log(res__);

        if (!policy_id) {
            const err: any = new Error('ไม่มี Token Falcon')
            err.statusCode = 500
            throw err
        }

        if (!res_.access_token) {
            const error: any = new Error('ต้องมี access_token');
            error.statusCode = 500;
            throw error;
        }

        const res_confirm: any = await axios.get(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/confirm/${policy_id}`, {
            headers: {
                Authorization: 'Bearer' + res_.access_token,
                grantCode: res__.grand_code
            }
        })

        console.log(res_confirm.data.data);

        const pay_quotation = {
            policyId: policy_id,
            payMode: {
                payMode: "twoCTwoP",
                urlOfPaySuccess: "",// redirect
                urlOfPayFailure: "",
                extInfo: {}
            }
        }

        /** ขั้นตอนการชำระเงิน */
        const res_pay: any = await axios.post(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/pay`, pay_quotation, {
            headers: {
                Authorization: 'Bearer' + res_.access_token,
                grantCode: res__.grand_code
            }
        })

        console.log(res_pay.data.data);

        result(res, res_pay.data.data)

    } catch (error) {
        next(error)
    }

}

const getPolicyId = async (id: string) => {
    return await insurance_order.findOne({ where: { id } })
}

export default {
    confirm_falcon
}
