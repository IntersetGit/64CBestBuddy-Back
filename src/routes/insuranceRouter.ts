import express from 'express';
const router = express.Router();
import insuranceControlles from '../controllers/insuranceControlles';

/** เพิ่มแก้ไข ประกัน */
router.post('/mangeInsurance', insuranceControlles.mangeInsurance);
/** เรียกข้อมูลประกันทั้งหมด */
router.post('/getAllInsurance', insuranceControlles.getAllInsurance);
/** getbyid ประกัน */
router.get('/getByIdInsurance/:id', insuranceControlles.getByIdInsurance);
/** ลบข้อมูลประกัน */
router.post('/delInsurance/:id', insuranceControlles.delInsurance);

router.post('/addInsurance', insuranceControlles.addInsurance);

export default router;