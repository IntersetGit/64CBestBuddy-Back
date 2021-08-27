import { Request, Response, NextFunction } from 'express';
import { result, decodeToken, DecryptCryptoJS, EncryptCryptoJS } from '../util/index';
import {
    addInsuranceService, editInsuranceService, getAllInsuranceService, getByIdInsuranceService, delInsuranceService, createInsuranceService,
    getImagesHeaderInsuranceService, getByInsuranceAndInstallmentService
} from '../service/insurance';
import { insuranceinterface, installmentInterface, insuranceApplicantInterfaceAndBeneficiaryInterface, insuranceBeneficiaryInterface } from '../interface/insuranceinterface';
import path from 'path';
import config from "../config";
import fs from 'fs';
import { sequelize } from '../models';
import { bulkCreateInsuranceMasPlanService, getByInsuranceIdInsuranceMasPlanService } from '../service/insurance_mas_plan';
import { bulkCreateinsuranceMasProtectionService, getByInsuranceIdInsuranceMasProtectionService } from '../service/insurance_mas_protection';
import { bulkCreateMatchProtectionPlanService, getDataByProtectionIdService } from '../service/match_protection_plan';
import { bulkCreateInsurancePriceService, getPriceInsuranceService } from '../service/insurance_price';
import { getInstallmentByIdInsuranceService } from '../service/mas_installment';
import { createInsuranceApplicantService } from '../service/insurance_applicant';
import messages from '../messages';
import { addInsuranceOrderService, getAllInsuranceOrderService, getByIdInsuranceOrderService, updateInsuranceOrderService, } from '../service/insurance_order';
import { addInsuranceBeneficiaryService, destroyInsuranceBeneficiaryService } from '../service/insurance_beneficiary';
import { getewayToken, createQuotation, getGrandCode } from '../service/falcon_api'
import { any } from 'sequelize/types/lib/operators';
import paginate from 'express-paginate'


export const mangeInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization'])
        const model: insuranceinterface = req.body;
        model.user_id = decode.user_id

        if (decode.roles_id != "d150a1a7-0c8f-47b8-8e5b-f37322a63896" || "25349e72-c9d3-46cb-b367-cd532e541886") {
            const error: any = new Error(messages.errorUnauthorized);
            error.statusCode = 401;
            throw error;
        }

        if (model.id) {
            result(res, await editInsuranceService(model), 201);
        } else {
            result(res, await addInsuranceService(model), 201);
        }

    } catch (error) {
        next(error);
    }
}

export const getAllInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model: installmentInterface = req.body;
        result(res, await getAllInsuranceService(model));

    } catch (error) {
        next(error);
    }
}


export const getPriceInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { insurance_id, gender = 1, age = 30, installment_id = "7c0244d2-eb1f-48c6-9820-1d690c891015" } = req.body;
        if (!insurance_id) {
            const error: any = new Error("ต้องการ insurance_id");
            error.statusCode = 404;
            throw error;
        }

        const plan = await getByInsuranceIdInsuranceMasPlanService(insurance_id)

        const data = plan.map((e: any) => {
            return {
                id: e.id,
                insurance_id: e.insurance_id,
                name: e.name,
                sort: e.sort,
                price: 0,
            }
        })

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const e: any = data[key];
                e.price = await getPriceInsuranceService({
                    insurance_id,
                    age,
                    gender,
                    mas_plan_id: e.id,
                    mas_installment_id: installment_id,
                })
            }
        }


        result(res, data);
    } catch (error) {
        next(error);
    }
}

export const getByIdInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const table: any = {
            head: [],
            data: [],
        };

        const form: any = await getByIdInsuranceOrderService(id)

        if (!form) {
            const error: any = new Error("ไม่พบข้อมูล");
            error.statusCode = 404;
            throw error;
        }

        form.beneficiary = form.beneficiary ? JSON.parse(form.beneficiary) : []

        table.head = await getByInsuranceIdInsuranceMasPlanService(form.insurance_id);
        const protection: any = await getByInsuranceIdInsuranceMasProtectionService(form.insurance_id);

        for (const key in protection) {
            if (Object.prototype.hasOwnProperty.call(protection, key)) {
                const e = protection[key];
                const _model = {
                    id: e.id,
                    details: e.details,
                    sort: e.sort,
                    match: await getDataByProtectionIdService(e.id)
                }
                table.data.push(_model)
            }
        }

        result(res, {
            data: await getByIdInsuranceService(form.insurance_id),
            table,
            form,
            master: {
                installment: await getInstallmentByIdInsuranceService(form.insurance_id)
            }
        });

    } catch (error) {
        next(error);
    }
}


export const delInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id

        result(res, await delInsuranceService(id));

    } catch (error) {
        next(error);
    }
}


