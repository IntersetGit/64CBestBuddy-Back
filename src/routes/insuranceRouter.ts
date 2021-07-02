import express from 'express';
const router = express.Router();
import insuranceControlles from '../controllers/insuranceControlles';

/** เพิ่มแก้ไข ประกัน */
router.post('/mangeInsurance', insuranceControlles.mangeInsurance);
/** เรียกข้อมูลประกันทั้งหมด */
router.get('/getAllInsurance',insuranceControlles.getAllInsurance);
/** getbyid ประกัน */
router.get('/getByIdInsurance/:id',insuranceControlles.getByIdInsurance);
/** ลบข้อมูลประกัน */
router.post('/delInsurance/:id',insuranceControlles.delInsurance);

export default router;