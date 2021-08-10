import express from 'express';
const router = express.Router();
import insuranceControlles from '../controllers/insuranceControlles';
import authenticateToken from '../middleware/authenticateToken'

/** เพิ่มแก้ไข ประกัน */
router.post('/mangeInsurance', [authenticateToken], insuranceControlles.mangeInsurance);
/** เรียกข้อมูลประกันทั้งหมด */
router.post('/getAllInsurance', insuranceControlles.getAllInsurance);

/** ลบข้อมูลประกัน */
router.post('/delInsurance/:id', [authenticateToken], insuranceControlles.delInsurance);

router.post('/addInsurance', insuranceControlles.addInsurance);

/** getbyid ประกัน */
router.get('/getByIdInsurance/:id', insuranceControlles.getByIdInsurance);

/** ค้นหาราคา ประกัน  */
router.post('/getPriceInsurance', insuranceControlles.getPriceInsurance);

router.get('/getImagesHeaderInsurance', insuranceControlles.getImagesHeaderInsurance);
/**เพิ่มข้อมูล ผู้ขอประกัน */
router.post('/createInsuranceApplicant', insuranceControlles.createInsuranceApplicant);

/**เลือกซื้อแผนประกัน*/
router.post('/getByInsuranceAndInstallment', insuranceControlles.getByInsuranceAndInstallment);

export default router;