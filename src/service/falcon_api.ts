import axios from "axios"
import config from "../config"

// export const getAccesstokenGrandCodeService = async (model: any) => {

//     const models: any = {
//         username: config.USERNAME_FALCON,
//         password: config.PASSWORD_FALCON
//     }

//     const res_: any = await getewayToken(models)
//     console.log(res_);


//     if (!res_.access_token) {
//         const error: any = new Error('ต้องมี access_token');
//         error.statusCode = 500;
//         throw error;
//     }

//     const models_: any = {
//         username: "1400017",
//         password: "eBao1234"
//     }

//     const res__ = await getGrandCode(models_, res_.access_token)
//     console.log(res__);


//     if (!res__.data && !res_.access_token) {
//         const error: any = new Error('ต้องมี access_token และ grand_code');
//         error.statusCode = 500;
//         throw error;
//     }

//     const res___ = await createQuotation(model, res_.access_token, res__.data)
//     console.log(res___);

//     return {
//         quotation: res___,
//         token: {
//             access_token: res_.access_token,
//             grandCode: res__.data
//         }
//     }

// }

export const getewayToken = async (models: any) => {
    const res_geteway: any = await axios.post('https://sandbox.thai.ebaocloud.com/cas/ebao/v2/json/tickets', {
        username: models.username,
        password: models.password
    })

    console.log(res_geteway.data);

    return res_geteway.data
}

export const getGrandCode = async (models_: any, access_token: any) => {
    const res_grandcode: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/utils/grantCode', {
        username: models_.username,
        password: models_.password
    }, {
        headers: {
            Authorization: 'Bearer ' + access_token
        }
    })

    console.log(res_grandcode.data);

    return res_grandcode.data
}

export const createQuotation = async (model: any, access_token: any, grand_code: any) => {

    const form_: any = {
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
                customerType: 1,
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
    }
    const res_quotation: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/create', {
        form_
    }, {
        headers: {
            Authorization: 'Bearer' + access_token,
            grantCode: grand_code
        }
    })

    return res_quotation.data

}

export default {
    // getAccesstokenGrandCodeService,
    getewayToken,
    getGrandCode,
    createQuotation
}