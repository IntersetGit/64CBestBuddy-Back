import { Request, Response, NextFunction } from 'express';
import { GetNameTitleDataService } from '../service/mas_name_title';
import { GetProviceDataService } from '../service/mas_province';
import { GetDistrictDataService } from '../service/mas_district';
import { GetSubDistrictDataService } from '../service/mas_sub_district';
import { GetBeneficiaryRelationDataService } from '../service/mas_beneficiary_relation';
import { GetMaritalStatusDataService } from '../service/mas_marital_status';
import { GetOccupationDataService } from '../service/mas_occupation';
import { GetPayerRelationDataService } from '../service/mas_payer_relation';
import { GetRefPolicyRelDataService } from '../service/mas_ref_policy_rel';
import { GetMasInsuranceTypeService } from '../service/mas_insurance_type';
import { GetMasAgeRangeDataService } from '../service/mas_age_range';
import { GetMasInstallmentDataService } from '../service/mas_installment';
import { getAllSysmRolesService } from '../service/sysm_roles'
import { decodeToken } from '../util/index'
import { result } from '../util/index';
import { getAllProvinceService } from '../service/mas_address_province';


/** เรียกข้อมูล คำนำหน้าชื่อ */
export const GetNameTiteData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetNameTitleDataService());

    } catch (error) {
        next(error);
    }
}

/** เรียกข้อมูล จังหวัด */
export const GetProvinceData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetProviceDataService());

    } catch (error) {
        next(error);
    }
}

/** เรียกข้อมูล อำเภอ */
export const GetDistrictData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetDistrictDataService());

    } catch (error) {
        next(error);
    }
}

/** เรียกข้อมูล ตำบล */
export const GetSubDistrictData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetSubDistrictDataService());

    } catch (error) {
        next(error);
    }
}


export const GetBeneficiaryRelationData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetBeneficiaryRelationDataService());

    } catch (error) {
        next(error);
    }
}



export const GetMaritalStatusData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetMaritalStatusDataService());

    } catch (error) {
        next(error);
    }
}



export const GetOccupationData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetOccupationDataService());

    } catch (error) {
        next(error);
    }
}



export const GetPayerRelationData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetPayerRelationDataService());

    } catch (error) {
        next(error);
    }
}



export const GetRefPolicyRelData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetRefPolicyRelDataService());

    } catch (error) {
        next(error);
    }
}

/** เรียกข้อมูล ประเภทประกัน */
export const GetMasInsuranceTypeData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetMasInsuranceTypeService())

    } catch (error) {
        next(error);
    }
}

/** เรียกช่วงอายุ */
export const GetMasAgeRangeData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetMasAgeRangeDataService());

    } catch (error) {
        next(error);
    }
}

/** เรียกช่วงรายปี */
export const GetMasInstallmentData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        result(res, await GetMasInstallmentDataService());

    } catch (error) {
        next(error);
    }
}


export const GetAllApiMasterData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const GetNameTitle = await GetNameTitleDataService()
        const BeneficiaryRelation = await GetBeneficiaryRelationDataService()
        const MaritalStatus = await GetMaritalStatusDataService()
        const Occupation = await GetOccupationDataService()
        const PayerRelation = await GetPayerRelationDataService()
        const RefPolicyRel = await GetRefPolicyRelDataService()

        result(res, {
            GetNameTitle: GetNameTitle,
            BeneficiaryRelation: BeneficiaryRelation,
            MaritalStatus: MaritalStatus,
            Occupation: Occupation,
            PayerRelation: PayerRelation,
            RefPolicyRel: RefPolicyRel
        })

    } catch (error) {
        next(error);
    }
}

/*  */
export const GetMasterInsurance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        result(res, {
            Type: await GetMasInsuranceTypeService(),
            AgeRang: await GetMasAgeRangeDataService(),
            Installment: await GetMasInstallmentDataService(),
        })

    } catch (error) {
        next(error);
    }
}


export const GetSysmRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const decode: any = await decodeToken(req.headers['authorization'])
        result(res, await getAllSysmRolesService())

    } catch (error) {
        next(error);
    }
}

/**API ชุดใหม่ */
export const GetAllProvince = async (req: Request, res: Response, next: NextFunction) => {
    try {
        result(res, await getAllProvinceService())
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
    GetRefPolicyRelData,
    GetAllApiMasterData,
    GetMasInsuranceTypeData,
    GetMasAgeRangeData,
    GetMasInstallmentData,
    GetMasterInsurance,
    GetSysmRoles,
    GetAllProvince
}