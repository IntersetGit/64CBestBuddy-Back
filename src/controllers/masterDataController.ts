import { Request, Response, NextFunction } from 'express';
import { GetNameTitleDataService } from '../service/mas_name_title';
import { GetProviceDataService } from '../service/mas_province';
import { GetDistrictDataService } from '../service/mas_district';
import { GetSubDistrictDataService } from '../service/mas_sub_district';
import { GetBeneficiaryRelationDataService } from '../service/mas_beneficiary_relationship';
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
import { GetAllProvinceService } from '../service/mas_address_province';
import { GetAllDistrictService } from '../service/mas_address_district';
import { GetAllSubDistrictService } from '../service/mas_address_sub_district';
import { GetmasterPrefixService } from '../service/mas_prefix';
import { GetTaxdeductionDataService } from '../service/mas_taxdeduction';
import { GetTypeCardNumberDataService } from '../service/mas_type_card_number';
import { GetAllInsuranceCategoryService } from '../service/insurance_category';
import { combineTableNames } from 'sequelize/types/lib/utils';


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
        const { search }: any = req.query
        result(res, await GetBeneficiaryRelationDataService(search));

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
        const { search }: any = req.query
        result(res, await GetOccupationDataService(search));

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
        const { mas_insurance_type_id }: any = req.query
        result(res, await GetMasInsuranceTypeService(mas_insurance_type_id))

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
        const { search }: any = req.query
        const GetNameTitle = await GetNameTitleDataService()
        const BeneficiaryRelation = await GetBeneficiaryRelationDataService(search)
        const MaritalStatus = await GetMaritalStatusDataService()
        const Occupation = await GetOccupationDataService(search)
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
        const { insurance_category_id }: any = req.query
        result(res, {
            Type: await GetMasInsuranceTypeService(insurance_category_id),
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
export const GetAllAddress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { search }: any = req.query
        const GetAllProvince = await GetAllProvinceService(search)
        const GetAllDistrict = await GetAllDistrictService(search)
        const GetAllSubDistrict = await GetAllSubDistrictService(search)

        result(res, {
            GetAllProvince,
            GetAllDistrict,
            GetAllSubDistrict,
        })
    } catch (error) {
        next(error);
    }
}

/**API DATA ชุดใหม่ */
export const GetAllData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { search }: any = req.query
        const GetAllPrefix = await GetmasterPrefixService(search)
        const GetAllOccupation = await GetOccupationDataService(search)
        const GetAllBeneficiaryRelationship = await GetBeneficiaryRelationDataService(search)
        const GetAllTaxdeduction = await GetTaxdeductionDataService(search)
        const GetAllTypeCardNumber = await GetTypeCardNumberDataService(search)

        result(res, {
            GetAllPrefix,
            GetAllOccupation,
            GetAllBeneficiaryRelationship,
            GetAllTaxdeduction,
            GetAllTypeCardNumber,
        })
    } catch (error) {
        next(error);
    }
}

export const GetMasterInsuranceCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        result(res, await GetAllInsuranceCategoryService())
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
    GetAllAddress,
    GetAllData,
    GetMasterInsuranceCategory,
}