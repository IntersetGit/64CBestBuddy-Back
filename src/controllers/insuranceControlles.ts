import { Request, Response, NextFunction } from 'express';
import { result } from '../util/index';
import { addInsuranceService, editInsuranceService, getAllInsuranceService, getByIdInsuranceService, delInsuranceService } from '../service/insurance';
import { insuranceinterface, insurance_typeInterface, installmentInterface } from '../interface/insuranceinterface';
import { UsersInterface } from '../interface/loginInterface';

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
        const id: string = req.params.id

        result(res, await getByIdInsuranceService(id));

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


export default {
    mangeInsurance,
    getAllInsurance,
    getByIdInsurance,
    delInsurance
}