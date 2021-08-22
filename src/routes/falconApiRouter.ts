import express from 'express';
import { confirmFalcon, pay } from '../controllers/falconControlles';
const router = express.Router();

/** ยืนยันการสั่งซื้อประกัน */
router.get('/confirm/:id', confirmFalcon)

/** จ่ายเงิน */
router.post('/pay', pay)


export default router;