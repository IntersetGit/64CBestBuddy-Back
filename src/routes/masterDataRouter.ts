import express from 'express';
const router = express.Router();
import masterDataControlles from '../controllers/masterDataController';
import authenticateToken from '../middleware/authenticateToken'

/** เรียกจังหวัด */
router.get('/GetProvinceData', masterDataControlles.GetProvinceData);
/** เรียกขอำเภอ */
router.get('/GetDistrictData', masterDataControlles.GetDistrictData);
/** เรียกตำบล */
router.get('/GetSubDistrictData', masterDataControlles.GetSubDistrictData);
/** เรียกคำนำหน้าชื่อ */
router.get('/GetNameTiteData', masterDataControlles.GetNameTiteData);
/** เรียกประเภทประกัน */
router.get('/GetMasInsuranceTypeData', masterDataControlles.GetMasInsuranceTypeData);
/** เรียกช่วงอายุ */
router.get('/GetMasAgeRangeData', masterDataControlles.GetMasAgeRangeData);
/** เรียกช่วง รายเดือน รายปี */
router.get('/GetMasInstallmentData', masterDataControlles.GetMasInstallmentData);

router.get('/GetBeneficiaryRelationData', masterDataControlles.GetBeneficiaryRelationData);
router.get('/GetMaritalStatusData', masterDataControlles.GetMaritalStatusData);
router.get('/GetOccupationData', masterDataControlles.GetOccupationData);
router.get('/GetPayerRelationData', masterDataControlles.GetPayerRelationData);
router.get('/GetRefPolicyRelData', masterDataControlles.GetRefPolicyRelData);


router.get('/GetAllApiMasterData', masterDataControlles.GetAllApiMasterData)

router.get('/GetMasterInsurance', masterDataControlles.GetMasterInsurance)


/** ----------- จัดการผู้ใช้งาน-------------- */
router.get('/GetSysmRoles', [authenticateToken], masterDataControlles.GetSysmRoles)



export default router;