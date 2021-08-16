import { Request, Response, NextFunction } from 'express';
import { result } from '../util/index';
import address from '../data/falcon/address'
import prefixList from '../data/falcon/prefix'
import occupationList from '../data/falcon/occupation'
import { initModels, mas_address_province, mas_address_district, mas_address_sub_district, mas_prefix, mas_occupation } from '../models/init-models';
import { sequelize } from '../models';
initModels(sequelize);
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const demo = async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
        const { province, district, sub_district } = address
        const _province: any = province.map((e, i) => {
            return {
                id: i + 1,
                provicne_name_en: e.PROVICNE_NAME_EN,
                provicne_name_th: e.PROVICNE_NAME_TH,
                code_cigna: null,
                code_falcon: e.PROVICNE_CODE,
            }
        })

        const _district: any = district.map((e, i) => {
            const index: any = _province.findIndex((x: any) => x.code_falcon == e.PROVICNE_CODE)
            if (index != -1) {
                return {
                    id: i + 1,
                    provicne_id: _province[index].id,
                    district_name_en: e.DISTRICT_NAME_EN,
                    district_name_th: e.DISTRICT_NAME_TH,
                    code_cigna: null,
                    code_falcon: e.DISTRICT_CODE,
                }
            }
        })

        const _sub_district: any = sub_district.map((e, i) => {
            const index: any = _district.findIndex((x: any) => x.code_falcon == e.DISTRICT_CODE)
            if (index != -1) {
                return {
                    id: i + 1,
                    district_id: _district[index].id,
                    sub_district_name_en: e.SUB_DISTRICT_NAME_EN,
                    sub_district_name_th: e.SUB_DISTRICT_NAME_TH,
                    postal_code: e.POSTAL_CODE,
                    code_cigna: null,
                    code_falcon: e.SUB_DISTRICT_CODE,
                }
            }
        })

        /* เพิ่ม */
        // await mas_address_province.bulkCreate(_province, { transaction })
        // await mas_address_district.bulkCreate(_district, { transaction })
        // await mas_address_sub_district.bulkCreate(_sub_district, { transaction })

        /* debug */
        // for (const key in sub_district) {
        //     if (Object.prototype.hasOwnProperty.call(sub_district, key)) {
        //         const e = sub_district[key];
        //         const index: any = _district.findIndex((x: any) => x.code_falcon == e.DISTRICT_CODE)
        //         if (e.DISTRICT_CODE == '6610')
        //             console.log(`e =>>>>>>>>>>>>>>>>>>>>>>>`, e)
        //         await mas_address_sub_district.create({
        //             id: Number(key) + 1,
        //             district_id: _district[index].id,
        //             sub_district_name_en: e.SUB_DISTRICT_NAME_EN,
        //             sub_district_name_th: e.SUB_DISTRICT_NAME_TH,
        //             postal_code: e.POSTAL_CODE,
        //             code_cigna: undefined,
        //             code_falcon: e.SUB_DISTRICT_CODE,
        //         }, { transaction })
        //     }
        // }
        // await transaction.commit();
        result(res, { province: _province, district: _district, sub_district: _sub_district })
    } catch (error) {
        if (transaction) await transaction.rollback();
        next(error);
    }
}

export const demoPrefix = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const prefix: any = prefixList.map((e, i) => {
            return {
                id: i + 1,
                name: e.text,
                code_cigna: null,
                code_falcon: e.id,
                isuse: 1,
            }
        })
        // await mas_prefix.bulkCreate(prefix)
        result(res, { prefix })
    } catch (error) {
        next(error);
    }
}

export const demoOccupation = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const occupation: any = occupationList.map((e, i) => {
            return {
                id: i + 1,
                name: e.text,
                risk_class_falcon: e.riskClass,
                original_text_falcon: e.originalText,
                code_cigna: null,
                code_falcon: e.id,
            }
        })
        // await mas_occupation.bulkCreate(occupation)
        result(res, { occupation })
    } catch (error) {
        next(error);
    }
}


/** -------------------- Falcon api ---------------------------- */
const gateway_accesstoken: any = {}

