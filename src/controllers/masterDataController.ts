import { Request, Response, NextFunction} from 'express';
import { GetNameTitleDataService } from '../service/mas_name_title';
import { GetProviceDataService } from '../service/mas_province';
import { GetDistrictDataService } from '../service/mas_district';
import { GetSubDistrictDataService } from '../service/mas_sub_district';
import { GetBeneficiaryRelationDataService } from '../service/mas_beneficiary_relation';
import { GetMaritalStatusDataService } from '../service/mas_marital_status';
import { GetOccupationDataService } from '../service/mas_occupation';
import { GetPayerRelationDataService } from '../service/mas_payer_relation';
import { GetRefPolicyRelDataService } from '../service/mas_ref_policy_rel';
import { result } from '../util/index';

/** เรียกข้อมูล คำนำหน้าชื่อ */
export const GetNameTiteData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetNameTitleDataService());
        
    } catch (error) {
        next(error);
    }
}

/** เรีกยข้อมูล จังหวัด */
export const GetProvinceData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetProviceDataService());
        
    } catch (error) {
        next(error);
    }
}

/** เรียกข้อมูล อำเภอ */
export const GetDistrictData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetDistrictDataService());
        
    } catch (error) {
        next(error);
    }
}

/** เรียกข้อมูล ตำบล */
export const GetSubDistrictData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetSubDistrictDataService());
        
    } catch (error) {
        next(error);
    }
}


export const GetBeneficiaryRelationData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetBeneficiaryRelationDataService());
        
    } catch (error) {
        next(error);
    }
}



export const GetMaritalStatusData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetMaritalStatusDataService());
        
    } catch (error) {
        next(error);
    }
}



export const GetOccupationData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetOccupationDataService());
        
    } catch (error) {
        next(error);
    }
}



export const GetPayerRelationData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetPayerRelationDataService());
        
    } catch (error) {
        next(error);
    }
}



export const GetRefPolicyRelData = async(req: Request, res: Response, next:NextFunction) => {
    try {
        
        result(res, await GetRefPolicyRelDataService());
        
    } catch (error) {
        next(error);
    }
}

export default {
    GetNameTiteData,
    GetProvinceData,
    GetDistrictData,
    GetSubDistrictData,
    GetBeneficiaryRelationData,
    GetMaritalStatusData,
    GetOccupationData,
    GetPayerRelationData,
    GetRefPolicyRelData
}