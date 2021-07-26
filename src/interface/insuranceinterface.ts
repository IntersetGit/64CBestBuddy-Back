export interface positionInterface {
    id?: any
    user_id?: any
    isuse: number
}

export interface insuranceinterface {
    id: string
    user_id: string
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
    created_by?: string
    created_date?: Date
    updated_by?: string
    updated_date?: Date
}

export interface insurance_typeInterface {
    insurance_id: string
    name?: string
    isuse: number
    sort: number
}


export interface installmentInterface {
    insurance_type_id: string
    installment_id: string
    name?: string
    sort: number
}


export interface insuranceApplicantInterfaceAndBeneficiaryInterface {
    id: string
    insurance_id: string
    mas_title_name_id: number
    mas_marital_status_id?: number
    mas_occupation_id?: number
    id_number?: string
    first_name?: string
    last_name?: string
    birthday?: string
    age?: number
    hight?: number
    weight?: number
    address?: string
    additional_address?: string
    nationality?: string
    email?: string
    phone?: string
    mas_province_id?: string
    mas_district_id?: string
    mas_sub_district_id?: string
    mas_payer_relation_id?: string
    insurance_applicant_id?: string
}


export interface insuranceBeneficiaryInterface {
    id: string
    mas_title_name_id: number
    mas_payer_relation_id?: string
    insurance_applicant_id?: string
    first_name?: string
    last_name?: string
}
