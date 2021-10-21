import jwt from 'jsonwebtoken'
import Token from '../controllers/authControlles'
import config from '../config/index'

export const checkToken = async (refresh_token: string, decode: any) => {

    if (Date.now() >= decode.exp * 1000) {
        if (refresh_token) {
            const refreshToken = jwt.verify(refresh_token, config.JWT_SECRET_REFRESH ?? "")
            const model = {
                user_id: decode.id,
                username: decode.username,
                roles_id: decode.roles_id,
                roles_name: decode.roles_name,
                first_name_th: decode.first_name_th,
                last_name_th: decode.last_name_th,
                first_name_en: decode.first_name_en,
                last_name_en: decode.last_name_en,
                nick_name_th: decode.nick_name_th,
                nick_name_en: decode.nick_name_en,
            }
            const Token = jwt.sign(model, config.JWT_SECRET_REFRESH ?? "")
            return {
                Token,
                refreshToken
            }
        }
    }
}

export default {
    checkToken
}