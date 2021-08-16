import axios from "axios"

const gateway_accesstoken: any = {}

// get token falcon
const gatewayToken = async (model: any) => {

    const models = {
        username: "FALCON_TH.admin",
        password: "Thai!0987"
    }

    const res_: any = await axios.post('https://sandbox.thai.ebaocloud.com/cas/ebao/v2/json/tickets', {
        username: models.username,
        password: models.password
    })

    gateway_accesstoken.access_token = res_.data.access_token

    console.log(`res_=====>`, res_.data)

    return res_.data.access_token
}


// get grandcode falcon
const grandCode = async (model: any) => {

    const models = {
        username: "1400017",
        password: "eBao1234"
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

    return res__.data.data
}


export const getAccesstokenGrandCodeService = async () => {
    const models = {
        username: "FALCON_TH.admin",
        password: "Thai!0987"
    }

    const res_: any = await axios.post('https://sandbox.thai.ebaocloud.com/cas/ebao/v2/json/tickets', {
        username: models.username,
        password: models.password
    })

    if (!res_.data.access_token) {
        const error: any = new Error('ต้องมี access_token');
        error.statusCode = 500;
        throw error;
    }

    const models_ = {
        username: "1400017",
        password: "eBao1234"
    }

    const res__: any = await axios.post('https://sandbox.gw.thai.ebaocloud.com/eBaoTHAI/1.0.0/api/pub/std/utils/grantCode', {
        username: models_.username,
        password: models_.password
    }, {
        headers: {
            Authorization: 'Bearer ' + res_.data.access_token
        }
    })

    return {
        access_token: res_.data.access_token,
        grand_code: res__.data.data
    }
}


export default {
    gatewayToken,
    grandCode,
    getAccesstokenGrandCodeService
}