export const addInsurance = async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
        const model: any = req.body;

        /* set img */
        const projectPath = path.resolve(`./${config.NODE_ENV === "development" ? "src" : ""}`);
        const insurancePath = `${projectPath}/public/uploads/insurance/`;
        if (!fs.existsSync(insurancePath)) {
            fs.mkdirSync(insurancePath);
        }

        fs.mkdirSync(`${insurancePath}${model.id}`);
        model.img_header = JSON.stringify({ path: `/uploads/insurance/${model.id}/img_header.jpg` })
        model.img_cover = JSON.stringify({ path: `/uploads/insurance/${model.id}/img_cover.jpg` })

        /* เพิ่ม ตารางประกัน */
        await createInsuranceService(model, transaction)

        /* ตารางแผนประกัน  */
        await bulkCreateInsuranceMasPlanService(model.insurance_mas_plan, transaction)

        /* ตารางความคุ้มครอง  */
        await bulkCreateinsuranceMasProtectionService(model.insurance_mas_protection, transaction)

        /* match ตารางแผนประกัน กับ ตารางความคุ้มครอง */
        await bulkCreateMatchProtectionPlanService(model.match_protection_plan, transaction)

        /* ตารางราคาประกัน */
        await bulkCreateInsurancePriceService(model.insurance_price, transaction)



        await transaction.commit();
        result(res, model.id);

    } catch (error) {
        if (transaction) await transaction.rollback();
        next(error);
    }
}

export const getImagesHeaderInsurance = async (req: Request, res: Response, next: NextFunction) => {
    const _res: any = []
    await (await getImagesHeaderInsuranceService()).forEach((e: any) => (e.img_header) ? _res.push(`${config.SERVICE_HOST}/${JSON.parse(e.img_header).path}`) : null);
    result(res, _res);
}


/** สร้างข้อมูลผู้ขอประกัน */
export const createInsuranceApplicant = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model: insuranceApplicantInterfaceAndBeneficiaryInterface = req.body

        if (!model.insurance_id) throw new Error('ต้องการ ไอดี insurance_id')

        result(res, await createInsuranceApplicantService(model));

    } catch (error) {
        next(error);
    }
}


/** เลือกซื้อแผนประกัน */
export const getByInsuranceAndInstallment = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const model: any = req.body

        result(res, await getByInsuranceAndInstallmentService(model))

    } catch (error) {
        next(error);
    }
}

/**  */
export const mangeInsuranceOrder = async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
        const { postman, token }: any = req.body
        let model: any;

        if (!postman || token) {
            const { token }: any = req.body
            model = DecryptCryptoJS(token)
        } else {
            model = req.body
        }



        if (model.category_name === "falcon") {
            result(res, await mangeInsuranceFalcon(model, transaction))
        } else {
            const error: any = new Error(model.category_name ? "category ไม่ถูกต้อง" : "ส่ง category_name มาด้วย");
            error.statusCode = 404;
            throw error;
        }

    } catch (error) {
        if (transaction) await transaction.rollback();
        next(error);
    }
}

/* จัดการ ประกัน ของ Falcon */
const mangeInsuranceFalcon = async (model: any, transaction: any) => {
    try {
        let id;
        if (model.id) { //แก้ไข
            await updateInsuranceOrderService(model, transaction)
            id = model.id
        } else {
            id = await addInsuranceOrderService(model, transaction)
        }

        /* ข้อมูลผู้รับผลประโยชน์ */
        model.insurance_beneficiary = model.insurance_beneficiary ?? []

        await destroyInsuranceBeneficiaryService(id, transaction)

        for (const key in model.insurance_beneficiary) {
            if (Object.prototype.hasOwnProperty.call(model.insurance_beneficiary, key)) {
                const e: any = model.insurance_beneficiary[key];
                await addInsuranceBeneficiaryService({
                    insurance_order_id: id,
                    prefix_id: e.prefix_id,
                    first_name: e.first_name,
                    last_name: e.last_name,
                    beneficiary_id: e.beneficiary_id,
                    ratio: e.ratio,
                    sort: Number(key) + 1,
                }, transaction)
            }
        }
        await transaction.commit();

        /* เชื่มต่อ API ของ Falcon */
        if (model.page == 3) {
            const res_falcon: any = await connectApiFalcon(model)
            model.insurance_code = res_falcon.quoteNo
            model.policy_id = res_falcon.policyId
            model.id = res_falcon.id
            await updateInsuranceOrderService(model)
            return res_falcon
        }

        return id
    } catch (error) {
        if (transaction) await transaction.rollback();
    }
}
/**คำสั่งซื้อประกัน */
export const getAllInsuranceOrderControlles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { search, limit = 10, page = 1, order = 'first_name', sort }: any = req.query

        const getAllInsuranceOrder: any = await getAllInsuranceOrderService(search, limit, order, sort)
        const itemcount = getAllInsuranceOrder.count;
        const pagecount = Math.ceil(itemcount / limit);

        result(res, {
            result: getAllInsuranceOrder.data,
            itemcount,
            pagecount,
            page: paginate.getArrayPages(req)(pagecount, pagecount, page)
        })
        // result(res, await getAllInsuranceOrderService(search));
    } catch (error) {
        next(error);
    }
}

const connectApiFalcon = async (model: any) => {

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

    return res___
}



export default {
    mangeInsurance,
    getAllInsurance,
    getByIdInsurance,
    getPriceInsurance,
    delInsurance,
    addInsurance,
    getImagesHeaderInsurance,
    createInsuranceApplicant,
    getByInsuranceAndInstallment,
    mangeInsuranceOrder,
    getAllInsuranceOrderControlles,
}