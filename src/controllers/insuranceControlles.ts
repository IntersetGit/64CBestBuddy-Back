import { Request, Response, NextFunction } from 'express';
import { result } from '../util/index';
import { addInsuranceService, editInsuranceService, getAllInsuranceService, getByIdInsuranceService, delInsuranceService, createInsuranceService } from '../service/insurance';
import { insuranceinterface, installmentInterface } from '../interface/insuranceinterface';
import path from 'path';
import config from "../config";
import fs from 'fs';
import { sequelize } from '../models';
import { bulkCreateInsuranceMasPlanService, getByInsuranceIdInsuranceMasPlanService } from '../service/insurance_mas_plan';
import { bulkCreateinsuranceMasProtectionService, getByInsuranceIdInsuranceMasProtectionService } from '../service/insurance_mas_protection';
import { bulkCreateMatchProtectionPlanService, getDataByProtectionIdService } from '../service/match_protection_plan';
import { bulkCreateInsurancePriceService } from '../service/insurance_price';

export const mangeInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model: insuranceinterface = req.body;

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


export const getByIdInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const table: any = {
            head: [],
            data: []
        };
        table.head = await getByInsuranceIdInsuranceMasPlanService(id);
        const protection: any = await getByInsuranceIdInsuranceMasProtectionService(id);

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
            data: await getByIdInsuranceService(id),
            table,
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


export default {
    mangeInsurance,
    getAllInsurance,
    getByIdInsurance,
    delInsurance,
    addInsurance,
}