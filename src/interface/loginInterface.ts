export interface LoginInterface {
    username: string,
    password: string,
}
export interface UsersInterface_old {
    id?: string,
    user_id?: string,
    username: string,
    password: string,
    email: string,
    roles_id?: string,
    isuse?: number,
    created_by?: string
    created_date?: Date | string
    update_by?: string
    update_date?: Date | string
    mas_title_name_id?: string,
    first_name_th?: string,
    last_name_th?: string,
    first_name_en?: string,
    last_name_en?: string,
    nick_name?: string,
    gender?: number
    birthday: string
    id_card?: string
    passport_number?: string
    insurance_code?: string
}

export interface UsersInterface {
    id: string,
    roles_id: string,
    username: string,
    password: string,
    email: string,
    user_id: string,
    mas_title_name_id: number,
    first_name_th: string,
    first_name_en?: string,
    last_name_th: string,
    last_name_en?: string,
    nick_name_th?: string,
    nick_name_en?: string,
    gender?: number,
    birthday?: string,
    id_card?: string,
    passport_number?: string,
    insurance_code?: string,
    created_by: string,
    created_date: Date | string,
    updated_by?: string,
    updated_date?: Date | string,
}
