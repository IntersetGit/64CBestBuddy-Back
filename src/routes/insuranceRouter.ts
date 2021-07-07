import express from 'express';
const router = express.Router();
import insuranceControlles from '../controllers/insuranceControlles';

/** เพิ่มแก้ไข ประกัน */
router.post('/mangeInsurance', insuranceControlles.mangeInsurance);
/** เรียกข้อมูลประกันทั้งหมด */
router.post('/getAllInsurance', insuranceControlles.getAllInsurance);

/** ลบข้อมูลประกัน */
router.post('/delInsurance/:id', insuranceControlles.delInsurance);

router.post('/addInsurance', insuranceControlles.addInsurance);

/** getbyid ประกัน */
router.get('/getByIdInsurance/:id', insuranceControlles.getByIdInsurance);

/** ค้นหาราคา ประกัน  */
router.post('/getPriceInsurance', insuranceControlles.getPriceInsurance);

export default router;