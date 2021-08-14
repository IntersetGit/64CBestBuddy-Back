import { Request, Response, NextFunction } from 'express';
import { result } from '../util/index';
import address from '../data/falcon/address'
import prefixList from '../data/falcon/prefix'
import occupationList from '../data/falcon/occupation'
import { initModels, mas_address_province, mas_address_district, mas_address_sub_district, mas_prefix, mas_occupation } from "../models/init-models";
import { sequelize } from '../models';
initModels(sequelize);
import { v4 as uuidv4 } from 'uuid';

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
export default {
    demo,
    demoPrefix,
    demoOccupation,
}