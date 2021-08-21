import axios from "axios"
import config from "../config"
import { initModels, insurance, insurance_order, mas_occupation, mas_address_province, mas_address_district, mas_address_sub_district } from "../models/init-models";
import { sequelize } from '../models';
import moment from 'moment'

initModels(sequelize);

export const getAccesstokenGrandCodeService = async (model: any) => {
    const models: any = {
        username: config.USERNAME_FALCON,
        password: config.PASSWORD_FALCON
    }

    const res_: any = await getewayToken(models)
    console.log(res_);


    if (!res_.access_token) {
        const error: any = new Error('ต้องมี access_token');
        error.statusCode = 500;
        throw error;
    }

    const models_: any = {
        username: "1400017",
        password: "eBao1234"
    }

    const res__ = await getGrandCode(models_, res_.access_token)
    console.log(res__);


    if (!res__.data && !res_.access_token) {
        const error: any = new Error('ต้องมี access_token และ grand_code');
        error.statusCode = 500;
        throw error;
    }

    const res___ = await createQuotation(model, res_.access_token, res__.data)
    console.log(res___);

    return {
        quotation: res___,
        token: {
            access_token: res_.access_token,
            grandCode: res__.data
        }
    }

}

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
    const quotations = await insurance_order.findOne({ where: { id: model.id } })
    const product_insurance = await insurance.findOne({ where: { id: quotations?.insurance_id } })
    const occupation = await mas_occupation.findOne({ where: { id: quotations?.occupation_id } }) // อาชีพ
    const province = await mas_address_province.findOne({ where: { id: quotations?.province_id } }) // จังหวัด
    const district = await mas_address_district.findOne({ where: { id: quotations?.district_id } }) // อำเภอ
    const sub_district = await mas_address_sub_district.findOne({ where: { id: quotations?.sub_district_id } }) // ตำบล
    console.log(quotations);
    const random_num = (Math.floor(Math.random() * 100) + 1)
    const insureds = []
    const insured = {
        detail: {
            insuredType: 1,
            idType: quotations?.type_card_number_id == 1 ? 3 : 5,
            idNo: quotations?.card_number,
            prefix: quotations?.prefix_id,
            firstName: quotations?.first_name,
            lastName: quotations?.last_name,
            nationality: "THA",
            dob: moment(quotations?.birthday).format('DD/MM/YYYY'),
            age: quotations?.age,
            mobile: quotations?.mobile_phone,
            telNo: quotations?.phone ?? "",
            email: quotations?.email,
            gender: quotations?.gender_id == 1 ? "M" : "F",
            occupation: occupation?.code_falcon,
            taxNo: "",
            address: {
                addressType: 2,
                province: province?.code_falcon,
                district: district?.code_falcon,
                subDistrict: sub_district?.code_falcon,
                postalCode: sub_district?.postal_code,
                addressNo: quotations?.house_no,
                village: quotations?.village ?? "",
                alley: quotations?.lane ?? "",
                road: quotations?.road ?? "",
                moo: quotations?.village_no ?? ""
            },
            extInfo: {
                BMI: quotations?.bmi,
                weight: quotations?.weight,
                height: quotations?.height,
                income: "",
                jobDescription: "",
                position: "",
                occupationClass: ""
            }
        }
    }
    insureds.push(insured)

    const from_: any = {
        insurerTenantCode: "FALCON_TH",
        prdtCode: product_insurance?.product_code,
        planCode: model.planCode ?? "PIPRD_PLAN1",
        proposalDate: moment(quotations?.protection_date_start).format('DD/MM/YYYY') + " " + "16:30:00",
        effDate: moment(quotations?.protection_date_start).format('DD/MM/YYYY') + " " + "16:30:00",
        expDate: moment(quotations?.protection_date_end).format('DD/MM/YYYY') + " " + "16:30:00",
        referenceNo: `BrokerTest${random_num}`,
        insureds: insureds,
        policyholder: {
            isSameAsInsured: true,
            customer: {
                customerType: 1,
                idType: quotations?.type_card_number_id == 1 ? 3 : 5,
                idNo: quotations?.card_number,
                prefix: quotations?.prefix_id,
                firstName: quotations?.first_name,
                lastName: quotations?.last_name,
                nationality: "THA",
                mobile: quotations?.mobile_phone,
                telNo: quotations?.phone ?? "",
                email: quotations?.email,
                gender: quotations?.gender_id == 1 ? "M" : "F",
                occupation: occupation?.code_falcon,
                taxNo: "",
                branch: "",
                address: {
                    addressType: 2,
                    province: province?.code_falcon,
                    district: district?.code_falcon,
                    subDistrict: sub_district?.code_falcon,
                    postalCode: sub_district?.postal_code,
                    addressNo: quotations?.house_no,
                    village: quotations?.village ?? "",
                    alley: quotations?.lane ?? "",
                    road: quotations?.road ?? "",
                    moo: quotations?.village_no ?? ""
                },
                extInfo: {
                    infoType: "individual",
                    relationship: ""
                }
            },
        },
        beneficiaries: model.beneficiaries ?? [],
        payer: {
            payerType: 1,
            customer: {
                customerType: 1,
                idType: quotations?.type_card_number_id == 1 ? 3 : 5,
                idNo: quotations?.card_number,
                prefix: quotations?.prefix_id,
                firstName: quotations?.first_name,
                lastName: quotations?.last_name,
                nationality: "THA",
                dob: moment(quotations?.birthday).format('DD/MM/YYYY'),
                age: quotations?.age,
                mobile: quotations?.mobile_phone,
                telNo: quotations?.phone ?? "",
                email: quotations?.email,
                gender: quotations?.gender_id == 1 ? "M" : "F",
                occupation: occupation?.code_falcon,
                taxNo: "",
                branch: "",
                address: {
                    addressType: 1,
                    province: province?.code_falcon,
                    district: district?.code_falcon,
                    subDistrict: sub_district?.code_falcon,
                    postalCode: sub_district?.postal_code,
                    addressLine1: "",
                    addressLine2: ""
                },
                extInfo: {}
            }
        },
        payMode: {
            payMode: "twoCTwoP",
            extInfo: {}
        },
        extInfo: {
            questionnaire: {
                question2: 0,
                question3: 0,
                question4: 0,
                question5: 0,
                question6: 0,
                question1: 0
            },
            taxDeduction: 1
        },
    }

    /** ขั้นตอนสร้างใบเสนอราคาประกัน */
    const res_quotation: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/create', from_, {
        headers: {
            Authorization: 'Bearer' + access_token,
            grantCode: grand_code
        }
    })
    console.log(res_quotation.data.data);
    from_.policyId = res_quotation.data.data.policyId

    /** ขั้นตอนผูกใบเสนอราคา */
    const res_bindquotaion: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/bind', from_, {
        headers: {
            Authorization: 'Bearer' + access_token,
            grantCode: grand_code
        }
    })

    console.log(res_bindquotaion.data.data);

    // /** ขั้นตอนยืนยันรหัส policyId */
    // const res_confirm: any = await axios.get(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/confirm/${res_bindquotaion.data.data.policyId}`, {
    //     headers: {
    //         Authorization: 'Bearer' + access_token,
    //         grantCode: grand_code
    //     }
    // })

    // console.log(res_confirm.data.data);

    // const pay_quotation = {
    //     policyId: res_confirm.data.data.policyId,
    //     payMode: {
    //         payMode: "twoCTwoP",
    //         urlOfPaySuccess: "",
    //         urlOfPayFailure: "",
    //         extInfo: {}
    //     }
    // }

    // /** ขั้นตอนการชำระเงิน */
    // const res_pay: any = await axios.post(`https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/quotation/pay`, pay_quotation, {
    //     headers: {
    //         Authorization: 'Bearer' + access_token,
    //         grantCode: grand_code
    //     }
    // })

    // console.log(res_pay.data.data);

    return {
        policyId: res_quotation.data.data.policyId,
        token: {
            access_token,
            grand_code
        },
        id: model.id
    }

}

export default {
    getAccesstokenGrandCodeService,
    getewayToken,
    getGrandCode,
    createQuotation
}