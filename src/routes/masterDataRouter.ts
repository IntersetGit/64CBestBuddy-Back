import express from 'express';
const router = express.Router();
import masterDataControlles from '../controllers/masterDataController';

/** เรียกจังหวัด */
router.get('/GetProvinceData', masterDataControlles.GetProvinceData);
/** เรียกขอำเภอ */
router.get('/GetDistrictData', masterDataControlles.GetDistrictData);
/** เรียกตำบล */
router.get('/GetSubDistrictData', masterDataControlles.GetSubDistrictData);
/** เรียกคำนำหน้าชื่อ */
router.get('/GetNameTiteData', masterDataControlles.GetNameTiteData);

router.get('/GetBeneficiaryRelationData', masterDataControlles.GetBeneficiaryRelationData);
router.get('/GetMaritalStatusData', masterDataControlles.GetMaritalStatusData);
router.get('/GetOccupationData', masterDataControlles.GetOccupationData);
router.get('/GetPayerRelationData', masterDataControlles.GetPayerRelationData);
router.get('/GetRefPolicyRelData', masterDataControlles.GetRefPolicyRelData);



export default router;