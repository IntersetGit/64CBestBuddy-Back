export interface positionInterface {
    id?: any
    user_id?: any
    isuse: number
}

export interface insuranceinterface {
    id: string
    product_code?: string
    name?: string
    img_header?: string
    img_cover?: string
    details?: string
    note?: string
    status?: number
    percentage?: number
    isuse?: number
    sort?: number
    is_one_price?: number
    mas_insurance_type_id?: string
}