export const gatewayToken = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { username, password } = req.body
        const model = {
            username: "FALCON_TH.admin",
            password: "Thai!0987"
        }

        const res_: any = await axios.post('https://sandbox.thai.ebaocloud.com/cas/ebao/v2/json/tickets', {
            username: model.username,
            password: model.password
        })

        gateway_accesstoken.access_token = res_.data.access_token

        console.log(`res_=====>`, res_.data)

        result(res, res_.data)
    } catch (error) {
        next(error);
    }
}


export const grandCode = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { username, password } = req.body
        const model = {
            username: "1400017",
            password: "eBao1234"
        }

        if (!gateway_accesstoken.access_token) {
            const error: any = new Error('ต้องมี access_token');
            error.statusCode = 500;
            throw error;
        }

        const res__: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/utils/grantCode', {
            username: model.username,
            password: model.password
        }, {
            headers: {
                Authorization: 'Bearer ' + gateway_accesstoken.access_token
            }
        })

        gateway_accesstoken.grand_code = res__.data.data

        console.log(`res__=====>`, res__.data)

        result(res, res__.data)
    } catch (error) {
        next(error);
    }
}


export const createQuotation = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const model: any = req.body
        console.log(model);

        if (!gateway_accesstoken.grand_code && !gateway_accesstoken.access_token) {
            const error: any = new Error('ต้องมี access_token และ grand_code');
            error.statusCode = 500;
            throw error;
        }

        const res__: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/create', {
            insurerTenantCode: model.insurerTenantCode,
            prdtCode: model.prdtCode,
            planCode: model.planCode,
            proposalDate: model.proposalDate,
            effDate: model.effDate,
            expDate: model.expDate,
            referenceNo: model.referenceNo,
            insureds: model.insureds,
            policyholder: {
                isSameAsInsured: model.policyholder.isSameAsInsured,
                customer: {
                    customerType: model.policyholder.customer.customerType,
                    idType: model.policyholder.customer.idType,
                    idNo: model.policyholder.customer.idNo,
                    prefix: model.policyholder.customer.prefix,
                    firstName: model.policyholder.customer.firstName,
                    lastName: model.policyholder.customer.lastName,
                    nationality: model.policyholder.customer.nationality,
                    mobile: model.policyholder.customer.mobile,
                    telNo: model.policyholder.customer.telNo,
                    email: model.policyholder.customer.email,
                    gender: model.policyholder.customer.gender,
                    occupation: model.policyholder.customer.occupation,
                    taxNo: model.policyholder.customer.taxNo,
                    branch: model.policyholder.customer.branch,
                    address: {
                        addressType: model.policyholder.customer.address.addressType,
                        province: model.policyholder.customer.address.province,
                        district: model.policyholder.customer.address.district,
                        subDistrict: model.policyholder.customer.address.subDistrict,
                        postalCode: model.policyholder.customer.address.postalCode,
                        addressNo: model.policyholder.customer.address.addressNo,
                        village: model.policyholder.customer.address.village,
                        alley: model.policyholder.customer.address.alley,
                        road: model.policyholder.customer.address.road,
                        moo: model.policyholder.customer.address.moo
                    },
                    extInfo: {
                        infoType: model.policyholder.customer.extInfo.infoType,
                        relationship: model.policyholder.customer.extInfo.relationship
                    }
                },
            },
            extInfo: {
                questionnaire: {
                    question2: model.extInfo.questionnaire.question2,
                    question3: model.extInfo.questionnaire.question3,
                    question4: model.extInfo.questionnaire.question4,
                    question5: model.extInfo.questionnaire.question5,
                    question6: model.extInfo.questionnaire.question6,
                    question1: model.extInfo.questionnaire.question1
                },
                taxDeduction: 1
            }

        }, {
            headers: {
                Authorization: 'Bearer' + gateway_accesstoken.access_token,
                grantCode: gateway_accesstoken.grand_code
            }
        })

        gateway_accesstoken.grand_code = res__.data.data

        console.log(`res__=====>`, res__.data)


        result(res, res__.data)
    } catch (error) {
        next(error);
    }
}

export default {
    demo,
    demoPrefix,
    demoOccupation,
    gatewayToken,
    grandCode,
    createQuotation
}