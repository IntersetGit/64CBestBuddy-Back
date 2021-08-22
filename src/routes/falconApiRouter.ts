import express from 'express';
import { confirm_falcon, pay } from '../controllers/falconControlles';
const router = express.Router();

/** ยืนยันการสั่งซื้อประกัน */
router.get('/confirm', confirm_falcon)

/** จ่ายเงิน */
router.post('/pay', pay)


export default router;